<template>
  <div>
    //EDİT PRODUCT!!!

    <ProductAddForm />
  </div>
</template>

<script>
import ProductAddForm from "@/components/admin/ProductAddForm";
export default {
  head: {
    title: 'Admin New Product',
  },
  components: {
    ProductAddForm,
  },
};
</script>

<style>
</style>