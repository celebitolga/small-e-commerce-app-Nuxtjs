<template>
  <div v-if="loading">
    LOADING...
  </div>
  <div v-else>
    <div v-if="product === null">
      Not Found!
    </div>
    <div v-else>
      //EDİT PRODUCT!!!

      <ProductAddForm :forEditProduct="product"/>
      {{product}}
    </div>
  </div>
</template>

<script>
import ProductAddForm from "@/components/admin/ProductAddForm";

export default {
  data() {
    return {
      product: null,
      loading: true,
    }
  },
  created () {
    const _productId = this.$route.params.productId;
    this.$store.dispatch("admin/getAdminProduct", _productId)
      .then(() => {
        // console.log("Admin Edit Product");
        this.product = this.$store.getters["admin/getEditProduct"];
        this.loading = false;
      })
  },
  components: {
    ProductAddForm,
  },
  head: {
    title: "Products Detail /////",
  },
}
</script>

<style>

</style>