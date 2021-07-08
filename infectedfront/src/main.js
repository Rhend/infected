import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import AnimateCSS from 'animate.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  AnimateCSS,
  render: (h) => h(App),
}).$mount("#app");
