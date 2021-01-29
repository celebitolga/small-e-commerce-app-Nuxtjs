<template>
  <form @submit.prevent="saveCategory">

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Category Name</label>
      <div class="col-sm-10">
        <input
          v-model="category.name"
          type="text"
          class="form-control"
          placeholder="Product Name"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Category Description</label>
      <div class="col-sm-10">
        <input
          v-model="category.description"
          type="text"
          class="form-control"
          placeholder="Product Description"
        />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-10 offset-sm-2">
        <input
          type="submit"
          value="Save Category"
          class="btn btn-primary mt-3"
        />
        <!-- <input
          v-if="this.forEditProduct"
          type="submit"
          value="Save Product"
          class="btn btn-primary mt-3"
        />
        <input
          v-else
          type="submit"
          value="Add New Product"
          class="btn btn-primary mt-3"
        /> -->
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      category: {
        name: '',
        description: '',
      }
    }
  },
  methods: {
    saveCategory() {
      this.$store.dispatch("admin/addCategory", this.category)
        .then(() => {
          console.log("CATEGORRYYYYYYYYYYY");
        })
    }
  },
}
</script>

<style>

</style>