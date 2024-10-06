const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let formData = [];

app.use(express.static("public"));

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); 
});

app.post("/submit", (req, res) => {
  const { name, email, password } = req.body;
  const newData = { name, email, password };
  formData.push(newData);
  res.json({ message: "Form data submitted successfully", data: newData });
});

app.get("/get-data", (req, res) => {
  if (Object.keys(formData).length === 0) {
    return res.status(404).json({ message: "No data available" });
  }
  res.json(formData);
});

app.listen(3000);
