getLogin = (req, res, next) => {
  
}

postLogin = (req, res, next) => {
  console.log("Post login");
  const email = req.body.user.email;
  const password = req.body.user.password;

  if ((email == 'tolga@gmail.com') && (password == '123')) {
    res.status(200).json({
      redirect: true,
    })
  } else {
    res.status(203).json({
      redirect: false,
    })
  }
}

getRegister = (req, res, next) => {

}

postRegister = (req, res, next) => {

}

getResetPassword = (req, res, next) => {

}

postResetPassword = (req, res, next) => {

}




module.exports = {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  getResetPassword,
  postResetPassword,
}