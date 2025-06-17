import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import axios from "axios";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// PrimeVue
import Button from "primevue/button";
import Card from "primevue/card";
import Paginator from "primevue/paginator";

app.component("Button", Button);
app.component("Card", Card);
app.component("Paginator", Paginator);

axios.defaults.baseURL = "https://www.ehlcrm.theskyroute.com/api/";

app.mount("#app");
