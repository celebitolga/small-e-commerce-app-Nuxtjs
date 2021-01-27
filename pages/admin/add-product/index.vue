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