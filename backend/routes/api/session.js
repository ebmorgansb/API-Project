// backend/routes/api/session.js
const express = require('express');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

// backend/routes/api/session.js
// ...
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


// backend/routes/api/session.js
// ...

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];


// backend/routes/api/session.js
// ...

// Log in
router.post(
    '/', validateLogin,
    async (req, res, next) => {
      const { credential, password } = req.body;
      const user = await User.login({ credential, password });
      if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors =  [
          "Invalid credentials"
        ]

        return next(err);
        // res.status(401)
        // return res.json({
        //   "message": "Invalid credentials",
        //   "statusCode": 401
        // })
      }
      const userId = user.toJSON().id
      const tokey = await setTokenCookie(res, user);
      const uzer = await User.findOne({
        where: {
          id: userId
        }
      })
      const finalUzer = uzer.toJSON()
      const userRes = {
        id: finalUzer.id,
        email: credential,
        firstName: finalUzer.firstName,
        lastName: finalUzer.lastName,
        username: finalUzer.username,
        token: tokey
      }


      return res.json(userRes);
    }

  );

// Log out
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );

// Restore session user
router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      console.log('is this running')
      return res.json(
        user.toSafeObject()
      );
    } else return res.json(null);
  }
);



module.exports = router;