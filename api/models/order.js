const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderchema = Schema({
  user: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  items: [
    {
      // name: {
      //   type: String,
      //   required: true,
      // },
      // price: {
      //   type: Number,
      //   required: true,
      // },
      // imageUrl: {
      //   type: String,
      //   required: true,
      // },
      product: {
        type: Object,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.models.Order || mongoose.model('Order', categorySchema);