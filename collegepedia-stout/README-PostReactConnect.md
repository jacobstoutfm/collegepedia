***UNDERSTANDING POSTGRESQL AND REACT/NODE.JS CONNECTION***
PROGRAMS NEEDED:
Node.js / create-react-app [run through terminal]
Postgresql

After creating the databasepg.js file, do npm init -y in the terminal.
Then, do npm install pg in the terminal.
Once this is completed, we have our databasepg.js file loaded in your IDE.
You can modify this file however you want to correspond with the requirements we set.
To run the file, type 'node databasepg.js' in the terminal.

For the time being, the databasepg.js file only querys 'Select * from users' 
and prints the user table in the terminal. This will be changed as time goes on.

**To launch our react-app, make sure after cd into the directory, enter npm start in the terminal.**
**If you run into an error launching, run npm audit fix --force in the terminal.**

Run npm i express pg if needed.

todo:
/students
query db for students
return json
axios / fetch client in react.js project


With Axios, 
Inspect --> Network 
Should have a request here that populates a JSON (parsed?)
and calls the getUsers method to populate on the page.

***If running npm start gives error about router, run npm i -D react-router-dom***
