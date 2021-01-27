export const state = () => ({
  adminEditProduct: null,
})

export const mutations = {
  addProduct({commit}, product) {
    this.state.products.push(product);
  },
  setAdminEditProduct(state, product) {
    state.adminEditProduct = product;
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
          let product = response.data.product
          commit("setAdminEditProduct", product)
        }
      });
  },
  addProduct({ commit }, product) {
    return this.$axios.post('/admin/add-product', { product })
      .then((response) => {
        console.log(response.data.message);
        commit('addProduct', product);
      })
  },
}

export const getters = {
  getEditProduct(state) {
    return state.adminEditProduct;
  },
}