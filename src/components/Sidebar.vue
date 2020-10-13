<template>
  <div>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <Aboutlist/>
        <Customerlist/>
      </ul>
    </nav>
  </div>
</template>
<script>
import $ from "jquery";
import Aboutlist from "./Li-list/About-list";
import Customerlist from "./Li-list/Customer-list";
export default {
  components: {
    Aboutlist,
    Customerlist,
  },
  data() {
    return {

    };
  },
  methods: {}
};

</script>
