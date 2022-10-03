// backend/routes/api/users.js
const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('User with that email already exists'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a first name'),
    check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a last name'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
    '/', validateSignup, async (req, res) => {

      const { email, password, username, firstName, lastName } = req.body;
      const users = await User.findOne({
        where: {
          email: email
        }
      })
        if (users) {
          res.status(403)
          return res.json({
            "message": "User already exists",
            "statusCode": 403,
            "errors": {
              "email": "User with that email already exists"
            }
        })
      }

      const user = await User.signup({ email, username, password, firstName, lastName });
      const firstName2 = user.firstName
      const lastName2 = user.lastName
      const email2 = user.email
      const username2 = user.username
      const id2 = user.id
      let tokey = await setTokenCookie(res, user);

      return res.json({
          id: id2,
          firstName: firstName2,
          lastName: lastName2,
          email: email2,
          username: username2,
          token: tokey
      });
    }
  );



module.exports = router;