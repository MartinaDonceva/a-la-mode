import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Product from "@/components/Product";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
