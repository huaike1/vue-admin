import Vue from "vue";
import VueRouter from "vue-router";
//import Login from "../views/Login/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Login"
  },
  {
    path: "/Login",
    name: "Login",
    component: ()=>import ("../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
