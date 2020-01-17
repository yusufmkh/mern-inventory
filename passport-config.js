const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

let User = require('./models/user.model');

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    User.findOne({ email: email }, async (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'No user with that email' })

      try {
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'Password incorrect' })
        }
      } catch (error) {
        return done(error)
      }
    })
  }

  passport.serializeUser((user, done) => done(null, { _id: user._id }))
  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, (err, user) => {
      done(null, user)
    })
  })

  passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser))

}

module.exports = initialize;