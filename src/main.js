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
import VueGoogleMaps from "@fawmi/vue-google-maps";

import { initializeApp } from "firebase/app";

/* info de la base en la consola */
var firebaseConfig = {
  apiKey: "AIzaSyDwdmQvEsHEjLO2BmAb7iOnNAm4Fidi1Yk",
  authDomain: "udemy-api-556f0.firebaseapp.com",
  databaseURL: "https://udemy-api-556f0-default-rtdb.firebaseio.com",
  projectId: "udemy-api-556f0",
  storageBucket: "udemy-api-556f0.appspot.com",
  messagingSenderId: "989968827674",
  appId: "1:989968827674:web:1188dd8b7e8b6ae84c58a3",
};

// conexión a firebase
initializeApp(firebaseConfig);

Unicon.add([uniLocationPoint, uniWhatsapp, uniEnvelope, uniClock]);

createApp(App)
  .use(Unicon)
  .use(store)
  .use(VueGoogleMaps, {
    //conexión a la API de google maps
    load: {
      key: "AIzaSyCGjumjuvGvyJDJCJCNjTjFuICjWAGPTts",
      libraries: "places",
    },
  })
  .use(router)
  .mount("#app");
