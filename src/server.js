const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const routes = require('./routes');
const connectToDatabase = require('./database.js');
const cors = require('cors');
const port = 3333;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})