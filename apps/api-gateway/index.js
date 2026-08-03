require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Middleware
app.use(cors());
app.use(express.json());

// -------------------------------------------------------------
// ADMIN AUTH MIDDLEWARE
// -------------------------------------------------------------
const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Forbidden: Admin access required' });
    }
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Invalid or expired token' });
  }
};

// -------------------------------------------------------------
// PUBLIC ROUTES
// -------------------------------------------------------------
app.get('/', (req, res) => res.send('Welcome to GoatCare AI API!'));
app.get('/api/health', (req, res) => res.json({ message: 'GoatCare API is live!' }));

// 1. ADMIN LOGIN
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@goatcare.ai';
  const adminPass = process.env.ADMIN_PASSWORD || 'admin123';

  if (email === adminEmail && password === adminPass) {
    const token = jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ success: true, token, message: 'Admin authenticated successfully' });
  }

  return res.status(401).json({ success: false, error: 'Invalid admin credentials' });
});

// 2. USER ROUTES
app.post('/api/users/register', async (req, res) => {
  try {
    const { name, phone, preferred_lang } = req.body;
    const newUser = await prisma.user.create({
      data: { name, phone, preferred_lang: preferred_lang || 'hi' }
    });
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Phone number might already exist.' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({ include: { goats: true } });
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch users' });
  }
});

// 3. GOAT ROUTES
app.post('/api/goats', async (req, res) => {
  try {
    const { farmerId, tagNumber, breed } = req.body;
    const newGoat = await prisma.goat.create({ data: { farmerId, tagNumber, breed } });
    res.status(201).json({ success: true, goat: newGoat });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Tag number might already exist.' });
  }
});

app.get('/api/goats', async (req, res) => {
  try {
    const goats = await prisma.goat.findMany();
    res.json({ success: true, goats });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch goats' });
  }
});

// 4. BREED ROUTES
app.get('/api/breeds', async (req, res) => {
  try {
    const breeds = await prisma.breed.findMany();
    res.json({ success: true, data: breeds });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch breeds' });
  }
});

// 5. CHATBOT ROUTE
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const pythonResponse = await fetch('http://127.0.0.1:5000/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const aiData = await pythonResponse.json();
    if (aiData.success) {
      res.json({ success: true, reply: aiData.reply });
    } else {
      res.status(500).json({ success: false, error: 'Python AI failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to connect to AI Microservice' });
  }
});

// -------------------------------------------------------------
// PROTECTED ADMIN ROUTES (Require Admin Token)
// -------------------------------------------------------------

// Delete a user
app.delete('/api/admin/users/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete user' });
  }
});

// Update a user's details
app.put('/api/admin/users/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, preferred_lang } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, phone, preferred_lang }
    });
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update user' });
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});