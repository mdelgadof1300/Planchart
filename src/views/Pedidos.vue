<template>
  <section class="main-content columns is-fullheight">
    <AsideMenuAdmin />
    <div class="container column is-10">
      <div class="section">
        <h1 class="title is-1">Pedidos del día</h1>
        <TablaPedidosAdmin />
      </div>
    </div>
  </section>
</template>

<script>
import AsideMenuAdmin from "../components/AsideMenuAdmin.vue";
import TablaPedidosAdmin from "../components/TablaPedidosAdmin.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();
export default {
  components: {
    AsideMenuAdmin,
    TablaPedidosAdmin,
  },
  data() {
    return {
      usuarios: [],
    };
  },
  async mounted() {
    const citiesRef = collection(db, "usuarios");
    const querySnapshot = await getDocs(citiesRef);
    querySnapshot.forEach((doc) => {
      this.usuarios.push(doc.data());
    });
    console.log(this.usuarios.length);
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
};
</script>

<style>
.container {
  margin-right: 20px;
}
</style>