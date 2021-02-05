import Cookie from 'js-cookie';

export const state = () => ({
  products: [],
  categories: [],
  authkey: null,
})

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setAuthkey(state, authkey) {
    state.authkey = authkey;
  },
  clearAuthkey(state) {
    Cookie.remove('connect.sid');
    state.authkey = null;
  },
}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    console.log("Nuxt server init");
    await vuexContext.dispatch("getCategories")

    if (context.req.headers.cookie) {
      let cookie = context.req.headers.cookie.split(';').find(c => c.trim().startsWith('connect.sid='));
      if (cookie) {
        cookie = cookie.split('=')[1];
        vuexContext.commit("setAuthkey", cookie);
      }
    }
  },
  async getProducts({ commit }) {
    return await this.$axios.get("/").then((response) => {
      commit('setProducts', response.data.products)
      commit('setCategories', response.data.categories)
    })
  },
  async getCategories({ commit }) {
    return await this.$axios.get("/categories").then((response) => {
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
  isAuthenticated(state) {
    return state.authkey !== null;
  }
}