const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb://localhost:27017'; // Change if needed
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('grievanceDB');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

connectDB();

// User signup
app.post('/api/user/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const users = db.collection('users');
  const existingUser = await users.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  await users.insertOne({ name, email, password, role: 'user' });
  res.json({ message: 'User signed up successfully' });
});

// User login
app.post('/api/user/login', async (req, res) => {
  const { email, password } = req.body;
  const users = db.collection('users');
  const user = await users.findOne({ email, password, role: 'user' });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  res.json({ message: 'User logged in successfully', userId: user._id });
});

// Admin signup
app.post('/api/admin/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const users = db.collection('users');
  const existingAdmin = await users.findOne({ email });
  if (existingAdmin) {
    return res.status(400).json({ message: 'Admin already exists' });
  }
  await users.insertOne({ name, email, password, role: 'admin' });
  res.json({ message: 'Admin signed up successfully' });
});

// Admin login
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;
  const users = db.collection('users');
  const admin = await users.findOne({ email, password, role: 'admin' });
  if (!admin) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  res.json({ message: 'Admin logged in successfully', adminId: admin._id });
});

// Submit complaint
app.post('/api/complaints', async (req, res) => {
  const { userId, text } = req.body;
  const complaints = db.collection('complaints');
  await complaints.insertOne({ userId: ObjectId(userId), text, status: 'Pending', adminReply: '' });
  res.json({ message: 'Complaint submitted successfully' });
});

// Get all complaints (admin)
app.get('/api/complaints', async (req, res) => {
  const complaints = db.collection('complaints');
  const allComplaints = await complaints.find().toArray();
  res.json(allComplaints);
});

// Update complaint status and reply (admin)
app.put('/api/complaints/:id', async (req, res) => {
  const { id } = req.params;
  const { status, adminReply } = req.body;
  const complaints = db.collection('complaints');
  await complaints.updateOne(
    { _id: ObjectId(id) },
    { $set: { status, adminReply } }
  );
  res.json({ message: 'Complaint updated successfully' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
