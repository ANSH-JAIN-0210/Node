const express = require("express");
const app = express();
const path = require("path");
const { dbConnection } = require('./database');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get('/get-data', async (req, res) => {
    try {
        const db = await dbConnection();
        const collection = db.collection('student');
        const student = await collection.find().toArray();
        res.json(student);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching data");
    }
});
app.post("/submit", async (req, res) => {
    try {
        const { id, name, course } = req.body;
        const db = await dbConnection();
        const collection = db.collection('student');
        const newStudent = { id, name, course };
        const result = await collection.insertOne(newStudent);
        res.json({ message: "Form data submitted successfully", data: newStudent });
    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Error submitting form data");
    }
});
