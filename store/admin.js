export const state = () => ({
  adminEditProduct: null,
})

export const mutations = {
  addProduct(state, product) {
    this.state.products.push(product);
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
  setDeleteProduct(state, _id) {
    ////??
    let products = this.getters.getProducts;
    let index = products.findIndex(p => p._id == _id);
    if (index > -1) {
      this.state.products.splice(index, 1);
    }
  },
}

export const actions = {
  getAdminProducts({ commit }) {
    return this.$axios.get("/admin/products").then((response) => {
      //response.data.title
      //console.log(response.data);
      //commit('setProducts', response.data.products)
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
  addProduct({ commit }, product) {
    return this.$axios.post('/admin/add-product', { product })
      .then((response) => {
        console.log(response.data.message);
        commit('addProduct', response.data.product);
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
  deleteProduct({ commit }, _id) {
    return this.$axios.post("/admin/delete-product", { _id })
      .then((response) => {
        if (response.data.err) {
          //Nothing happend / Didnt delete
        } else {
          commit("setDeleteProduct", _id)
        }
      })
  },
}

export const getters = {
  getEditProduct(state) {
    return state.adminEditProduct;
  },
}