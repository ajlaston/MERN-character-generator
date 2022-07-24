const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const url = 'mongodb+srv://admin:gold77@cluster0.rloylxh.mongodb.net/characterdb?retryWrites=true&w=majority';

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

app.use('/character', require('./routes/character'));

app.use((err, req, res, next)=>{
    console.error(err);
    return res.send({error : err});
})

mongoose.connect(url);
const db = mongoose.connection;
db.once('open', ()=>{
    console.log('connected to database');
})

app.listen(port, ()=> console.log('listening on port 8000')); 