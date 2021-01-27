<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="'product' + index">
        <td><img :src="product.imageUrl" style="width: 80px" /></td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }} TL</td>
        <td>
          <nuxt-link
            tag="a"
            class="btn btn-primary btn-sm"
            :to="'/admin/edit-product/' + product._id"
            >Edit</nuxt-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style>
</style>