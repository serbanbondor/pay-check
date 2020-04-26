// @desc Get all transactions
// @route GET /api/transactions
// method that gets info and is imported in routes
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};

// @desc Add transaction
// @route POST /api/transactions
// method that sends  info and is imported in routes
exports.addTransactions = (req, res, next) => {
  res.send('POST transactions');
};

// @desc Delete transaction
// @route DELETE /api/transactions:id
// method that deletes info and is imported in routes
exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE transactions');
};
