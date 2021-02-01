<template>
  <div>
    <h3> Sipariş Id: {{order._id}} </h3>
      <h3> Sipariş Tarihi: {{order.date}} </h3>
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
        <OrderItem v-for="order in order.items" :order="order" :key="'order-' + order._id"/>
      </tbody>
      <tfoot>
        <td colspan="4"></td>
        <td> {{total}} TL </td>
      </tfoot>
    </table>
  </div>
</template>

<script>
import OrderItem from '@/components/orders/OrderItem';
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    total() {
      let total = 0;
      this.order.items.forEach(orr => {
        total += orr.product.price * orr.quantity;
      })
      return total;
    }
  },
  created () {
  },
  components: {
    OrderItem,
  },
}
</script>

<style>

</style>