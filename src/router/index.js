import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/allPost",
    name: "all-posts",
    component: () => import("../views/all posts/allPosts.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/login/loginPage.vue"),
  },
  {
    path: "/registerPage",
    name: "registerPage",
    component: () => import("../views/register/registerPage.vue"),
  },
  {
    path: "/newArticlePage",
    name: "new-article",
    component: () => import("../views/new article/newArticlePage.vue"),
  },
  {
    path: "/editArticlePage/:slug",
    name: "edit-article",
    component: () => import("../views/edit article/editArticlePage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
