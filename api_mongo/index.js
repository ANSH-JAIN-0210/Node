const express = require('express');
const app = express();
const {dbConnection} = require('./database');
app.listen(3000);


app.get('/',async(req,res)=>{
    try{
        const db = await dbConnection();
        const collection = db.collection('student');
        const student = await collection.find().toArray();
        res.json(student);
    }catch(err){
        console.log(err);
    }
})

app.use(express.json());

app.post('/stud',async(req,res)=>{
    try{
        const db = await dbConnection();
        const collection = db.collection('student');
        let result = await collection.insertOne(req.body);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
})