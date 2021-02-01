<template>
  <div class="row">
    <div v-if="action === 'edit' && action !== null" class="alert alert-success">The product has been updated</div>
    <div v-if="deletedProduct !== null" class="alert alert-danger">The product ({{deletedProduct}}) has been deleted</div>

    <AdminProducts  v-if="products.length > 0" :products="products" :updatedId="updatedId" @deletedSucceed="deletedProduct = $event"/>

    <h1 v-else>No Products</h1>

  </div>
</template>

<script>
import AdminProducts from '@/components/admin/AdminProducts';

export default {
  layout: 'addProduct',
  data() {
    return {
      deletedProduct: null,
    }
  },
  computed: {
    products() {
      return this.$store.getters["admin/getAdminProducts"]
    },
    action() {
      return this.$route.params.action ? this.$route.params.action : null;
    },
    updatedId() {
      return this.$route.params.id ? this.$route.params.id : null;
    },
    deleteProductName() {
      return this.$route.params.name ? this.$route.params.name : null;
    },
  },
  async fetch({store}) {
    await store.dispatch("admin/getAdminProducts")
  },
  components: {
    AdminProducts,
  },
  head: {
    title: "Admin Products",
  },
  async beforeDestroy () {
   await this.$store.dispatch("admin/clearAdminProducts");
  },
}
</script>

<style>

</style>