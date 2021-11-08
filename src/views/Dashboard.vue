<template>
  <section class="main-content columns is-fullheight">
    <AsideMenuAdmin />
    <div class="container column is-10">
      <div class="section">
        <h1 class="title is-1">Clientes registrados</h1>
        <table class="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr class="th is-selected">
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="elem in this.usuarios" :key="elem.correo">
              <td>{{ elem.nombre }}</td>
              <td>{{ elem.email }}</td>
              <td>{{ elem.telefono }}</td>
              <td>{{ elem.direccion }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import AsideMenuAdmin from "../components/AsideMenuAdmin.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();
export default {
  components: {
    AsideMenuAdmin,
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
};
</script>

<style>
.container {
  margin-right: 20px;
}
</style>