export const state = () => ({
  products : [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addProduct(state, product) {
    state.products.push(product);
  },
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    return context.$axios.get("/").then((response) => {
      commit('setProducts',response.data.products)
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
  getProducts(state) {
    return state.products;
  }
}