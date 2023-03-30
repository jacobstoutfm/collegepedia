This is the documentation for the node-api-postgres directory.
This directory is used to connect the backend to the frontend of this project.

This directory will run off of port 5000 of your localhost. 
The frontend of this project will run off of port 3000 of your localhost. This is important to remember.

Here is a breakdown of how to work with this directory: 
cd into this directory [collegepedia-stout/node-api-postgres]
run node index.js

If your project is configured correctly, your command prompt should read:
App running on port 5000.

Open another terminal [IMPORTANT] DO NOT RUN ON SAME TERMINAL
cd into main project / frontend [collegepedia]
run npm start

The command prompt should read: 
Starting the development server...
Local: http://locahost:3000

Your browser should have launched and displayed the front-end.
As of now, we do have a test of communication with the back-end and front-end.
You can check this test by making sure postgresql is launched on your device,
and click the "Print Users" button in the Students page. 
Verify that your connections are established by inspect element > network and seeing the query
pop up. 

