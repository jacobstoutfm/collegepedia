// server creation
// in terminal enter: node api.js
// navigate to http://localhost:3300/users
const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Server is now listening at port 3000");
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

client.connect();


// return all users
app.get('/users', (req, res)=>{
    client.query('Select * from users', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


// return user by id
app.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})