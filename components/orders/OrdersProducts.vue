<template>
  <div>
    <div v-if="orders.length == 0" class="text-center">
      <h1>No Orders</h1>
    </div>
    <OrderItems v-else v-for="order in orders" :key="'order-'+order._id" :order="order" />
    <div class="text-end">Total: {{total}} TL</div>
  </div>
</template>

<script>
import OrderItems from '@/components/orders/OrderItems';

export default {
  props: {
    orders: {
      type: Array,
      required: false,
    },
  },
  computed: {
    total() {
      let total = 0;
      this.orders.forEach((order) => {
        order.items.forEach((orr) => {
          total += orr.product.price * orr.quantity;
        })
      })
      return total;
    }
  },
  components: {
    OrderItems,
  },
}
</script>

<style>

</style>