const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Mongo db
const mongoConnect = require('./database').mongoConnect;

app.use(bodyParser.json())

const User = require('./models/user');

app.use((req, res, next) => {
  User.findByUsername('tolga')
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch(err => console.log(err))
})

//require routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//İmport routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.get('*', (req, res) => {
  console.log('404 Not Found');
  res.status(404);
})

mongoConnect((client) => {
  User.findByUsername('tolga')
    .then((user) => {
      if (!user) {
        user = new User('tolga', 'tolgacelebi78@gmail.com');
        return user.save();
      }
      return user;
    })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    })
})

module.exports = app;