const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

let User = require('../models/user.model');

// Passport
const initializePassport = require('../passport-config');
initializePassport(passport);


// router.get('/', (req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(error => res.status(400).json(`Error: ${error}`));
// });

router.post('/login', (req, res, next) => {
  next()
}, passport.authenticate('local'), (req, res) => {
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email
  })
});

router.get('/user', chechAuthentication, (req, res) => {
  User.findById(req.user.id)
    .select(['_id', 'username', 'email'])
    .then(user => {
      console.log('here')
      return res.json(user)
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.session.destroy()
    res.clearCookie('connect.sid');
    res.json('logging out');
  } else {
    return res.json('No user to log out')
  }
})

router.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (user) {
      res.status(203).json(`Sorry, ${req.body.username} already exists`)
    } else {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword
        });

        newUser.save()
          .then(user => res.json(user))
          .catch(error => res.status(400).json(` Save Error: ${error}`));
      } catch (error) {
        res.status(201).json(`Catch Error: ${error}`);
      }
    }
  })
});

function chechAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json('user not authorized');
}

module.exports = router;