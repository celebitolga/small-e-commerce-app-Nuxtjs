<template>
  <div>
    <nuxt-link
      tag="a"
      :to="'/categories/' + category._id"
      class="list-group-item"
      exact-active-class="active"
      >{{ category.name }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>