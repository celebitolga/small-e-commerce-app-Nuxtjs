const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

//require routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//İmport routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.get('*', (req, res) => {
  console.log('BAD Request');
  res.status(404);
})

module.exports = app;