<template>
  <tr>
    <td>
      <img :src="order.product.imageUrl" :alt="order.product.name" width="80">
    </td>
    <td> {{order.product.name}} </td>
    <td> {{order.product.price}} TL</td>
    <td> {{order.quantity}} </td>
    <td>
      <button class="btn btn-warning btn-sm">İptal</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>

</style>