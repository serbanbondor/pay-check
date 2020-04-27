const Transactions = require('../models/Transactions');

// @desc Get all transactions
// @route GET /api/transactions
// method that gets info and is imported in routes
exports.getTransactions = async (req, res, next) => {
  try {
    // get all transactions find method find
    const transactions = await Transactions.find();
    // if status 200(ok) send this
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    //if status 500(problem) send this
    return res.status(500).json({
      success: false,
      error: 'Server error! Not getting any transactions!',
    });
  }
};

// @desc Add transaction
// @route POST /api/transactions
// method that sends  info and is imported in routes
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount, userId } = req.body;

    const transaction = await Transactions.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error! Transaction was not added',
    });
  }
};

// @desc Delete transaction
// @route DELETE /api/transactions:id
// method that deletes info and is imported in routes
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transactions.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found!',
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error! Could not delete transaction!',
    });
  }
};
