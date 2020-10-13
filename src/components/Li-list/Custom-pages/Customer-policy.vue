<template>
  <div>
    <a
      @click="isTransform =!isTransform,isShow =!isShow"
      class="nav-link"
      href="javascript:void(0);"
    >
      <span class="child-title">保單服務</span>
      <span class="next" :class="{'rotate':isTransform}">
        <img src="@/assets/img/next.svg" />
      </span>
    </a>
    <ul :class="{'op-1':isShow}">
      <li>
        <router-link active-class="active" to="/Customer-policy-change">
          <span class="child-item">保單更換</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Customer-policy-hospital">
          <span class="child-item">體檢醫院</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Customer-policy-livinggold">
          <span class="child-item">生存金給付</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Customer-policy-enginsure">
          <span class="child-item">英文投保</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Customer-policy-notice">
          <span class="child-item">投保人須知</span>
        </router-link>
      </li>
      <li>
        <Custompolicypayorder></Custompolicypayorder>
      </li>
      <li>
        <Custompolicyloan></Custompolicyloan>
      </li>
      <li>
        <Custompolicystored></Custompolicystored>
      </li>
    </ul>
  </div>
</template>
<script>
import Custompolicypayorder from "./Customer-policy-payorder";
import Custompolicyloan from "./Customer-policy-loan";
import Custompolicystored from "./Customer-policy-stored";
export default {
  components: {
    Custompolicypayorder,
    Custompolicyloan,
    Custompolicystored,
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