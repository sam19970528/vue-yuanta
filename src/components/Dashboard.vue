<template>
  <div class="container-scroller">
    <Navbar />
    <div class="container-fluid page-body-wrapper">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>
