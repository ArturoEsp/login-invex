import { RouteRecordRaw } from "vue-router";
import { routesList } from "../constants";
import HomePageVue from "../pages/home/Home.page.vue";
import LoginPageVue from "../pages/login/Login.page.vue";

const Routes: RouteRecordRaw[] = [
  { path: '/', name: 'Login2', component: LoginPageVue, meta: { requiresAuth: false } },
  { path: routesList.HOME, name: 'Home', component: HomePageVue, meta: { requiresAuth: true }  },
  { path: routesList.LOGIN, name: 'Login', component: LoginPageVue, meta: { requiresAuth: false } }
];

export default Routes;
