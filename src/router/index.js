import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/loginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registerPage',
    name: 'registerPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/registerPage.vue')
  },
  {
    path: '/newArticlePage',
    name : 'new-article',
    component: () => import('../views/newArticlePage.vue')
  },
  {
    path: '/editArticlePage',
    name : 'edit-article',
    component: () => import('../views/editArticlePage.vue')
  },
  {
    path: '/allPosts',
    name : 'all-posts',
    component: () => import('../views/allPosts.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
