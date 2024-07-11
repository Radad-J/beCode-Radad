const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database
let users = [];

// Middleware to check api_key for POST, PUT, DELETE
const checkApiKey = (req, res, next) => {
    const apiKey = req.query.api_key;
    if (!apiKey || apiKey !== 'blabla') {
        return res.status(403).json({ error: 'Forbidden - Invalid or missing API key' });
    }
    next();
};

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: `User with id ${req.params.id} not found` });
    }
    res.json(user);
});

// Create a new user
app.post('/api/users', checkApiKey, (req, res) => {
    const { username, firstName, lastName, age, isAdmin } = req.body;
    if (!username || !firstName || !lastName || age === undefined || isAdmin === undefined) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newUser = { id: uuidv4(), username, firstName, lastName, age, isAdmin };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update user by ID
app.put('/api/users/:id', checkApiKey, (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: `User with id ${req.params.id} not found` });
    }
    const { username, firstName, lastName, age, isAdmin } = req.body;
    if (!username || !firstName || !lastName || age === undefined || isAdmin === undefined) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    users[userIndex] = { id: req.params.id, username, firstName, lastName, age, isAdmin };
    res.json(users[userIndex]);
});

// Delete user by ID
app.delete('/api/users/:id', checkApiKey, (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: `User with id ${req.params.id} not found` });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'This route does not exist' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
