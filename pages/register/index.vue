<template>
  <LoginRegisterForm :forRegister="true"/>
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