<template>
  <div v-if="loading">
    LOADING...
  </div>
  <div v-else>
    <div v-if="products.length <= 0" class="row">
      <h1 class="text-center">Not Found!</h1>
    </div>
    <div v-else>
      <Products :products="products"/>
    </div>
  </div>
</template>

<script>
import Products from '@/components/products/Products';
export default {
  data() {
    return {
      products: [],
      loading: true,
    }
  },
  created(){
    const _categoryId = this.$route.params.categoryId;
    this.$store.dispatch("shop/getProductsByCategory", _categoryId)
      .then(() => {
        this.products = this.$store.getters["shop/getCategorizedProducts"];
        this.loading = false;
      })
  },
  components: {
    Products,
  },
}
</script>

<style>

</style>