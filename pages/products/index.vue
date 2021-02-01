<template>
  <div>
    <Products :products="products"/>
  </div>
</template>

<script>
import Products from "@/components/products/Products";

export default {
  computed: {
    products() {
      return this.$store.getters["shop/getProducts"];
    }
  },
  async fetch({store}) {
    await store.dispatch("shop/getProducts")
  },
  components: {
    Products,
  },
  head: {
    title: "Products",
  },
}
</script>

<style>

</style>