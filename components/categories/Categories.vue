<template>
  <div class="list-group">
    <Category v-for="(category, index) in categories" :key="'category' + index" :category="category"/>
  </div>
</template>

<script>
import Category from '@/components/categories/Category';
export default {
  components: {
    Category,
  },
  props: {
    categories: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style>
</style>