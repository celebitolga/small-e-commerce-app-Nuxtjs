export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async postLogin({ commit }, user) {
    return await this.$axios.post('/login', {user})
      .then((response) => {
        return response.data.redirect;
      })
  }
}

export const getters = {

}