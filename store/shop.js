export const state = () => ({
  product: null,
  categorizedProducts: [],
})

export const mutations = {
  setProduct(state, product) {
    state.product = product;
  },
  setCategorizedProducts(state, products) {
    state.categorizedProducts = products;
  },
  setCategories(state, categories) {
    this.state.categories = categories;
  },
}

export const actions = {
  getProducts({ commit }) {
    return this.$axios.get("/products")
      .then((response) => {
      //response.data.title
      //console.log(response.data);
      //commit('setProducts', response.data.products)
    });
  },
  getProduct({ commit }, _productId) {
    return this.$axios.get("/products/" + _productId)
      .then((response) => {
        //response.data.title
        if (response.data.err) {
          /// Not Found
          commit("setProduct", null);
        } else {
          /// Found
          let product = response.data.product
          commit("setProduct", product )
        }
      });
  },
  getProductsByCategory({ commit }, _categoryId) {
    return this.$axios.get("/categories/" + _categoryId)
      .then((response) => {
        commit("setCategorizedProducts", response.data.products);
        commit("setCategories", response.data.categories);
      })
  },
}

export const getters = {
  getProduct(state) {
    return state.product;
  },
  getCategorizedProducts(state) {
    return state.categorizedProducts;
  },
}