<template>
  <div>
    <li class="nav-item">
      <a @click="isTransform =!isTransform,isShow =!isShow" class="nav-link" href="javascript:void(0);">
        <span class="menu-title">關於元大</span>
        <span class="next" :class="{'rotate':isTransform}">
          <img src="@/assets/img/next.svg" />
        </span>
      </a>
      <ul class="dp-class" :class="{'op-1':isShow}">
        <li class="dp-item">
          <router-link active-class="active" to="/About-cpnvision">
            <span class="child-item">公司理念願景</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-honor">
            <span class="child-item">光榮時刻</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-welfare">
            <span class="child-item">公益活動</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-newestnews">
            <span class="child-item">最新消息</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-addyuanta">
            <span class="child-item">加入元大</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-company">
            <span class="child-item">公司職場</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-employee">
            <span class="child-item">員工關懷</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-map">
            <span class="child-item">營業據點</span>
          </router-link>
        </li>
        <li class="dp-item">
          <router-link active-class="active" to="/About-openinfo">
            <span class="child-item">公開資訊</span>
          </router-link>
        </li>
      </ul>
    </li>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isTransform: false,
            isShow: false,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/_sidebar.scss";
</style>