<template>
  <div v-if="loading">
    Loading
  </div>
  <div v-else>
    <CartProducts :products="cart"/>
  </div>
</template>

<script>
import CartProducts from '@/components/cart/CartProducts';

export default {
  layout: 'addProduct',
  data() {
    return {
      loading: true,
      cart: null,
    }
  },
  created () {
    this.$store.dispatch("shop/getCart")
      .then(() => {
        this.loading = false;
        this.cart = this.$store.getters["shop/getCart"];
      })
  },
  components: {
    CartProducts,
  },
}
</script>

<style>

</style>