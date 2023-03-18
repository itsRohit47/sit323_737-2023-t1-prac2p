/*This code sets up an Express server that listens on port 3000. 
It imports the 'path' library and initializes the Express app as a constant variable.
The express.json() middleware function is used to parse incoming requests with JSON payloads. 
The express.urlencoded() middleware function is used to parse incoming requests with urlencoded payloads.
The app.get() method sets up a route for GET requests to the root URL ('/'). 
When a GET request is made to the root URL, the server responds by sending the 'index.html' file using the res.sendFile() method.
Finally, the app.listen() method starts the server and listens on port 3000. When the server is ready to accept connections, 
it logs a message to the console.*/


const { json } = require('express');
const express = require('express'); 

const path = require('path');
const app = express(); 

app.use(express.json());             
app.use(express.urlencoded()); 

app.get('/', (req, res) => { 
  const options = {
    root: path.join(__dirname)
  };

  const fileName = 'index.html';
    res.sendFile(fileName, options);
}); 

app.listen(3000, () => { 
    console.log('Server is listening on port 3000'); 
}); 

//a simple express server to serve an index.html file