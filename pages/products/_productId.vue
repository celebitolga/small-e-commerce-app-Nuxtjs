<template>
  <div v-if="loading">
    LOADING...
  </div>
  <div v-else>
    <div v-if="product === null" class="row">
      <h1 class="text-center">Not Found!</h1>
    </div>
    <div v-else>
      <ProductDetail :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductDetail from '@/components/products/ProductDetail';
export default {
  layout: 'details',
  data() {
    return {
      product: null,
      loading: true,
    }
  },
  created () {
    const _productId = this.$route.params.productId;
    this.$store.dispatch("shop/getProduct", _productId)
      .then(() => {
        // console.log("Products index.vue");
        this.product = this.$store.getters["shop/getProduct"];
        this.loading = false;
      })
  },
  components: {
    ProductDetail,
  },
  head: {
    title: "Products Detail /////",
  },
}
</script>

<style>

</style>