<template>
  <AdminCategories :categories="categories"/>
</template>

<script>
import AdminCategories from '@/components/admin/AdminCategories';
export default {
  layout: 'addProduct',
  data() {
    return {
      categories: [],
    }
  },
  components: {
    AdminCategories,
  },
  created () {
    this.categories = this.$store.getters.getCategories;
  },
  fetch({store}) {
    return new Promise((resolve, reject) => {
      store.dispatch("admin/getAdminCategories")
        .then(() => {
          // console.log("Products index.vue");
        })
        resolve();

        reject(new Error());
    }).catch((e) => {
      console.log(e);
    })
  },
}
</script>

<style>

</style>