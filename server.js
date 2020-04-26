const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactionsRoutes');

const app = express();

app.use('/api/transactions', transactions);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
