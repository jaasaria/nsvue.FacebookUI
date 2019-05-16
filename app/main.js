import Vue from "nativescript-vue";
import App from "./components/page/App";
import store from "./store";
import VueDevtools from "nativescript-vue-devtools";

import RadListView from 'nativescript-ui-listview/vue';


import { TNSFontIcon, fonticon } from "nativescript-fonticon";
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  fa: "./fonts/font-awesome.css"
};
TNSFontIcon.loadCss();
Vue.filter("fonticon", fonticon);



if (TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}
Vue.config.silent = false;
Vue.use(RadListView)

new Vue({
  store,
  render: h => h("frame", [h(App)])
}).$start();
