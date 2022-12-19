import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Home-page";

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
