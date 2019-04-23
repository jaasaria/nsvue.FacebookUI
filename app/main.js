import Vue from "nativescript-vue";
import App from "./components/page/App";
import store from "./store";

import VueDevtools from "nativescript-vue-devtools";


import { TNSFontIcon, fonticon } from "nativescript-fonticon";
// https://github.com/NathanWalker/nativescript-fonticon

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  fa: "./fonts/font-awesome.css",
  ion: "./fonts/ionicons.css"
};
TNSFontIcon.loadCss();
Vue.filter("fonticon", fonticon);

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}
// Vue.config.silent = TNS_ENV === "production";
Vue.config.silent = false;

new Vue({
  store,
  render: h => h("frame", [h(App)])
}).$start();
