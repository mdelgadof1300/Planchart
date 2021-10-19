import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Unicon from "vue-unicons";
import {
  uniLocationPoint,
  uniWhatsapp,
  uniEnvelope,
  uniClock,
} from "vue-unicons/dist/icons";

import "../node_modules/bulma/css/bulma.min.css";

Unicon.add([uniLocationPoint, uniWhatsapp, uniEnvelope, uniClock]);

createApp(App)
  .use(Unicon)
  .use(store)
  .use(router)
  .mount("#app");
