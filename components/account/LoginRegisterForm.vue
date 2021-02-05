<template>
  <form @submit.prevent="whichMethod">

    <div class="form-group row" v-if="forRegister">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          v-model="user.name"
          type="text"
          class="form-control"
          placeholder="Name"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Email"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
    </div>

    <div class="form-group row" v-if="forRegister">
      <label class="col-sm-2 col-form-label">Re-Password</label>
      <div class="col-sm-10">
        <input
          v-model="user.repassword"
          type="password"
          class="form-control"
          placeholder="Re-password"
        />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-10 offset-sm-2">
        <input
          v-if="forRegister"
          type="submit"
          value="Register"
          class="btn btn-primary mt-3"
        />
        <input
          v-else
          type="submit"
          value="Login"
          class="btn btn-primary mt-3"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    user() {
      return this.forRegister ? {name: '', email: '', password: '', repassword: '' } : { email: '', password: '' }
    }
  },
  props: {
    forRegister: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    whichMethod() {
      if(this.forRegister) {
        this.register()
      } else {
        this.login();
      }
    },
    login() {
      this.$store.dispatch('account/postLogin', this.user)
        .then(() => {

        })
    },
    register() {
      this.$store.dispatch('account/postRegister', this.user)
        .then(() => {

        })
    }
  },
}
</script>

<style>

</style>