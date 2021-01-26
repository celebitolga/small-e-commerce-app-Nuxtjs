<template>
  <div class="list-group">
    <Category v-for="index in 3" :key="'category' + index" :index="index"/>
  </div>
</template>

<script>
import Category from '@/components/categories/Category';
export default {
  components: {
    Category,
  },
};
</script>

<style>
</style>