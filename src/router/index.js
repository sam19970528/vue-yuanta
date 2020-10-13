import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('@/components/Dashboard.vue'),
  children: [
    {
    path: 'About-cpnvision',
    name: 'About-cpnvision',
    component: () => import('@/components/pages/About-cpnvision.vue')
    },
    {
      path: 'About-honor',
      name: 'About-honor',
      component: () => import('@/components/pages/About-honor.vue')
    },
    {
      path: 'About-welfare',
      name: 'About-welfare',
      component: () => import('@/components/pages/About-welfare.vue')
    },
    {
      path: 'About-addyuanta',
      name: 'About-addyuanta',
      component: () => import('@/components/pages/About-addyuanta.vue')
    },
    {
      path: 'About-company',
      name: 'About-company',
      component: () => import('@/components/pages/About-company.vue')
    },
    {
      path: 'About-employee',
      name: 'About-employee',
      component: () => import('@/components/pages/About-employee.vue')
    },
    {
      path: 'About-map',
      name: 'About-map',
      component: () => import('@/components/pages/About-map.vue')
    },
    {
      path: 'About-openinfo',
      name: 'About-openinfo',
      component: () => import('@/components/pages/About-openinfo.vue')
    },
    {
      path: 'About-newestnews',
      name: 'About-newestnews',
      component: () => import('@/components/pages/About-newestnews.vue')
    },
    {
      path: 'Customer-policy-change',
      name: 'Customer-policy-change',
      component: () => import('@/components/pages/Customer-policy-change.vue')
    },
    {
      path: 'Customer-policy-hospital',
      name: 'Customer-policy-hospital',
      component: () => import('@/components/pages/Customer-policy-hospital.vue')
    },
    {
      path: 'Customer-policy-livinggold',
      name: 'Customer-policy-livinggold',
      component: () => import('@/components/pages/Customer-policy-livinggold.vue')
    },
    {
      path: 'Customer-policy-enginsure',
      name: 'Customer-policy-enginsure',
      component: () => import('@/components/pages/Customer-policy-enginsure.vue')
    },
    {
      path: 'Customer-policy-notice',
      name: 'Customer-policy-notice',
      component: () => import('@/components/pages/Customer-policy-notice.vue')
    },
    {
      path: 'Customer-policy-payorder-content',
      name: 'Customer-policy-payorder-content',
      component: () => import('@/components/pages/Customer-policy-payorder-content.vue')
    },
    {
      path: 'Customer-policy-payorder-yearpay',
      name: 'Customer-policy-payorder-yearpay',
      component: () => import('@/components/pages/Customer-policy-payorder-yearpay.vue')
    },
    {
      path: 'Customer-policy-loan-apply',
      name: 'Customer-policy-loan-apply',
      component: () => import('@/components/pages/Customer-policy-loan-apply.vue')
    },
    {
      path: 'Customer-policy-loan-loanrate',
      name: 'Customer-policy-loan-loanrate',
      component: () => import('@/components/pages/Customer-policy-loan-loanrate.vue')
    },
    {
      path: 'Customer-policy-loan-repay',
      name: 'Customer-policy-loan-repay',
      component: () => import('@/components/pages/Customer-policy-loan-repay.vue')
    },
    {
      path: 'Customer-policy-stored-global',
      name: 'Customer-policy-stored-global',
      component: () => import('@/components/pages/Customer-policy-stored-global.vue')
    },
    {
      path: 'Customer-policy-stored-insurestore',
      name: 'Customer-policy-stored-insurestore',
      component: () => import('@/components/pages/Customer-policy-stored-insurestore.vue')
    },
]
},
{
    path: '/Login',
    name: 'Login',
    component: () => import('@/components/pages/Login.vue'),
}

]

const router = new VueRouter({
  routes
})

export default router