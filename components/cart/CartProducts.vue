<template>
  <table class="table table-bordered" v-if="products.length > 0">
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
      <CartItems v-for="(product,index) in products" :key="'cart-'+index" :product="product"/>
    </tbody>
    <tfoot>
      <td colspan="4"></td>
      <td> {{total}} TL </td>
    </tfoot>
  </table>
  <div v-else class="text-center">
    <h1>No Products</h1>
  </div>
</template>

<script>
import CartItems from '@/components/cart/CartItems';

export default {
  props: {
    products: {
      type: Array,
      required: false,
    },
  },
  computed: {
    total() {
      let t = 0;
      this.products.forEach((product) => {
        t += product.price * product.quantity;
      })
      return t;
    }
  },
  components: {
    CartItems,
  },
}
</script>

<style>

</style>