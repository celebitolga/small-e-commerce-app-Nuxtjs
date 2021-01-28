export const state = () => ({
  products: [],
  categories: [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    return context.$axios.get("/").then((response) => {
      //response.data.title
      commit('setProducts',response.data.products)
      commit('setCategories',response.data.categories)
    });
  },
}

export const getters = {
  getProducts(state) {
    return state.products;
  },
  getCategories(state) {
    return state.categories;
  },
}