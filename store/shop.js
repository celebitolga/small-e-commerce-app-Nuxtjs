export const state = () => ({
  product: null,
})

export const mutations = {
  setProduct(state, product) {
    state.product = product;
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
}

export const getters = {
  getProduct(state) {
    return state.product;
  },
}