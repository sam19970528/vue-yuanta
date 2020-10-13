<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/all.scss";
</style>

<script>
export default {
  data() {
    return {};
  },
  // created() {
  //   const api = 'http://211.23.162.191:8082/yuantalife-backstage-api/api/publication/category';
  //   this.$http.get(api).then(response => {
  //     console.log(response.data.result);
  //   });
  // }
};
</script>
