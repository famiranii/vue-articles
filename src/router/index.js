import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/allPost',
    name : 'all-posts',
    component: () => import('../views/allPosts.vue')
  },
  {
    path: '/',
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
    path: '/editArticlePage/:slug',
    name : 'edit-article',
    component: () => import('../views/editArticlePage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
