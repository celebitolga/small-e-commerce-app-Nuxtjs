<template>
  <div class="col-md-4">
    <div class="card my-3">
      <img :src="product.imageUrl" :alt="product.name" :title="product.name" class="card-img-top product-image" />
      <div class="card-body">
        <h4 class="card-title">
          <a href="/">{{product.name}} </a>
        </h4>
        <p class="card-text pt-2">{{product.description}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"> {{product.price}} </small>
        <a href="/" class="btn btn-secondary btn-sm float-right"> {{product.description}} </a>
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