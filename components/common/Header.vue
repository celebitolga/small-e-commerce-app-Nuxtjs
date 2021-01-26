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
        <li class="nav-item">
          <nuxt-link tag="a" to="/admin/add-product" class="nav-link" exact-active-class="active">Add Product</nuxt-link>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <nuxt-link tag="a" to="/login" class="nav-link" exact-active-class="active">Login</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link tag="a" to="/register" class="nav-link" exact-active-class="active">Register</nuxt-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>