<template>
  <table class="table is-bordered is-striped is-fullwidth">
    <tr class="th is-selected">
      <th>Usuario</th>
      <th>Pedido</th>
      <th>Fecha</th>
      <th>Forma de pago</th>
      <th>Total</th>
      <th>Estado</th>
      <th></th>
    </tr>
    <tr v-for="pedido in this.misPedidos" :key="pedido.id">
      <td>{{ this.getUsuario(pedido.usuario) }}</td>
      <td>{{ this.getNombrePaquete(pedido.paquete) }}</td>
      <td>{{ pedido.fecha.toDate().toISOString().split("T")[0] }}</td>
      <td>Efectivo a contra-entrega</td>
      <td>{{ `$${this.getPrecioPäquete(pedido.paquete)}` }}</td>
      <td>{{ pedido.estado }}</td>
      <td>
        <button
          :disabled="pedido.estado === 'Entregado'"
          @click="this.entregado(pedido.id)"
          class="button is-primary"
        >
          Marcar como entregado
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import AsideMenuUser from "./AsideMenuUser.vue";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  addDoc,
  query,
  updateDoc,
  getDoc,
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
      usuarios: [],
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
    async entregado(id) {
      const docRef = doc(db, "ordenes", id);
      if (docRef) {
        await updateDoc(docRef, { estado: "Entregado" });
        await this.actualizar();
      }
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
          const q = query(ordenesRef);
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
    getUsuario(uid) {
      let usuario = this.usuarios.filter((user) => {
        console.log(user);
        return user.id === uid;
      });
      return usuario[0].nombre + `(${usuario[0].email})`;
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

    const citiesRef = collection(db, "usuarios");
    const querySnapshot2 = await getDocs(citiesRef);
    querySnapshot2.forEach((doc) => {
      let tipo = doc.data();
      tipo = { ...tipo, id: doc.id };
      this.usuarios.push(tipo);
    });
  },
};
</script>
