const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

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

    User.findOne({ name: 'tolga' })
      .then((user) => {
        if (!user) {
          user = new User({
            name: 'tolga',
            email: 'tolgacelebi78@gmail.com',
            cart: {
              items: []
            }
          });
          return user.save();
        }
        return user;
      })
      .then((user) => {
        console.log(user);
      })
  })
  .catch(err => console.log(err))



app.use((req, res, next) => {
  User.findOne({ name: 'tolga'})
    .then((user) => {
      req.user = user;
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


/*
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
*/


module.exports = app;