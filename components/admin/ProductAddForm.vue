<template>
  <form @submit.prevent="whichProduct">
    <p v-if="this.forEditProduct">{{ this.product }} Save</p>
    <p v-else>{{ this.product }} add</p>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Product Name</label>
      <div class="col-sm-10">
        <input
          v-model="product.name"
          type="text"
          class="form-control"
          placeholder="Product Name"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Product Price</label>
      <div class="col-sm-10">
        <input
          v-model="product.price"
          type="number"
          class="form-control"
          placeholder="Product Price"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Product ImageUrl</label>
      <div class="col-sm-10">
        <input
          v-model="product.imageUrl"
          type="text"
          class="form-control"
          placeholder="Product Image"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Product Description</label>
      <div class="col-sm-10">
        <input
          v-model="product.description"
          type="text"
          class="form-control"
          placeholder="Product Description"
        />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-10 offset-sm-2">
        <input
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
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    product() {
      return this.forEditProduct
        ? { ...this.forEditProduct }
        : {
            name: "",
            price: "",
            imageUrl: "",
            description: "",
          };
    },
  },
  props: {
    forEditProduct: {
      type: Object,
      required: false,
    },
  },
  methods: {
    whichProduct() {
      if (this.forEditProduct) {
        // Edit Product
        this.editProduct();
      } else {
        // Add new product
        this.addProduct();
      }
    },
    addProduct() {
      // Add new product
      if (this.valid()) {
        this.$store.dispatch("admin/addProduct", this.product).then(() => {
          this.$router.push("/");
        });
      } else {
        alert("Boş bırakma");
      }
    },
    editProduct() {
      // Edit Product
      if (this.valid()) {
        this.$store.dispatch("admin/editProduct", this.product).then(() => {
          this.$router.push("/admin/products");
        });
      } else {
        alert("Boş bırakma");
      }
    },
    valid() {
      if (
        this.product.name == "" ||
        this.product.price <= 0 ||
        this.product.imageUrl == "" ||
        this.product.description == ""
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
</style>