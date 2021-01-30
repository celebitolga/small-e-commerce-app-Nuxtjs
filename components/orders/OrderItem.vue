<template>
  <tr>
    <td>
      <img :src="order.imageUrl" :alt="order.name" width="80">
    </td>
    <td> {{order.name}} </td>
    <td> {{order.price}} TL</td>
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