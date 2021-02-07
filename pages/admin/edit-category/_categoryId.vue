<template>
  <div v-if="loading">
    LOADING...
  </div>
  <div v-else>
    <div v-if="category === null">
      Not Found!
    </div>
    <div v-else>
      //EDİT CATEGORY!!!

      <CategoryAddForm :forEditCategory="category"/>
    </div>
  </div>
</template>

<script>
import CategoryAddForm from "@/components/admin/CategoryAddForm";

export default {
  middleware: ['session-control','authenticated'],
  layout: 'addProduct',
  data() {
    return {
      category: null,
      loading: true,
    }
  },
  created () {
    const _categoryId = this.$route.params.categoryId;
    this.$store.dispatch("admin/getAdminCategory", _categoryId)
      .then(() => {
        // console.log("Admin Edit Product");
        this.category = this.$store.getters["admin/getEditCategory"];
        this.loading = false;
      })
  },
  components: {
    CategoryAddForm,
  },
  head: {
    title: "Category Edit /////",
  },
}
</script>

<style>

</style>