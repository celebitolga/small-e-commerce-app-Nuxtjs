<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <nuxt-link tag="a" to="/" class="navbar-brand active">Shopping</nuxt-link>

      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
          <nuxt-link tag="a" to="/" class="nav-link" exact-active-class="active">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link tag="a" to="/products" class="nav-link" exact-active-class="active">Products</nuxt-link>
        </li>

        <template v-if="isAuthenticated">
          <li class="nav-item">
            <nuxt-link tag="a" to="/cart" class="nav-link" exact-active-class="active">Cart</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link tag="a" to="/orders" class="nav-link" exact-active-class="active">Orders</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link tag="a" to="/admin/add-product" class="nav-link" exact-active-class="active">Add Product</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link tag="a" to="/admin/add-category" class="nav-link" exact-active-class="active">Add Category</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link tag="a" to="/admin/products" class="nav-link" exact-active-class="active">Admin Products</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link tag="a" to="/admin/categories" class="nav-link" exact-active-class="active">Admin Categories</nuxt-link>
          </li>
        </template>
        
      </ul>

      <ul class="navbar-nav ml-auto">

        <template v-if="!isAuthenticated">
          <li class="nav-item">
            <nuxt-link tag="a" to="/login" class="nav-link" exact-active-class="active">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link tag="a" to="/register" class="nav-link" exact-active-class="active">Register</nuxt-link>
          </li>
        </template>

        <template v-else>
          <li class="nav-item">
            <nuxt-link tag="a" to="/logout" class="nav-link" exact-active-class="active">Logout</nuxt-link>
          </li>
        </template>

      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isAuthenticated: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style>
</style>