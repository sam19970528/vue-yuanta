<template>
  <div>
    <a
      @click="isTransform =!isTransform,isShow =!isShow"
      class="nav-link"
      href="javascript:void(0);"
    >
      <span class="child-title">加值服務</span>
      <span class="next" :class="{'rotate':isTransform}">
        <img src="@/assets/img/next.svg" />
      </span>
    </a>
    <ul :class="{'op-1':isShow}">
      <li>
        <router-link active-class="active" to="/Customer-policy-stored-global">
          <span class="child-item">全球尊榮服務卡</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Customer-policy-stored-insurestore">
          <span class="child-item">保戶加值服務</span>
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