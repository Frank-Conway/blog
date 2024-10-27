import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Login",
      path: "/login",
      component: () => import("../views/login/index.vue"),
    },
    {
      name: "articleAdd",
      path: "/articleadd",
      component: () => import("../views/article/articleAdd.vue"),
    },
    {
      name: "Layout",
      path: "/",
      component: () => import("../components/layout/index.vue"),
      children:[
        {
          name: "Home",
          path: "home",
          component: () => import("../views/home.vue"),
        },
        {
          name: "Archive",
          path: "archive",
          component: () => import("../views/archive/index.vue"),
        },
        {
          name: "Article",
          path: "article",
          component: () => import("../views/article/index.vue"),
        },
        {
          name: "Talk",
          path: "talk",
          component: () => import("../views/talk/index.vue"),
        },
        {
          name: "More",
          path: "more",
          children: [
            {
              name: "About",
              path: "about",
              component: () => import("../views/about/index.vue"),
            },
          ]
        },
      ]
    },
  ]
})
export default router
