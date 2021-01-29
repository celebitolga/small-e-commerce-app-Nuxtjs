<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Category Name</th>
        <th>Category Description</th>
        <th style="width: 133px;"></th>
      </tr>
    </thead>
    <tbody>
      
      <tr v-for="(category, index) in categories" :key="'category' + index" :class="{'bg-success': updatedId == category._id}" >
        <td>{{ category.name }}</td>
        <td>{{ category.description }}</td>
        <td>
          <nuxt-link tag="a" :to="'/admin/edit-category/' + category._id" class="btn btn-warning btn-sm">Edit</nuxt-link>
          <button class="btn btn-danger btn-sm" @click="deleteCategory(category)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: false,
    },
    updatedId: {
      type: String,
      required: false,
    },
  },
  methods: {
    deleteCategory(category) {
      if(confirm(`--${ category.name }-- will delete, are you sure?`)) {
        this.$store.dispatch("admin/deleteCategory", category._id )
          .then(() => {
            /// Delete succeed
            this.$emit("deletedSucceed", category.name)
          })
      }
    }
  },
};
</script>

<style>
</style>