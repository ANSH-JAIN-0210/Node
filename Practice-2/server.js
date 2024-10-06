const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home',(req,res)=>{
    res.send('Home Page');
})
app.get('/about',(req,res)=>{
    res.send('About Page');
})
app.get('/contact',(req,res)=>{
    res.send('Contact Page');
})

app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','form.html'));
})
app.get('/files', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*',(req,res)=>{
    res.send('Error 404 ! Page Not Found');
})


app.listen(3000);