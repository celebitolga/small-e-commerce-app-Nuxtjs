<template>
  <div>
    //ADD PRODUCT!!!

    <ProductAddForm />
  </div>
</template>

<script>
import Categories from "@/components/categories/Categories";
import ProductAddForm from "@/components/admin/ProductAddForm";

export default {
  middleware: ['session-control','authenticated'],
  layout: 'addProduct',
  head: {
    title: 'Admin New Product',
  },
  components: {
    Categories,
    ProductAddForm,
  },
};
</script>

<style>
</style>