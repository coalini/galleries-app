import Vue from "vue";
import VueRouter from "vue-router";
import AppAllGalleries from "@/components/AppAllGalleries.vue";
import AppLogin from "@/components/AppLogin.vue";
import AppRegister from "@/components/AppRegister.vue";
import AppMyGalleries from "@/components/AppMyGalleries.vue";
import AppCreateGallery from "@/components/AppCreateGallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AppAllGalleries,
    name: "AppAllGalleries"
  },
  {
    path: "/login",
    component: AppLogin,
    name: "AppLogin",
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register",
    component: AppRegister,
    name: "AppRegister",
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/my-galleries",
    component: AppMyGalleries,
    name: "AppMyGalleries",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/create",
    component: AppCreateGallery,
    name: "AppCreateGallery",
    meta: {
      requiresAuth: true
    }
  }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
