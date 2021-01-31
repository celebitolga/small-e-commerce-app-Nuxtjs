<template>
  <form @submit.prevent="whichProduct">
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
      <label class="col-sm-2 col-form-label">Product Category</label>
      <div class="col-sm-10">
        <div v-for="category in categories" :key="'category-' + category._id">
          <label :for="category._id"> {{category.name}} </label>
          <input
            type="checkbox"
            name="categoryids"
            :id="category._id"
            :value="category._id"
            v-model="selectedCategories"
          />
        </div>
        {{selectedCategories}}
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
  data() {
    return {
      selectedCategories: [],
    }
  },
  computed: {
    product() {
      return this.forEditProduct
        ? { ...this.forEditProduct }
        : {
            name: "",
            price: "",
            imageUrl: "",
            description: "",
            categories: [],
          };
    },
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  created () {
    let categories = [];
    // if(this.product.categories.length > 0) {
    //   categories = [...this.product.categories]
    //   this.selectedCategories = categories.map(c => c);
    // }
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
      // let product = {...this.product, categories: this.selectedCategories };
      let product = {...this.product };
      console.log(product);
      if (this.valid(product)) {
        this.$store.dispatch("admin/addProduct", product).then(() => {
          this.$router.push("/");
        });
      } else {
        alert("Don't leave spaces");
      }
    },
    editProduct() {
      // Edit Product
      // let product = {...this.product, categories: this.selectedCategories };
      let product = {...this.product };
      console.log(product);
      if (this.valid(product)) {
        this.$store.dispatch("admin/editProduct", product).then(() => {
          // this.$router.push("/admin/products?action=edit&id="+this.product._id);
          this.$router.push({
            name: "admin-products",
            params: { action: "edit", id: product._id },
          });
        });
      } else {
        alert("Don't leave spaces");
      }
    },
    valid(product) {
      if (
        product.name == "" ||
        product.price <= 0 ||
        product.imageUrl == "" ||
        product.description == "" 
        // ||
        // product.categories.length == 0
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