<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th style="width: 120px;">Category Name</th>
        <th style="width: 150px;">Category Description</th>
        <th style="width: 50px;"></th>
      </tr>
    </thead>
    <tbody>
      
      <tr v-for="(category, index) in categories" :key="'category' + index">
        <td>{{ category.name }}</td>
        <td>{{ category.description }}</td>
        <td>
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
  },
  methods: {
    deleteCategory(category) {
      console.log(category);
    }
  },
};
</script>

<style>
</style>