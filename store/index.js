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
  getProducts({ commit }) {
    return this.$axios.get("/").then((response) => {
      commit('setProducts', response.data.products)
      commit('setCategories', response.data.categories)
    })
  },
  getCategories({ commit }) {
    return this.$axios.get("/categories").then((response) => {
      commit('setCategories', response.data.categories)
    })
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