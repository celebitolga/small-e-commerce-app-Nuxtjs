const categories = [
  {
    _id: Math.floor(Math.random() * 999999) + 1,
    name: 'Telefon',
    description: "Telefon kategori ürünleri",
  },
  {
    _id: Math.floor(Math.random() * 999999) + 1,
    name: 'Bilgisayar',
    description: "Bilgisayar kategori ürünleri",
  },
  {
    _id: Math.floor(Math.random() * 999999) + 1,
    name: 'Beyaz Eşya',
    description: "Beyaz Eşya kategori ürünleri",
  },
]

module.exports = class Category {
  constructor(name, description) {
    this._id = Math.floor(Math.random() * 999999) + 1;
    this.name = name;
    this.description = description;
  }

  saveCategory() {
    categories.push(this);
  }

  static getAllCategories() {
    return categories;
  }

  static getCategoryById(_id) {
    return categories.find(c => c._id === _id);
  }

  static updateCategory(category) {
    const index = categories.findIndex(c => c._id === category._id);
    if (index > -1) {
      categories.splice(index, 1, category)
    }
  }

  static deleteCategoryById(_id) {
    const index = categories.findIndex(c => c._id === _id);
    if (index > -1) {
      categories.splice(index, 1)
    }
  }
}
