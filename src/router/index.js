import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name : 'all-posts',
    component: () => import('../views/allPosts.vue')
  },
  {
    path: '/loginPage',
    name: 'home',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/registerPage',
    name: 'registerPage',
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
