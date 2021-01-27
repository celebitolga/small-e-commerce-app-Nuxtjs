<template>
  <div class="col-md-4">
    <div class="card my-3">
      <img :src="product.imageUrl" :alt="product.name" :title="product.name" class="card-img-top product-image" />
      <div class="card-body">
        <h4 class="card-title">
          <nuxt-link tag="a" to="/"> {{product.name}} </nuxt-link>
        </h4>
        <p class="card-text pt-2">{{product.description}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"> {{product.price}} </small>
        <nuxt-link tag="a" to="/" class="btn btn-outline-primary btn-sm float-right"> Add to Cart </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.product-image {
  min-height: 300px;
  max-height: 300px;
}
</style>