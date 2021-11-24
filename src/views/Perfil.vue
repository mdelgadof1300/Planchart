<template>
  <section class="main-content columns is-fullheight">
    <AsideMenuUser />
    <div class="container column is-10">
      <div class="section">
        <h1 class="title is-1">Mi perfil</h1>
        <div class="hero-body">
          <div class="container">
            <div class="columns has-text-left">
              <div class="column">
                <form class="box">
                  <div class="field">
                    <label class="label">Nombre</label>
                    <div class="control">
                      <input
                        v-model="usuario.nombre"
                        class="input"
                        type="text"
                        placeholder="Nombre..."
                        maxlength="30"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Correo</label>
                    <div class="control">
                      <input
                        v-model="usuario.email"
                        class="input"
                        type="email"
                        placeholder="Correo..."
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Teléfono</label>
                    <div class="control">
                      <input
                        v-model="usuario.telefono"
                        class="input"
                        type="number"
                        placeholder="Celular o fijo"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Dirección</label>
                    <div class="control">
                      <GMapAutocomplete
                        class="input"
                        @place_changed="cambio"
                        :placeholder="usuario.direccion"
                      >
                      </GMapAutocomplete>
                    </div>
                  </div>
                  <button
                    class="button is-link"
                    @click.prevent="actualizarDatos"
                    @click="this.aplicarCambios"
                  >
                    Actualizar datos
                  </button>
                </form>
                <article
                  v-if="cambios != null"
                  class="message"
                  :class="cambios ? 'is-success' : 'is-danger'"
                >
                  <div class="message-body">
                    {{
                      cambios
                        ? "Cambios aplicados"
                        : "Error al actualizar información"
                    }}
                  </div>
                </article>
              </div>
              <div class="column">
                <form class="box">
                  <div class="field">
                    <label class="label">Nueva contraseña</label>
                    <div class="control">
                      <input
                        v-model="contraseña.nueva"
                        class="input"
                        type="password"
                        placeholder="Contraseña..."
                        minlength="8"
                      />
                    </div>
                    <p
                      v-if="contraseña.nueva.length < 8"
                      class="help is-danger"
                    >
                      La contraseña debe tener minimo 8 caracteres.
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Confirmar nueva contraseña</label>
                    <div class="control">
                      <input
                        v-model="contraseña.nuevaConfirma"
                        class="input"
                        type="password"
                        placeholder="Contraseña..."
                        minlength="8"
                      />
                    </div>
                    <p
                      v-if="contraseña.nueva !== contraseña.nuevaConfirma"
                      class="help is-danger"
                    >
                      Las Contraseñas son distintas
                    </p>
                  </div>
                  <button
                    class="button is-link"
                    @click.prevent="actualizarDatos"
                    type="submit"
                    :disabled="
                      contraseña.nueva !== contraseña.nuevaConfirma ||
                      contraseña.nueva.length < 8
                    "
                    @click="this.actualizarContraseña()"
                  >
                    Actualizar contraseña
                  </button>
                </form>
                <article
                  v-if="actualiza != null"
                  class="message"
                  :class="actualiza ? 'is-success' : 'is-danger'"
                >
                  <div class="message-body">
                    {{
                      actualiza
                        ? "Contraseña actualizada"
                        : "Error al actualizar contraseña"
                    }}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AsideMenuUser from "../components/AsideMenuUser.vue";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();
export default {
  components: {
    AsideMenuUser,
  },
  data() {
    return {
      usuario: {
        email: "",
        nombre: "",
        telefono: "",
        direccion: "",
      },
      contraseña: {
        vieja: "",
        nueva: "",
        nuevaConfirma: "",
      },
      actualiza: null,
      cambios: null,
    };
  },
  methods: {
    async setDatos(id) {
      const docRef = doc(db, "usuarios", id);
      const docSnap = await getDoc(docRef);
      this.usuario = docSnap.data();
    },
    cambio(e) {
      this.usuario.direccion = e.formatted_address;
    },
    async aplicarCambios() {
      onAuthStateChanged(auth, async (user) => {
        this.cambios = null;
        if (user) {
          const docRef = doc(db, "usuarios", user.uid);
          await setDoc(docRef, this.usuario);
          this.cambios = true;
          this.setDatos(user.uid);
        } else {
          this.$router.push("/");
          this.actualiza = false;
        }
      });
    },
    actualizarContraseña() {
      onAuthStateChanged(auth, async (user) => {
        this.actualiza = null;
        if (user) {
          await updatePassword(user, this.contraseña.nueva);
          this.actualiza = true;
        } else {
          this.$router.push("/");
          this.actualiza = false;
        }
      });
    },
  },
  beforeMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.setDatos(user.uid);
      } else {
        this.$router.push("/");
      }
    });
  },
};
</script>
