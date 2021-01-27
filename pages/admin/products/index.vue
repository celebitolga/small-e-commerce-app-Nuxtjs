<template>
  <div class="row">
    <table class="table table-bordered" v-if="products.length > 0">
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
          <td> <img :src="product.imageUrl" style="width: 80px;"> </td>
          <td> {{product.name}} </td>
          <td> {{product.price}} TL</td>
          <td>
            <nuxt-link tag="a" class="btn btn-primary btn-sm" :to="'/admin/edit-product/' + product._id">Edit</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-else>No Products</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  created () {
    this.products = this.$store.getters.getProducts;
  },
  fetch({store}) {
    return new Promise((resolve, reject) => {
      store.dispatch("admin/getAdminProducts")
        .then(() => {
          // console.log("Products index.vue");
        })
        resolve();

        reject(new Error());
    }).catch((e) => {
      console.log(e);
    })
  },
  head: {
    title: "Admin Products",
  },
}
</script>

<style>

</style>