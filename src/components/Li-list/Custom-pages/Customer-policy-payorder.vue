<template>
  <div>
    <a
      @click="isTransform =!isTransform,isShow =!isShow"
      class="nav-link"
      href="javascript:void(0);"
    >
      <span class="child-title">繳費服務</span>
      <span class="next" :class="{'rotate':isTransform}">
        <img src="@/assets/img/next.svg" />
      </span>
    </a>
    <ul :class="{'op-1':isShow}">
      <li>
        <router-link active-class="active" to="/Customer-policy-payorder-content">
          <span class="child-item">繳費服務說明</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Customer-policy-payorder-yearpay">
          <span class="child-item">年度繳費證明文件</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
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