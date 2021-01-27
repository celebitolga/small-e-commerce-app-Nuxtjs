<template>
  <div>
    <Products :products="products"/>
  </div>
</template>

<script>
import Products from "@/components/products/Products";

export default {
  data() {
    return {
      products: [],
    }
  },
  created () {
    this.products = this.$store.getters.getProducts;
  },
  fetch({store}) {
    return new Promise((resolve, reject) => {
      store.dispatch("shop/getProducts")
        .then(() => {
          // console.log("Products index.vue");
        })
        resolve();

        reject(new Error());
    }).catch((e) => {
      console.log(e);
    })
  },
  components: {
    Products,
  },
  head: {
    title: "Products",
  },
}
</script>

<style>

</style>