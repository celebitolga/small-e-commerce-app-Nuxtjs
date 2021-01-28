<template>
  <div>
    <Header />
    <div class="container mb-5" style="padding-top: 100px;">
      <div class="row">
        <div class="col-lg-3">
          <Categories :categories="categories"/>
        </div>

        <div class="col-lg-9">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  created() {
    this.categories = this.$store.getters.getCategories;
  },
};
</script>

<style>

</style>
