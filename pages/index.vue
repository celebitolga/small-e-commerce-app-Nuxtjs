<template>
  <div>
    <Carousel/>
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
  computed: {
    products() {
      return this.$store.getters.getProducts
    }
  },
  async fetch({store}) {
    await store.dispatch("getProducts")
  },
  components: {
    Carousel,
    Products,
  },
};
</script>

<style>
</style>
