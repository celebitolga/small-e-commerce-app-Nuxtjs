<template>
  <div>
    <div v-if="products.length == 0" class="text-center">
      <h1>No Products</h1>
    </div>
    <table class="table table-bordered" v-else>
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
    <div class="text-center" v-if="products.length > 0">
      <button @click="$router.push('/')" class="btn btn-primary">Alışverişe Devam Et</button>
      <button @click="postOrders" class="btn btn-primary">Alışveri Tamamla</button>
    </div>
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
  methods: {
    postOrders() {
      this.$store.dispatch("shop/postOrders")
        .then(() => {
          this.$router.push("/orders");
        })
    }
  },
  components: {
    CartItems,
  },
}
</script>

<style>

</style>