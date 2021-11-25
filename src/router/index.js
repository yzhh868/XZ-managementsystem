import Vue from 'vue'
import VueRouter from 'vue-router'

const index = () =>import('../views/index/index')
const addWarehouse =()=>import('../views/baseInformation/addWarehose')
const baseInformation =()=>import('../views/baseInformation/baseInformation')
Vue.use(VueRouter)

const routes = [

  {
    path: '',
    redirect:'/baseInformation'
  },

  {
    path:'/baseInformation',
    meta: {
      title: '基础信息管理'
    },
    component:baseInformation,
  },
  {
    path:'/addWarehouse',
    meta:{
      title:'新增仓库'
    },
    component:addWarehouse
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes
})

router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title,
  next()
})

export default router
