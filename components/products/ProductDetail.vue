<template>
  <div class="row">
    <div class="col-md-4">
      <img :src="product.imageUrl" :alt="product.description" />
    </div>
    <div class="col-md-8 pl-4">
      <p>{{ product.name }}</p>
      <hr />
      <p>{{ product.description }}</p>
      <br />
      <p>Price: {{ product.price }} TL</p>
      <button type="submit" class="btn btn-primary btn-lg">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>