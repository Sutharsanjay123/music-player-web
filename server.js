const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users', 'users.json');

// Middleware
app.use(cors());
app.use(express.json());

// Ensure the users.json file exists
if (!fs.existsSync(USERS_FILE)) {
  fs.mkdirSync(path.dirname(USERS_FILE), { recursive: true });
  fs.writeFileSync(USERS_FILE, '[]', 'utf-8');
}

// const usersPath = './users/users.json';

app.get('/getUser/:username', (req, res) => {
  const username = req.params.username;
  const users = JSON.parse(fs.readFileSync('./users/users.json', 'utf-8'));
  const user = users.find(u => u.username === username);

  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


// Helper function to load users
const loadUsers = () => {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
};

// Helper function to save users
const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
};

// REGISTER endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing fields' });

  const users = loadUsers();
  const userExists = users.some(user => user.username === username);
  if (userExists) return res.status(409).json({ message: 'Username already taken' });

  const newUser = { username, password };
  users.push(newUser);
  saveUsers(users);

  res.status(201).json({ message: 'Registered successfully', user: newUser });
});

// LOGIN endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing fields' });

  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid username or password' });

  res.status(200).json({ message: 'Login successful', user });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
