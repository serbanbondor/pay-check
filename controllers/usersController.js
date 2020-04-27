const Users = require('../models/Users');

// @desc Get all transactions
// @route GET /api/transactions
// method that gets info and is imported in routes
exports.getUser = async (req, res, next) => {
  try {
    // get all transactions find method find
    const users = await Users.find();
    // if status 200(ok) send this
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    //if status 500(problem) send this
    return res.status(500).json({
      success: false,
      error: 'Server error! Not getting any users!',
    });
  }
};

// @desc Add transaction
// @route POST /api/transactions
// method that sends  info and is imported in routes
exports.addUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    const user = await Users.create(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error! User was not added',
    });
  }
};
