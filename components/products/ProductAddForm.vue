<template>
  <form @submit.prevent="addProduct">

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
          type="submit"
          value="Save Product"
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
      product: {
        name: '',
        price: '',
        imageUrl: '',
        description: '',
      }
    }
  },
  methods: {
    addProduct() {
      if(this.valid()) {
        this.$store.dispatch("addProduct", this.product)
          .then(() => {
            this.$router.push('/');
          })
      } else {
        alert("Boş bırakma");
      }
    },
    valid() {
      if(this.product.name == '' || this.product.price <= 0 || this.product.imageUrl == '' || this.product.description == '') {
        return false
      }
      return true;
    },
  },
};
</script>

<style>
</style>