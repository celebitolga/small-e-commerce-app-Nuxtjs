export const state = () => ({
  
})

export const mutations = {

}

export const actions = {
  getProducts({ commit }) {
    return this.$axios.get("/products").then((response) => {
      //response.data.title
      //console.log(response.data);
      //commit('setProducts', response.data.products)
    });
  },
}

export const getters = {

}