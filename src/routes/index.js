import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ComicsView from "@/views/ComicsView.vue";
import ComicView from "@/views/ComicView.vue";
import CartView from "@/views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/comics",
      name: "comics",
      component: ComicsView,
    },
    {
      path: "/comic/:id",
      name: "comic",
      component: ComicView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
  ],
});

export default router;
