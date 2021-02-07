const User = require('../models/user');
const bcrypt = require('bcrypt');

postLogin = (req, res, next) => {
  console.log("Post login");
  const email = req.body.user.email;
  const password = req.body.user.password;

  if ((email == 'tolga@gmail.com') && (password == '123')) {
    // res.cookie('isAuthenticated', true);
    req.session.isAuthenticated = true;
    res.status(200).json({
      redirect: true,
    })
  } else {
    // res.cookie('isAuthenticated', false);
    req.session.isAuthenticated = false;
    res.status(203).json({
      redirect: false,
    })
  }
}

postRegister = (req, res, next) => {
  const name = req.body.user.name;
  const email = req.body.user.email;
  const password = req.body.user.password;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(203).json({
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