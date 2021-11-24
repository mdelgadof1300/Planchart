<template>
  <table class="table is-bordered is-striped is-fullwidth">
    <tr class="th is-selected">
      <th>Pedido</th>
      <th>Fecha</th>
      <th>Total</th>
    </tr>
    <tr v-for="pedido in this.misPedidos" :key="pedido.id">
      <td>{{ this.getNombrePaquete(pedido.paquete) }}</td>
      <td>{{ pedido.fecha.toDate().toISOString().split("T")[0] }}</td>
      <td>{{ `$${this.getPrecioPäquete(pedido.paquete)}` }}</td>
    </tr>
  </table>
</template>

<script>
import AsideMenuUser from "../components/AsideMenuUser.vue";
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
  },
  data() {
    return {
      opciones: [],
      misPedidos: [],
    };
  },
  methods: {
    getNombrePaquete(id) {
      let paquete = this.opciones.filter((elem) => id === elem.id);
      return paquete[0].nombre;
    },
    getPrecioPäquete(id) {
      let paquete = this.opciones.filter((elem) => id === elem.id);
      return paquete[0].precio;
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
    async setPedido(id = 5) {
      onAuthStateChanged(auth, async (user) => {
        this.cambios = null;
        if (user) {
          await addDoc(collection(db, "ordenes"), {
            usuario: user.uid,
            paquete: id,
            fecha: new Date(),
          });
        } else {
          this.$router.push("/");
          this.actualiza = false;
        }
      });
    },
    async actualizar() {
      onAuthStateChanged(auth, async (user) => {
        this.misPedidos = [];
        this.cambios = null;
        if (user) {
          const ordenesRef = collection(db, "ordenes");
          const q = query(ordenesRef, where("usuario", "==", user.uid));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            let tipo = doc.data();
            tipo = { ...tipo, id: doc.id };
            this.misPedidos.push(tipo);
          });
        } else {
          this.$router.push("/");
          this.actualiza = false;
        }
      });
    },
  },

  async mounted() {
    this.actualizar();
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
