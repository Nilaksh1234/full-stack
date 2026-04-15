const express = require('express');
const app = express();
app.use(express.json()); 

// DATA MODEL: The backend already has user data stored [cite: 6]
let users = [
    {
        id: 1, 
        name: "Manish", 
        age: 25, 
        role: "Developer" 
    }
];

// TASK 1: VIEW USER PROFILE (GET) [cite: 24]
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found.");
    
    res.status(200).json(user);
});

// TASK 2: CREATE USER PROFILE (POST) [cite: 34]
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1, 
        name: req.body.name, 
        age: req.body.age, 
        role: req.body.role
    }; 
    
    users.push(newUser); 
    res.status(201).json({ message: "User successfully created!", user: newUser }); 
});

// TASK 3: UPDATE FULL PROFILE (PUT) 
app.put('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send("User not found.");

    users[userIndex] = {
        id: parseInt(req.params.id),
        name: req.body.name,
        age: req.body.age,
        role: req.body.role
    };
    res.status(200).json(users[userIndex]);
});

// TASK 4: UPDATE ONLY ONE FIELD (PATCH) [cite: 54]
app.patch('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send("User not found.");

    // Use spread operator correctly [cite: 62]
    users[userIndex] = { 
        ...users[userIndex], 
        ...req.body 
    };
    
    res.status(200).json(users[userIndex]);
});

// TASK 5: DELETE USER PROFILE (DELETE) [cite: 63]
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    
    if (userIndex === -1) {
        return res.status(404).json({ message: "User is already deleted or does not exist." });
    }

    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully." }); 
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));