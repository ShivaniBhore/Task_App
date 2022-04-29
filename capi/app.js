const express = require('express');
const res = require('express/lib/response');    
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const env = require('dotenv/config');
const cors = require('cors')

app.use(bodyparser.json());
app.use(cors())

// Import Routes
const postsRoute = require('./routes/posts');

app.use ('/posts', postsRoute);


//ROUTES
app.get('/', (req,res)=> {
   res.send('We are on home');
   
});

  

 // connect to db 
   mongoose.connect(process.env.DB_CONNECTION,()=>
    console.log('connect to DB ')
 );


//how to start listing to a server 
app.listen('3001');



