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
    let index = state.cart.findIndex(c => c._id == productId)
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
  getProducts({ commit }) {
    return this.$axios.get("/products")
      .then((response) => {
      //response.data.title
      commit('setProducts', response.data.products)
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
  getCart({ commit }) {
    return this.$axios.get("/cart")
      .then((response) => {
        commit("setCart", response.data.products)
      })
  },
  postAddToCart({ commit }, productId) {
    this.$axios.post("/cart", { productId })
      .then((response) => {
        console.log(response.data);
      })
      .catch(err => console.log(err))
  },
  deleteCartItem({ commit }, productId) {
    return this.$axios.post("/delete-cart-item", { productId })
      .then((response) => {
        if (!response.data.err) {
          commit("setDeletedCart", productId);
        }
      })
  },
  postOrders({ commit }) {
    return this.$axios.post("/orders")
      .then((response) => {
        if (!response.data.err) {
          commit("setCartToEmpty");
        }
      })
  },
  getOrders({ commit }) {
    return this.$axios.get("/orders")
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