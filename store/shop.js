export const state = () => ({
  products: [],
  product: null,
  categorizedProducts: [],
  cart: [],
  orders: [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setProduct(state, product) {
    state.product = product;
  },
  setCategorizedProducts(state, products) {
    state.categorizedProducts = products;
  },
  setCategories(state, categories) {
    this.state.categories = categories;
  },
  setCart(state, cart) {
    state.cart = cart;
  },
  setDeletedCart(state, productId) {
    let index = state.cart.findIndex(c => c.productId._id == productId)
    if (index > -1) {
      state.cart.splice(index, 1);
    }
  },
  setCartToEmpty(state) {
    state.cart = [];
  },
  setOrders(state, orders) {
    state.orders = orders;
  },
}

export const actions = {
  async getProducts({ commit }) {
    return await this.$axios.get("/products")
      .then((response) => {
      //response.data.title
      commit('setProducts', response.data.products)
    });
  },
  async getProduct({ commit }, _productId) {
    return await this.$axios.get("/products/" + _productId)
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
  async getProductsByCategory({ commit }, _categoryId) {
    return await this.$axios.get("/categories/" + _categoryId)
      .then((response) => {
        commit("setCategorizedProducts", response.data.products);
        commit("setCategories", response.data.categories);
      })
  },
  async getCart({ commit }) {
    return await this.$axios.get("/cart")
      .then((response) => {
        commit("setCart", response.data.products)
      })
  },
  async postAddToCart({ commit }, productId) {
    return await this.$axios.post("/cart", { productId })
      .then((response) => {
        
      })
      .catch(err => console.log(err))
  },
  async deleteCartItem({ commit }, productId) {
    return await this.$axios.post("/delete-cart-item", { productId })
      .then((response) => {
        if (!response.data.err) {
          commit("setDeletedCart", productId);
        }
      })
  },
  async postOrders({ commit }) {
    return await this.$axios.post("/orders")
      .then((response) => {
        if (!response.data.err) {
          commit("setCartToEmpty");
        }
      })
  },
  async getOrders({ commit }) {
    return await this.$axios.get("/orders")
      .then((response) => {
        if (response.data.orders) {
          commit("setOrders", response.data.orders);
        }
      })
  },
}

export const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return state.product;
  },
  getCategorizedProducts(state) {
    return state.categorizedProducts;
  },
  getCart(state) {
    return state.cart;
  },
  getOrders(state) {
    return state.orders;
  },
}