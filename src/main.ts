import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "devextreme/dist/css/dx.light.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import {
  fas,
  faGauge,
  faBars,
  faXmark,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import Header from "@/components/Header.vue";
import { RouterLink } from "vue-router";
const app = createApp(App);
library.add(fas, faGauge, faBars, faXmark, faRightFromBracket, faUser);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Header", Header);
app.component("router-link", RouterLink);
app.component('EasyDataTable', Vue3EasyDataTable);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
