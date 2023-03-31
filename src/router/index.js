import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Product from "@/components/Product";
import Contact from "@/views/Contact";
import ShoppingCart from "@/components/ShoppingCart";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
