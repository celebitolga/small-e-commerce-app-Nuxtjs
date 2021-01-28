<template>
  <div class="row">
    <div v-if="action === 'edit' && action !== null" class="alert alert-success">The product has been updated</div>

    <AdminProducts v-if="products.length > 0" :products="products" :updatedId="updatedId"/>

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
  computed: {
    action() {
      return this.$route.params.action ? this.$route.params.action : null;
    },
    updatedId() {
      return this.$route.params.id ? this.$route.params.id : null;
    },
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