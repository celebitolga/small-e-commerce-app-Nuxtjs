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
  components: {
    Categories,
    ProductAddForm,
  },
};
</script>

<style>
</style>