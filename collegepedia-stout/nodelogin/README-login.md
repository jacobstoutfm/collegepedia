This folder is called nodelogin.
So, this directory contains the basic setup that I have for creating user authentication so far.
If this is not working on your system, please do the following:
cd into this folder via command prompt
run: npm install express bcrypt body-parser --save
run: node app.js
launch http://localhost:3000 on your browser

It should work after this. So far, the nodelogin directory allows for a login and registation.
The registration process only saves the credentials to a local database at the moment, and deletes
the credentials once the host is stopped. This is because we have not integrated PostGreSQL into the
nodelogin directory yet, which is urgent to our project.

This is a working template for now which we should work on to get fixed soon. 
