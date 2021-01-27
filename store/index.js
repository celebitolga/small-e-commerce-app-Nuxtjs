export const state = () => ({
  products : [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    return context.$axios.get("/").then((response) => {
      //response.data.title
      //console.log(response.data.products);
      commit('setProducts',response.data.products)
    });
  },
}

export const getters = {
  getProducts(state) {
    return state.products;
  }
}