const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactionsController');

// import the method from the controller and this gets send to the api - used for GET and POST
router.route('/').get(getTransactions).post(addTransaction);

// import the method from the controller and this gets send to the api - used for DELETE(needs id)
router.route('/:id').delete(deleteTransaction);

module.exports = router;
