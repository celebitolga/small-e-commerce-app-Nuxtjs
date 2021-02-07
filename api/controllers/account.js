const User = require('../models/user');
const bcrypt = require('bcrypt');

postLogin = (req, res, next) => {
  console.log("Post login");
  const email = req.body.user.email;
  const password = req.body.user.password;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(203).json({
          err: 'User not found',
        });
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            //Error
            res.status(203).json({
              err: 'error',
              isAuthenticated: req.session.isAuthenticated,
            });
          }
          if (result) {
            //login 
            req.session.user = user;
            req.session.isAuthenticated = true;
            res.status(200).json({
              redirect: true,
              isAuthenticated: req.session.isAuthenticated,
            })
          } else {
            //Wrong password
            res.status(203).json({
              err: 'Wrong password',
              redirect: false,
              isAuthenticated: req.session.isAuthenticated,
            });
          }
        })
      }
    })
    .catch(err => console.log(err))
}

postRegister = (req, res, next) => {
  const name = req.body.user.name;
  const email = req.body.user.email;
  const password = req.body.user.password;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(203).json({
          err: 'User found, forget password or email?',
        })
      } else {
        bcrypt.hash(password, 10, function (err, hash) {
          const newUser = new User({
            name,
            email,
            password: hash,
            cart: {
              items: [],
            },
          })
          newUser.save();
          res.status(200).json({
            created: 'User created',
          })
        });
      }
    })
    .catch(err => console.log(err))
}

postResetPassword = (req, res, next) => {

}




module.exports = {
  postLogin,
  postRegister,
  postResetPassword,
}