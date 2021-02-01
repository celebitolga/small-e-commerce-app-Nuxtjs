<template>
  <tr>
    <!-- Data yapıcı değiştirdiğimiz için product.productId olarak yüklüyoruz -->
    <td>
      <img :src="product.productId.imageUrl" :alt="product.name" width="80">
    </td>
    <td> {{product.productId.name}} </td>
    <td> {{product.productId.price}} TL</td>
    <td> {{product.quantity}} </td>
    <td>
      <button @click="deleteCartItem" class="btn btn-danger btn-sm">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteCartItem() {
      this.$store.dispatch("shop/deleteCartItem", this.product.productId._id)
        .then(() => {
          
        })
    }
  },
}
</script>

<style>

</style>