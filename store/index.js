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
      //response.data.title
      commit('setProducts',response.data.products)
    });
  },
  getProducts({ commit }) {
    return this.$axios.get("/products").then((response) => {
      //response.data.title
      //console.log(response.data);
      //commit('setProducts', response.data.products)
    });
  },
  getAdminProducts({ commit }) {
    return this.$axios.get("/admin/products").then((response) => {
      //response.data.title
      //console.log(response.data);
      //commit('setProducts', response.data.products)
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