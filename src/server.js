require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const connectToDatabase = require('./database.js');
connectToDatabase();
const port = 3333;
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})