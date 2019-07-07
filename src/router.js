import Vue from 'vue'
import Router from 'vue-router'

// Module routes
import MainRoutes from '@/modules/main/router'
import UserRoutes from '@/modules/user/router'
import TaskRoutes from '@/modules/task/router'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    ...MainRoutes,
    ...UserRoutes,
    ...TaskRoutes
  ]
})
