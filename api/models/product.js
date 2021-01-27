// const products = [];

const products = [{
    _id: 10001,
    name: "Samsung S8",
    price: 3000,
    imageUrl: 'data:image/jpeg;base64,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',
    description: "İyi telefon"
  },
  {
    _id: 10002,
    name: "Samsung S7",
    price: 2000,
    imageUrl: 'data:image/jpeg;base64,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',
    description: "İdare eder"
  },
  {
    _id: 10003,
    name: "Samsung S9",
    price: 4000,
    imageUrl: 'data:image/jpeg;base64,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',
    description: "Çok iyi telefon"
  },
  {
    _id: 10004,
    name: "Iphone 7S",
    price: 4500,
    imageUrl: 'data:image/jpeg;base64,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',
    description: "Güzel telefon telefon"
  },
];
  

module.exports = class Product {
  constructor(name, price, imageUrl, description) {
    this._id = Math.floor(Math.random() * 999999) + 1;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  saveProduct() {
    products.push(this);
  }

  static getAll() {
    return products;
  }

  static getProduct(_id) {
    let index = products.findIndex(product => product._id == _id);
    if (index > -1) {
      return products[index]
    } else {
      return false
    }
  }
}