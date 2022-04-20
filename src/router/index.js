import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/Home";
import Form from "../Views/CreatePage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Form",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
