import Vue from "vue";
import VueRouter from "vue-router";

import AppLogin from "@/components/AppLogin";
import AppRegister from "@/components/AppRegister";

import AllGalleries from "@/components/AllGalleries";
import CreateGallery from "@/components/CreateGallery";
import MyGalleries from "@/components/MyGalleries";
import AuthorGalleries from "@/components/AuthorGalleries";
import ViewGallery from "@/components/ViewGallery";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: AllGalleries
  },
  {
    path: "/my-galleries",
    name: "my-galleries",
    component: MyGalleries,
    meta: {
      auth: true
    }
  },
  {
    path: "/authors/:id",
    name: "author",
    component: AuthorGalleries
  },
  {
    path: "/galleries/:id",
    name: "gallery",
    component: ViewGallery
  },
  {
    path: "/create",
    name: "create-gallery",
    component: CreateGallery,
    meta: {
      auth: true
    }
  },
  {
    path: "/edit-gallery/:id",
    name: "edit",
    component: CreateGallery,
    meta: {
      auth: true
    }
  },
  {
    path: "/login",
    component: AppLogin,
    name: "login",
    meta: {
      guest: true
    }
  },
  {
    path: "/register",
    component: AppRegister,
    name: "register",
    meta: {
      guest: true
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem("user");

  if (isAuth && to.meta.guest) {
    return next({ name: "home" });
  }

  if (!isAuth && to.meta.auth) {
    return next({ name: "login" });
  }

  return next();
});

export default router;
