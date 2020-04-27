const express = require('express');
const router = express.Router();
const { getUser, addUser } = require('../controllers/usersController');

// import the method from the controller and this gets send to the api - used for GET and POST
router.route('/user').get(getUser).post(addUser);

module.exports = router;
