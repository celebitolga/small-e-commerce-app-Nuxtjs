<template>
  <CategoryAddForm />
</template>

<script>
import CategoryAddForm from '@/components/admin/CategoryAddForm';
export default {
  middleware: ['session-control','authenticated'],
  components: {
    CategoryAddForm,
  },
}
</script>

<style>

</style>