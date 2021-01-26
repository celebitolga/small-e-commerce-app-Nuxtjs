const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

//require routes
const adminRoutes = require('./admin/admin');
const userRoutes = require('./users/users');
//İmport routes
app.use('/admin', adminRoutes.router);
app.use('/users', userRoutes);

// Products
const products = adminRoutes.products;

app.get("/", (req, res) => {
  console.log("İstek geldi");
  
  res.status(200).json({
    products,
  })
});

app.get('*', (req, res) => {
  console.log('BAD Request');
  res.status(404);
})


module.exports = app;