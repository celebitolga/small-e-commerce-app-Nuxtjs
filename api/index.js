const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);

let store = new mongoDbStore({
  url: 'mongodb://localhost/test',
  collection: 'mySessions',
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000 ///3600000
  },
  store, ///////////////mongodbstore
}));

//Mongo db
// const mongoConnect = require('./database').mongoConnect;
const mongoose = require('mongoose');

// User model
const User = require('./models/user');


mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to mongodb');
  })
  .catch(err => console.log(err))
  

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }

  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err))
})

//require routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const accountRoutes = require('./routes/account');

//İmport routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(accountRoutes);


app.get('*', (req, res) => {
  console.log('404 Not Found');
  res.status(404);
})



module.exports = app;