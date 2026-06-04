import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/destinations",
      name: "Destinations",
      component: () => import("../views/Destinations.vue"),
    },
    {
      path: "/destinations/:title",
      name: "place",
      component: () => import("../views/Place.vue"),
    },
    {
      path: "/near-me",
      name: "Near Me",
      component: HomeView,
    },
    {
      path: "/events",
      name: "Events",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "Blog",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "Contact Us",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
