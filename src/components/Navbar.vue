<template>
  <div>
    <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center">
        <ul class="navbar-nav navbar-nav-right">
            <li>
                <span>使用者名稱</span>
            </li>
            <li>
              <router-link class="btn btn-secondary" to="/Login">登出</router-link>
              <!-- <button class="btn btn-secondary" type="button">登出</button> -->
            </li>
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="icon-menu"></span>
        </button>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
  .navbar-nav{
    li{
      padding: 0 15px;
    }
  }
</style>