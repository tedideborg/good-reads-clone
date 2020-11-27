import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/ui/BaseCard";
import BaseButton from "./components/ui/BaseButton";
import BaseContentArea from "./components/ui/BaseContentArea";

import router from "./router";
import store from "./store/index";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-content", BaseContentArea);

if (window.Cypress) {
  window.__store__ = store;
}

app.mount("#app");
