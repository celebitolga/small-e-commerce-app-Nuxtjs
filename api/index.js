const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Mongo db
const mongoConnect = require('./database').mongoConnect;

app.use(bodyParser.json())


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
  
})

module.exports = app;