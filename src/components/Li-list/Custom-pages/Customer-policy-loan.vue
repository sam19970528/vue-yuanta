<template>
  <div>
    <a
      @click="isTransform =!isTransform,isShow =!isShow"
      class="nav-link"
      href="javascript:void(0);"
    >
      <span class="child-title">借款服務</span>
      <span class="next" :class="{'rotate':isTransform}">
        <img src="@/assets/img/next.svg" />
      </span>
    </a>
    <ul :class="{'op-1':isShow}">
      <li>
        <router-link active-class="active" to="/Customer-policy-loan-apply">
          <span class="child-item">申請資格說明</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Customer-policy-loan-loanrate">
          <span class="child-item">保單借款利率</span>
        </router-link>
      </li>
            <li>
        <router-link active-class="active" to="/Customer-policy-loan-repay">
          <span class="child-item">保單還款給付方式</span>
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