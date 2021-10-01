const express = require('express');
const bodyParser = require('body-parser')
const myErrorLogger = require('./utilities/errorLogger');
const myRequestLogger = require('./utilities/requestLogger');
const mongoose = require('mongoose');
const app = express();
const login = require('./models/login');
const router = require('./routes/routeing');
const cors = require("cors")



app.use(cors())
app.use(bodyParser.json());

app.use(myRequestLogger);
app.use('/', router);
app.use(myErrorLogger);


const PORT = process.env.PORT ||5000;


app.listen(PORT,console.log(
`Server started on port ${PORT}`));
