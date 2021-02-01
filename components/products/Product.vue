<template>
  <div class="col-md-4">
    <div class="card my-3">
      <nuxt-link tag="a" :to="'/products/'+product._id">
        <img :src="product.imageUrl" :alt="product.name" :title="product.name" class="card-img-top product-image"/>
      </nuxt-link>
      <div class="card-body">
        <h4 class="card-title">
          <nuxt-link tag="a" :to="'/products/'+product._id"> {{product.name}} </nuxt-link>
        </h4>
        <small class="text-muted"> {{product.price}} TL</small>
      </div>
      <div class="card-footer text-center">
        <button @click="addToCart" class="btn btn-outline-primary btn-sm" :disabled="clicked"> Add to Cart </button>
        <nuxt-link tag="a" :to="'/products/'+product._id" class="btn btn-outline-primary btn-sm"> Details </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.clicked = true;
      
      this.$store.dispatch("shop/postAddToCart", this.product._id)
        .then(() => this.clicked = false);
    }
  },
};
</script>

<style scoped>
.product-image {
  min-height: 300px;
  max-height: 300px;
}
</style>