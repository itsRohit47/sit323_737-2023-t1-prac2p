const { json } = require('express');
const express = require('express'); 
const app = express(); 


// Need to import Express libraries to read POST body data (e.g. req.body)
app.use(express.json());             
app.use(express.urlencoded()); 

let users = [ 
  { id: 1, name: 'John' }, 
  { id: 2, name: 'Jane' }, 
  { id: 30, name: 'Bob' }
]; 


app.get('/', (req, res) => { 
  res.send("Welcome to our server");
}); 


app.get('/users', (req, res) => { 
  res.json(users); 
}); 

app.listen(3000, () => { 
    console.log('Server is listening on port 3000'); 
  }); 