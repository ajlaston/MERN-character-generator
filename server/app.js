const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const url = 'mongodb://localhost:27017/characterdb';

app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

app.use('/character', require('./routes/character'));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.use((err, req, res, next)=>{
    console.error(err);
    return res.send({error : err});
})

mongoose.connect(url, ()=> console.log('connected to database'));

app.listen(port, ()=> console.log('listening on port 8000'));