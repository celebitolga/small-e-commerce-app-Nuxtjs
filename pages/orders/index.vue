<template>
  <div v-if="loading">
    Loading
  </div>
  <div v-else>
    <OrdersProducts :orders="orders"/>
  </div>
</template>

<script>
import OrdersProducts from '@/components/orders/OrdersProducts';

export default {
  layout: 'addProduct',
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    orders() {
      return this.$store.getters["shop/getOrders"];
    }
  },
  created () {
    this.$store.dispatch("shop/getOrders")
      .then(() => {
        this.loading = false;
      })
  },
  components: {
    OrdersProducts,
  },
}
</script>

<style>

</style>