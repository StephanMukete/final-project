const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check')

// GET public test route
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email','Enter a valid email').isEmail(),
    check(
      'password', 'Please enter a password with 4 or more characters'
    ).isLength({ min: 4})

  ],
  (req, res) => {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
      }
  console.log(req.body);
  res.send('User route is working')
})

module.exports = router
