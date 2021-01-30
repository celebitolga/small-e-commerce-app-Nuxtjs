<template>
  <div>
    <div v-if="orders.length == 0" class="text-center">
      <h1>No Orders</h1>
    </div>
    <div v-else>
      <h3> Sipariş Id: {{orders._id}} </h3>
      <h3> Sipariş Tarihi: {{orders.date}} </h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th style="width: 100px;">Image</th>
            <th>Product Name</th>
            <th style="width: 100px;">Price</th>
            <th>Quantity</th>
            <th style="width: 133px;"></th>
          </tr>
        </thead>
        <tbody>
          <OrderItem v-for="(order,index) in orders.items" :key="'cart-'+index" :order="order"/>
        </tbody>
        <tfoot>
          <td colspan="4"></td>
          <td> {{total}} TL </td>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import OrderItem from '@/components/orders/OrderItem';

export default {
  props: {
    orders: {
      type: Object,
      required: false,
    },
  },
  computed: {
    total() {
      let t = 0;
      this.orders.items.forEach((order) => {
        t += order.price * order.quantity;
      })
      return t;
    }
  },
  components: {
    OrderItem,
  },
}
</script>

<style>

</style>