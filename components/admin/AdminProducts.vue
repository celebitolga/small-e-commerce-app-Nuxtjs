<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th style="width: 100px;">Image</th>
        <th>Product Name</th>
        <th style="width: 150px;">Price</th>
        <th style="width: 150px;">Username</th>
        <th style="width: 133px;"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="'product' + index" :class="{'bg-success': updatedId == product._id}">
        <td><img :src="product.imageUrl" style="width: 80px" /></td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }} TL</td>
        <td>{{ product.userId.name}} </td>
        <td>
          <nuxt-link
            tag="a"
            class="btn btn-primary btn-sm mr-2"
            :to="'/admin/edit-product/' + product._id"
            >Edit</nuxt-link>
          <button class="btn btn-danger btn-sm" @click="deleteProduct(product)">Delete</button>
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
    updatedId: {
      type: String,
      required: false,
    },
  },
  methods: {
    deleteProduct(product) {
      if(confirm(`--${ product.name }-- will delete, are you sure?`)) {
        this.$store.dispatch("admin/deleteProduct", product._id )
          .then(() => {
            /// Delete succeed
            this.$emit("deletedSucceed", product.name)
          })
      }
    }
  },
};
</script>

<style>
</style>