import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { LaQuestionCircleSolid } from "oh-vue-icons/icons";
import "./css/index.css";
import router from "./router";
import useAuthStore from "./store/auth.store";

addIcons(LaQuestionCircleSolid);

createApp(App)
  .use(VueQueryPlugin)
  .use(useAuthStore)
  .use(router)
  .component("v-icon", OhVueIcon)
  .mount("#app");
