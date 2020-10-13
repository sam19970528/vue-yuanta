<template>
  <div>
    <li class="nav-item">
      <a
        @click="isTransform =!isTransform,isShow =!isShow"
        class="nav-link"
        href="javascript:void(0);"
      >
        <span class="menu-title">客戶服務</span>
        <span class="next" :class="{'rotate':isTransform}">
          <img src="@/assets/img/next.svg" />
        </span>
      </a>
      <ul class="dp-class" :class="{'op-1':isShow}">
        <li class="dp-item">
            <Customerpolicy/>
        </li>
      </ul>
    </li>
  </div>
</template>
<script>
import Customerpolicy from "./Custom-pages/Customer-policy";

export default {
  components: {
      Customerpolicy,
  },
  data() {
    return {
      isTransform: false,
      isShow: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/_sidebar.scss";
</style>
