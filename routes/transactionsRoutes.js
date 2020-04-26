const express = require('express');
const router = express.Router();
const { getTransactions } = require('../controllers/transactionsController');

// import the method from the controller and this gets send to the api
router.route('/').get(getTransactions);

module.exports = router;
