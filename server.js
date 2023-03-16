const { json } = require('express');
const express = require('express'); 
const res = require('express/lib/response');


const app = express();

app.use(express.json);
app.use(express.urlencoded());


let users = [
    {id: 1, name: 'rohit'},
    {id: 2, name: 'abhi'},
    {id: 3, name: 'navu'},
];




app.listen(8000,()=>{
    console.log('The server have ears now on port 3000')
})
; 
  
app.get('/', (req, res) => { 
    res.send("Welcome to our server");
  })
