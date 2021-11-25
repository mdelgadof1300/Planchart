<template>
  <section class="main-content columns is-fullheight">
    <AsideMenuUser />
    <div class="container column is-10">
      <div class="section">
        <h1 class="title is-1">Mis pedidos</h1>
        <div class="section">
          <button
            @click="this.abrir()"
            class="button is-success is-pulled-right"
          >
            Nuevo pedido +
          </button>
          <button
            @click="this.cerrarSesion"
            class="button is-danger is-pulled-right"
          >
            Cerrar sesión
          </button>
        </div>
        <TablePedidos ref="tabla" />
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
              <div
                v-for="elem in this.opciones"
                :key="elem.nombre"
                class="card"
              >
                <div class="card-content">
                  <div class="content">
                    <p>{{ elem.nombre }}</p>
                    <p>Precio: {{ elem.precio }}</p>
                    <button
                      class="button is-primary"
                      type="submit"
                      @click="this.setPedido(elem.id) && this.cerrar()"
                    >
                      Elegir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AsideMenuUser from "../components/AsideMenuUser.vue";
import TablePedidos from "../components/TablaPedidos.vue";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
const db = getFirestore();
const auth = getAuth();
export default {
  components: {
    AsideMenuUser,
    TablePedidos,
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
    cerrarSesion() {
      signOut(auth)
        .then(() => {
          alert("Cierre de sesión exitoso.");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async setPedido(id = "") {
      onAuthStateChanged(auth, async (user) => {
        this.cambios = null;
        if (user) {
          await addDoc(collection(db, "ordenes"), {
            usuario: user.uid,
            paquete: id,
            fecha: new Date(),
            estado: "En proceso",
          });
          await this.$refs.tabla.actualizar();
        } else {
          this.$router.push("/");
          this.actualiza = false;
        }
      });
    },
  },

  async mounted() {
    const paquetesRef = collection(db, "paquetes");
    const querySnapshot = await getDocs(paquetesRef);
    querySnapshot.forEach((doc) => {
      let tipo = doc.data();
      tipo = { ...tipo, id: doc.id };
      this.opciones.push(tipo);
    });
  },
};
</script>


