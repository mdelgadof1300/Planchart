import { createApp } from "vue";
import App from "./App.vue";
import "../src/resources/_CSS/estilo.css";
import Unicon from "vue-unicons";
import {
  uniLocationPoint,
  uniWhatsapp,
  uniEnvelope,
  uniClock,
} from "vue-unicons/dist/icons";

Unicon.add([uniLocationPoint, uniWhatsapp, uniEnvelope, uniClock]);

createApp(App).use(Unicon).mount("#app");
