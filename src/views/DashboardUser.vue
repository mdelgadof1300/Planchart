<template>
  <AsideMenuUser />
  <button @click="this.abrir()" class="button is-success">
    Nuevo pedido +
  </button>
  <div class="container column is-10">
    <div class="section">
      <h1 class="title is-1">Mis pedidos</h1>
      <table class="table is-bordered is-striped is-fullwidth">
        <tr class="th is-selected">
          <th>Pedido</th>
          <th>Fecha</th>
        </tr>
        <tr>
          <td>Paquete 1,2,3</td>
        </tr>
      </table>
    </div>
    <div class="modal" :class="this.abierto ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Paquetes</p>
          <button
            @click="this.cerrar()"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="container">
            <div v-for="elem in this.opciones" :key="elem.nombre" class="card">
              <div class="card-content">
                <div class="content">
                  <p>{{ elem.nombre }}</p>
                  <p>Precio: {{ elem.precio }}</p>
                  <button class="button is-primary">Elegir</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </footer>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import AsideMenuUser from "../components/AsideMenuUser.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();
export default {
  components: {
    AsideMenuUser,
  },
  data() {
    return {
      opciones: [],
      abierto: false,
    };
  },
  methods: {
    abrir() {
      this.abierto = true;
    },
    cerrar() {
      this.abierto = false;
    },
  },
  async mounted() {
    const citiesRef = collection(db, "paquetes");
    const querySnapshot = await getDocs(citiesRef);
    querySnapshot.forEach((doc) => {
      this.opciones.push(doc.data());
    });
    console.log(this.opciones.length);
  },
};
</script>


