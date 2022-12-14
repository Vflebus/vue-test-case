import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TableView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/FormView.vue')
  },
  {
    path: '/http',
    name: 'http',
    component: () => import('../views/HttpRequestsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
