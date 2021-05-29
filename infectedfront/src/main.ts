import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import messages from "./lang";
import App from "./App.vue";
import router from "./router";
import store from "./store";


const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages
  })
createApp(App).use(store).use(router).use(i18n).mount("#app");
