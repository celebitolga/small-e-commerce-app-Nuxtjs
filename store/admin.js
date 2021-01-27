export const state = () => ({

})

export const mutations = {
  addProduct({commit}, product) {
    this.state.products.push(product);
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
  addProduct({ commit }, product) {
    return this.$axios.post('/admin/add-product', { product })
      .then((response) => {
        console.log(response.data.message);
        commit('addProduct', product);
      })
  },
}

export const getters = {

}