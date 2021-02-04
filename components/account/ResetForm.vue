<template>
  <form @submit.prevent="resetPassword">

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Email"
        />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-10 offset-sm-2">
        <input
          type="submit"
          value="Reset password"
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
      email: '',
    }
  },
  methods: {
    resetPassword() {
      console.log(this.email);
    }
  },
}
</script>

<style>

</style>