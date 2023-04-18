This folder is called nodelogin.
So, this directory contains the basic setup that I have for creating user authentication so far.
If this is not working on your system, please do the following:
cd into this folder via command prompt
run: npm install express bcrypt body-parser --save
run: node app.js
launch http://localhost:4000 on your browser

It should work after this. So far, the nodelogin directory allows for a login and registation.
The registration process only saves the credentials to a local database at the moment, and deletes
the credentials once the host is stopped. This is because we have not integrated PostGreSQL into the
nodelogin directory yet, which is urgent to our project.

This is a working template for now which we should work on to get fixed soon. 

**UPDATE** I have now integrated a way to transfer to the frontpage after logging in.
Make sure that you run both the npm start commands for the main directory and the
node app.js command for the nodelogin directory.

You should start up localhost:4000, login, click continue after logging in, and
it will bring you to localhost:3000.

Summary of hosts:
localhost:4000 -- Login server
localhost:3000 -- Webpage server
localhost:5000 -- Backend server

The nodelogin server now communicates with postgresql. The user information will be saved to a 
table called storedUsers, and you can now login to the database even after rebooting the servers.
The user information will also be displayed to the students page on the front-end, localhost:3000.