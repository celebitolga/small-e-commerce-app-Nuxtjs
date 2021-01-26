<template>
  <div>
    <Header />
    <div class="container" style="padding-top: 100px">
      <div class="row">
        <div class="col-lg-3">
          <Categories />
        </div>

        <div class="col-lg-9">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>
