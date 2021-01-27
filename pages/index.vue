<template>
  <div>
    <Carousel />
    <Products :products="products"/>
  </div>
</template>

<script>
import Carousel from "@/components/common/Carousel";
import Products from "@/components/products/Products";

export default {
  head: {
    title: 'Ana Sayfa | Alışverişin Adresi',
  },
  data() {
    return {
      products: [],
    }
  },
  created() {
    this.products = this.$store.getters.getProducts;
  },
  components: {
    Carousel,
    Products,
  },
};
</script>

<style>
</style>
