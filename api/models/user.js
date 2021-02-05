const Product = require('./product')
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        }
      }
    ]
  }
});

userSchema.methods.addToCart = function (product) {
  const index = this.cart.items.findIndex(cp => cp.productId.toString() === product._id.toString())
  const updatedCartItems = [...this.cart.items];
  let itemQuantity = 1;

  if (index > -1) { // Cart'a zaten eklenmek istenen product var: quantity'i arttır
    itemQuantity = this.cart.items[index].quantity + 1;
    updatedCartItems[index].quantity = itemQuantity;
  } else {
    // updatedCartItems'a yeni bir elemen ekle
    updatedCartItems.push({
      productId: product._id,
      quantity: itemQuantity,
    })
  }

  this.cart = {
    items: updatedCartItems,
  }
  
  return this.save();
}

userSchema.methods.getCart = function () {
  const ids = this.cart.items.map(i => i.productId);

  return Product.find({ _id: { $in: ids } })
    .select('name price imageUrl')
    .then((products) => {
      return products.map(p => {
        return {
          name: p.name,
          price: p.price,
          imageUrl: p.imageUrl,
          quantity: this.cart.items.find(i => i.productId.toString() === p._id.toString()).quantity
        }
      })
    })
}

userSchema.methods.deleteCartItem = function (productId) {

  const cartItems = this.cart.items.filter(item => item.productId.toString() !== productId.toString());
  
  this.cart.items = cartItems;
  return this.save();
}

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };

  return this.save();
}

module.exports = mongoose.models.User || mongoose.model('User', userSchema);


/*
const getDb = require('../database').getDb;
const mongodb = require('mongodb');

module.exports = class User {
  constructor(name, email, cart, _id) {
    this.name = name;
    this.email = email;
    this.cart = cart ? cart : {};
    this.cart.items = cart ? cart.items : [];
    this._id = _id;
  }

  save() {
    const db = getDb();

    return db.collection('users')
      .insertOne(this);
  }

  static findById(userId) {
    const db = getDb();

    return db.collection('users')
      .findOne({
        _id: new mongodb.ObjectID(userId)
      })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  static findByUsername(username) {
    const db = getDb();

    return db.collection('users')
      .findOne({
        name: username
      })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getCart() {
    const ids = this.cart.items.map(i => i.productId);

    const db = getDb();

    return db.collection('products')
      .find({
        _id: {
          $in: ids
        }
      })
      .toArray()
      .then((products) => {
        return products.map(p => {
          return {
            ...p,
            quantity: this.cart.items.find(i => i.productId.toString() === p._id.toString()).quantity
          }
        })
      })
  }

  addToCart(product) {
    const index = this.cart.items.findIndex(cp => cp.productId.toString() === product._id.toString())
    const updatedCartItems = [...this.cart.items];
    let itemQuantity = 1;

    if (index > -1) { // Cart'a zaten eklenmek istenen product var: quantity'i arttır
      itemQuantity = this.cart.items[index].quantity + 1;
      updatedCartItems[index].quantity = itemQuantity;
    } else {
      // updatedCartItems'a yeni bir elemen ekle
      updatedCartItems.push({
        productId: new mongodb.ObjectID(product._id),
        quantity: itemQuantity,
      })
    }

    const db = getDb();

    return db.collection('users')
      .updateOne({
        _id: new mongodb.ObjectID(this._id)
      }, {
        $set: {
          cart: {
            items: updatedCartItems,
          }
        }
      })
  }

  deleteCartItem(productId) {
    const cartItems = this.cart.items.filter(item => item.productId.toString() != productId.toString());

    const db = getDb();

    return db.collection('users')
      .updateOne({
        _id: new mongodb.ObjectID(this._id)
      }, {
        $set: {
          cart: {
            items: cartItems
          }
        }
      })
      .then((result) => {
        return result;
      })
      .catch(err => console.log(err))

  }

  addOrder() {
    // get cart

    // create order object

    // save order

    // update card

    const db = getDb();

    return this.getCart()
      .then((products) => {
        const order = {
          items: products.map(item => {
            return {
              _id: item._id,
              name: item.name,
              price: item.price,
              imageUrl: item.imageUrl,
              _userId: item._userId,
              quantity: item.quantity,
            }
          }),
          user: {
            _id: mongodb.ObjectID(this._id),
            name: this.name,
            email: this.email,
          },
          date: new Date().toLocaleString(),
        }
        return db.collection("orders").insertOne(order);
      })
      .then(() => {
        this.cart = {
          items: []
        };
        return db.collection('users')
          .updateOne({
            _id: new mongodb.ObjectID(this._id)
          }, {
            $set: {
              cart: {
                items: []
              }
            }
          })
      })
  }

  getOrders() {
    const db = getDb();
    return db.collection("orders")
      .find({ 'user._id': new mongodb.ObjectID(this._id) })
      .toArray()
      .then(result => result[0])
      .catch(err => console.log(err))
  }
}
*/