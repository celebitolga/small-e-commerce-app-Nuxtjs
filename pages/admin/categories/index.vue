<template>
    <div class="row">
      <div v-if="action === 'edit' && action !== null" class="alert alert-success">The product has been updated</div>
      <div v-if="deletedCategory !== null" class="alert alert-danger">The product ({{deletedCategory}}) has been deleted</div>

      <AdminCategories :categories="categories" :updatedId="updatedId" @deletedSucceed="deletedCategory = $event"/>
    </div>
</template>

<script>
import AdminCategories from '@/components/admin/AdminCategories';
export default {
  layout: 'addProduct',
  data() {
    return {
      categories: [],
      deletedCategory: null,
    }
  },
  computed: {
    action() {
      return this.$route.params.action ? this.$route.params.action : null;
    },
    updatedId() {
      return this.$route.params.id ? this.$route.params.id : null;
    },
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