export const state = () => ({
  adminProducts: [],
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
  setProducts(state, products) {
    state.adminProducts = products;
  },
  setCategories(state, categories) {
    this.state.categories = categories;
  },
  setAdminEditCategory(state, category) {
    state.adminEditCategory = category;
  },
  setDeleteProduct(state, _id) {
    ////??
    let products = this.getters.getProducts;
    let index = products.findIndex(p => p._id == _id);
    if (index > -1) {
      this.state.products.splice(index, 1);
    }
  },
  setDeleteCategory(state, _id) {
    ////??
    let categories = this.getters.getCategories;
    let index = categories.findIndex(c => c._id == _id);
    if (index > -1) {
      this.state.categories.splice(index, 1);
    }
  },
  clearAdminProducts(state) {
    state.adminProducts = [];
  },
}

export const actions = {
  async getAdminProducts({ commit }) {
    return await this.$axios.get("/admin/products").then((response) => {
      //response.data.title
      commit('setProducts', response.data.products)
    });
  },
  async getAdminCategories({ commit }) {
    return await this.$axios.get("/admin/categories").then((response) => {
      //response.data.title
      commit('setCategories', response.data.categories)
    });
  },
  async getAdminProduct({ commit }, _productId) {
    return await this.$axios.get("/admin/getAdminProduct/" + _productId)
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
  async getAdminCategory({ commit }, _categoryId) {
    return await this.$axios.get("/admin/getAdminCategory/" + _categoryId)
      .then((response) => {
        //response.data.title
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
  async addProduct({ commit }, product) {
    return await this.$axios.post('/admin/add-product', { product })
      .then((response) => {
        console.log(response.data.message);
        commit('addProduct', response.data.product);
      })
  },
  async addCategory({ commit}, category) {
    return await this.$axios.post('/admin/add-category', { category })
      .then((response) => {
        //console.log(response.data.message);
        commit('addCategory', response.data.category);
      })
  },
  async editProduct({ commit }, product) {
    return await this.$axios.post("/admin/edit-product", { product })
      .then((response) => {
        if (response.data.err) {
          //Nothing happend / Didnt edit
        } else {
          commit("setEditedProduct", product)
        }
      })
  },
  async editCategory({ commit }, category) {
    return await this.$axios.post("/admin/edit-category", { category })
      .then((response) => {
        if (response.data.err) {
          //Nothing happend / Didnt edit
        } else {
          commit("setEditedCategory", category)
        }
      })
  },
  async deleteProduct({ commit }, _id) {
    return await this.$axios.post("/admin/delete-product", { _id })
      .then((response) => {
        if (!response.data.err) {
          commit("setDeleteProduct", _id)
        } else {
          //Nothing happend / Didnt delete
        }
      })
  },
  async deleteCategory({ commit }, _id) {
    return await this.$axios.post("/admin/delete-category", { _id })
      .then((response) => {
        if (!response.data.err) { 
          commit("setDeleteCategory", _id)
        } else {
          //Nothing happend / Didnt delete
        }
      })
  },
  clearAdminProducts({ commit }) {
    commit("clearAdminProducts");
  },
}

export const getters = {
  getAdminProducts(state) {
    return state.adminProducts;
  }, 
  getEditProduct(state) {
    return state.adminEditProduct;
  },
  getEditCategory(state) {
    return state.adminEditCategory;
  },
}