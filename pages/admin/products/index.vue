<template>
  <div class="row">

    <AdminProducts v-if="products.length > 0" :products="products"/>

    <h1 v-else>No Products</h1>

  </div>
</template>

<script>
import AdminProducts from '@/components/admin/AdminProducts';

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
  components: {
    AdminProducts,
  },
  head: {
    title: "Admin Products",
  },
}
</script>

<style>

</style>