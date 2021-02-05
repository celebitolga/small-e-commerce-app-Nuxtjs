
export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async postLogin({ commit }, user) {
    return await this.$axios.post('/login', { user })
      .then((response) => {
        return response.data.redirect;
      })
  },
  async postRegister({ commit }, user) {
    return await this.$axios.post('/register', { user })
      .then((response) => {
        if (response.data.err) {
          console.log("Used mail");
        }
        if (response.data.created) {
          console.log("User created");
          /// redirect to /login
          this.$router.push('/')
        }
      }) 
  },
}

export const getters = {

}