export const state = () => ({
  adminEditProduct: null,
  adminEditCategory: null,
})

export const mutations = {
  addProduct(state, product) {
    this.state.products.push(product);
  },
  addCategory(state, category) {
    this.state.categories.push(category);
  },
  setAdminEditProduct(state, product) {
    state.adminEditProduct = product;
  },
  setEditedProduct(state, product) {
    ///????
    let products = this.getters.getProducts;
    let index = products.findIndex(p => p._id == product._id);
    if (index > -1) {
      this.state.products.splice(index, 1, product);
    }
  },
  setEditedCategory(state, category) {
    ///????
    let categories = this.getters.getCategories;
    let index = categories.findIndex(c => c._id == category._id);
    if (index > -1) {
      this.state.categories.splice(index, 1, category);
    }
  },
  setDeleteProduct(state, _id) {
    ////??
    let products = this.getters.getProducts;
    let index = products.findIndex(p => p._id == _id);
    if (index > -1) {
      this.state.products.splice(index, 1);
    }
  },
  setProducts(state, products) {
    this.state.products = products;
  },
  setCategories(state, categories) {
    this.state.categories = categories;
  },
  setAdminEditCategory(state, category) {
    state.adminEditCategory = category;
  },
}

export const actions = {
  getAdminProducts({ commit }) {
    return this.$axios.get("/admin/products").then((response) => {
      //response.data.title
      commit('setProducts', response.data.products)
    });
  },
  getAdminCategories({ commit }) {
    return this.$axios.get("/admin/categories").then((response) => {
      //response.data.title
      commit('setCategories', response.data.categories)
    });
  },
  getAdminProduct({ commit }, _productId) {
    return this.$axios.get("/admin/getAdminProduct/" + _productId)
      .then((response) => {
        //response.data.title
        if (response.data.err) {
          /// Not Found
          commit("setAdminEditProduct", null);
        } else {
          /// Found
          let product = response.data.product;
          commit("setAdminEditProduct", product);
        }
      });
  },
  getAdminCategory({ commit }, _categoryId) {
    return this.$axios.get("/admin/getAdminCategory/" + _categoryId)
      .then((response) => {
        //response.data.title
        console.log(response.data.category);
        if (response.data.err) {
          /// Not Found
          commit("setAdminEditCategory", null);
        } else {
          /// Found
          let category = response.data.category;
          commit("setAdminEditCategory", category);
        }
      });
  },
  addProduct({ commit }, product) {
    return this.$axios.post('/admin/add-product', { product })
      .then((response) => {
        console.log(response.data.message);
        commit('addProduct', response.data.product);
      })
  },
  addCategory({ commit}, category) {
    return this.$axios.post('/admin/add-category', { category })
      .then((response) => {
        //console.log(response.data.message);
        commit('addCategory', response.data.category);
      })
  },
  editProduct({ commit }, product) {
    return this.$axios.post("/admin/edit-product", { product })
      .then((response) => {
        if (response.data.err) {
          //Nothing happend / Didnt edit
        } else {
          commit("setEditedProduct", product)
        }
      })
  },
  editCategory({ commit }, category) {
    return this.$axios.post("/admin/edit-category", { category })
      .then((response) => {
        if (response.data.err) {
          //Nothing happend / Didnt edit
        } else {
          commit("setEditedCategory", category)
        }
      })
  },
  deleteProduct({ commit }, _id) {
    return this.$axios.post("/admin/delete-product", { _id })
      .then((response) => {
        if (!response.data.err) {
          commit("setDeleteProduct", _id)
        } else {
          //Nothing happend / Didnt delete
        }
      })
  },
}

export const getters = {
  getEditProduct(state) {
    return state.adminEditProduct;
  },
  getEditCategory(state) {
    return state.adminEditCategory;
  },
}