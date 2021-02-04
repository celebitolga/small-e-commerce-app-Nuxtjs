<template>
  <div>
    <LoginRegisterForm />

    <nuxt-link to="/reset" tag="a" class="">Forget password?</nuxt-link>
  </div>
</template>

<script>
import LoginRegisterForm from '@/components/account/LoginRegisterForm';
export default {
  layout: 'account',
  components: {
    LoginRegisterForm,
  },
}
</script>

<style>

</style>