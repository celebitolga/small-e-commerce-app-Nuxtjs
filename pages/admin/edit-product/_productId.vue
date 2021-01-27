<template>
  <div v-if="loading">
    LOADING...
  </div>
  <div v-else>
    <div v-if="product === null">
      Not Found!
    </div>
    <div v-else>
      {{product}}
    </div>
  </div>
</template>

<script>
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
  head: {
    title: "Products Detail /////",
  },
}
</script>

<style>

</style>