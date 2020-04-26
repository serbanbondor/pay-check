// import express and dotenv and db connection
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectToDatabase');

// get info from the config file with dotenv
dotenv.config({ path: './config/config.env' });

// just call the connect to db function
connectDB();

// get the routes file
const transactions = require('./routes/transactionsRoutes');

// create our express app
const app = express();

// create the api and add the info from routes file
app.use('/api/transactions', transactions);

// get the port with dotenv using process.env
const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
