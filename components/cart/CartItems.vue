<template>
  <tr>
    <td>
      <img :src="product.imageUrl" :alt="product.name" width="80">
    </td>
    <td> {{product.name}} </td>
    <td> {{product.price}} TL</td>
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
      this.$store.dispatch("shop/deleteCartItem", this.product._id)
        .then(() => {
          
        })
    }
  },
}
</script>

<style>

</style>