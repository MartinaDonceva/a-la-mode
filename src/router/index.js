import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Product from "@/components/Product";
import Contact from "@/views/Contact";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
