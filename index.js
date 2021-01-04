const parser = require('body-parser');
const{ pool } = require('./models/db')
const express=require('express');
const app = new express();
const students = require('./routes/students');
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/api/students',students);
require('./models/db');



const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port school managment ${port}...`));