const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())                 
app.use(bodyParser.json());
app.use(cors())

//import all routes
const user = require('./routes/userRoutes');

app.use('/api/v1',user);



module.exports = app;