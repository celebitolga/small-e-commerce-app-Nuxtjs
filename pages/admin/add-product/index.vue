<template>
  <div>
    <ProductAddForm />
  </div>
</template>

<script>
import Categories from "@/components/categories/Categories";
import ProductAddForm from "@/components/products/ProductAddForm";
export default {
  head: {
    title: 'Admin Add Product',
  },
  created() {
    // this.$axios.get('/users').then((response) => {
    //   console.log(response.data);
    // })
  },
  components: {
    Categories,
    ProductAddForm,
  },
};
</script>

<style>
</style>