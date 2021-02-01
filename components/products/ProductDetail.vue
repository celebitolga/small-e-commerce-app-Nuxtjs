<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <img :src="product.imageUrl" :alt="product.description" style="width: 100%"/>
      </div>
      <div class="col-md-9 pl-3">
        <h1 class="mb-3">{{ product.name }}</h1>
        <hr />
        <nuxt-link tag="a" to="/" class="btn btn-link p-0 mb-3">Telefon</nuxt-link>
        <div class="mb-3">
          <h4 class="text-primary mb-3">Price: {{ product.price }} TL</h4>
          <button @click="addToCart" class="btn btn-primary btn-lg">Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="p-3">
          {{product.description}}
        </p>
      </div>
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
  methods: {
    addToCart() {
      this.$store.dispatch("shop/postAddToCart", this.product._id)
    }
  },
};
</script>

<style>
</style>