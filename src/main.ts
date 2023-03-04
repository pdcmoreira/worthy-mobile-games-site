import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import router from "@/router";
import messages from "@/i18n";
import App from "@/App.vue";
import "./assets/main.css";

const i18n = createI18n({
  messages,
  fallbackLocale: "en",
  fallbackWarn: false,
});

const app = createApp(App);

app.use(router);

app.use(createPinia());

app.use(i18n);

app.mount("#app");
