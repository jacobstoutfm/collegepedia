const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const users = require('./data').userTable;
const port = 4000;
const app = express();
const server = http.createServer(app);

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'seniorproject',
    port: 5432,
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./public')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.post('/register', async (req, res) => {
    try{
        let foundUser = users.find((data) => req.body.email === data.email);
        if (!foundUser) {
    
            let hashPassword = await bcrypt.hash(req.body.password, 10);
    
            let newUser = {
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                university: req.body.university,
                password: hashPassword,
            };

            users.push(newUser);
            console.log('User list', users);

            const query = 'INSERT INTO "storedUsers"(id, username, email, university, password) VALUES($1, $2, $3, $4, $5)';
            const values = [newUser.id, newUser.username, newUser.email, newUser.university, newUser.password];
      
            await pool.query(query, values);
            res.send("<div align ='center'><h2>Registration Successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another account.</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already in use.</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch{
        res.send("Internal server error");
    }
});

app.post('/login', async (req, res) => {
    try{
        const query = 'SELECT * FROM "storedUsers" WHERE email = $1';
        const values = [req.body.email];

        const { rows } = await pool.query(query, values);

        if (rows.length > 0) {
            let foundUser = rows[0];

            let submittedPass = req.body.password; 
            let storedPass = foundUser.password; 

            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
            if (passwordMatch) {
                let usrname = foundUser.username;
                res.send(`<div align ='center'><h2>Login Successful!</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href="http://localhost:3000/">Continue to website.</a></div>`);
            } else {
            res.send("<div align ='center'><h2>Invalid email or password.</h2></div><br><br><div align ='center'><a href='./login.html'>Back to login page.</a></div>");
            }
        }
        else {
            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            await bcrypt.compare(req.body.password, fakePass);

            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
        }
    } catch{
        res.send("Internal server error");
    }
});

server.listen(4000, function(){
    console.log("server is listening on port: 4000");
});