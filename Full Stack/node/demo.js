const express = require('express');
const fs = require('fs');
const app = express();
 const data = JSON.parse(fs.readFileSync('student.json'));
app.use(express.json()); 


// Get all students
app.get('/students', (req, res) => {
    
    res.json(data);
});

// Get student by name
app.get('/student/:name', (req, res) => {
   
    const student = data.find(s => s.name == req.params.name);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

// Add a new student 
app.post('/student', (req, res) => {
   
    const newStudent = req.body;
    data.push(newStudent);
    fs.writeFileSync('student.json', JSON.stringify(data, null, 2));
    res.status(201).json(newStudent);
});

//delete a student by name simple
app.delete('/student/:name', (req, res) => {
    const studentIndex = data.findIndex(s => s.name == req.params.name);
    if (studentIndex !== -1) {
        const deletedStudent = data.splice(studentIndex, 1);
        fs.writeFileSync('student.json', JSON.stringify(data, null, 2));
        res.json(deletedStudent);
    } else {
        res.status(404).send('Student not found');
    }
});

// Update a student by name
app.put('/student/:name', (req, res) => {
    const studentIndex = data.findIndex(s => s.name == req.params.name);
    if (studentIndex !== -1) {
        const updatedStudent = { ...data[studentIndex], ...req.body };
        data[studentIndex] = updatedStudent;
        fs.writeFileSync('student.json', JSON.stringify(data, null, 2));
        res.json(updatedStudent);
    } else {
        res.status(404).send('Student not found');
    }
});


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
