import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'GenerateImg',
  component: () => import('components/generateImg')
},
// {
//   name: '404',
//   path: '/404',
//   component: () => import('components/notFound')
// },
// {
//   path: '*', // 此处需特别注意至于最底部
//   redirect: '/404'
// }
]

export default new Router({
  mode: 'history',
  routes
})
