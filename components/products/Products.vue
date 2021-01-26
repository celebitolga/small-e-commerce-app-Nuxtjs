<template>
  <div class="row">
    <Product v-for="(product, index) in products" :key="'product-' + index" :product="product"/>
  </div>
</template>

<script>
import Product from '@/components/products/Product';
export default {
  components: {
    Product,
  },
  props: {
    products: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style>
</style>