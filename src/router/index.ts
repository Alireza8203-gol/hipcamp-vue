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
      component: () => import("../views/DestinationsView.vue"),
    },
    {
      path: "/destinations/:id",
      name: "destination details",
      component: () => import("../views/DestinationDetailsView.vue"),
    },
    {
      path: "/near-me",
      name: "Near Me",
      component: () => import("../views/UnderDevelopment.vue"),
    },
    {
      path: "/events",
      name: "Events",
      component: () => import("../views/UnderDevelopment.vue"),
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("../views/UnderDevelopment.vue"),
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: () => import("../views/UnderDevelopment.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/UnderDevelopment.vue"),
    },
    {
      path: "/contact",
      name: "Contact Us",
      component: () => import("../views/UnderDevelopment.vue"),
    },
    {
      path: "/under-development",
      component: () => import("../views/UnderDevelopment.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue"),
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
