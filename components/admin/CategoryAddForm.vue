<template>
  <form @submit.prevent="whichCategory">

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
          v-if="this.forEditCategory"
          type="submit"
          value="Save Category"
          class="btn btn-primary mt-3"
        />
        <input
          v-else
          type="submit"
          value="Add New Category"
          class="btn btn-primary mt-3"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    category() {
      return this.forEditCategory
        ? { ...this.forEditCategory }
        : {
            name: "",
            description: "",
          };
    },
  },
  props: {
    forEditCategory: {
      type: Object,
      required: false,
    },
  },
  methods: {
    whichCategory() {
      if (this.forEditCategory) {
        // Edit Product
        this.editCategory();
      } else {
        // Add new product
        this.addCategory();
      }
    },
    addCategory() {
      // Add new product
      if (this.valid()) {
        this.$store.dispatch("admin/addCategory", this.category).then(() => {
          this.$router.push("/admin/categories");
        });
      } else {
        alert("Don't leave spaces");
      }
    },
    editCategory() {
      // Edit Product
      if (this.valid()) {
        this.$store.dispatch("admin/editCategory", this.category).then(() => {
          // this.$router.push("/admin/products?action=edit&id="+this.product._id);
          
          this.$router.push({
            name: "admin-categories",
            params: { action: "edit", id: this.category._id },
          });
        });
      } else {
        alert("Don't leave spaces");
      }
    },
    valid() {
      if (
        this.category.name == "" ||
        this.category.description == ""
      ) {
        return false;
      }
      return true;
    },
  },
}
</script>

<style>

</style>