<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form @submit="crear" class="box">
              <div class="field">
                <label class="label">Nombre</label>
                <div class="control">
                  <input
                    v-model="nombre"
                    class="input"
                    type="text"
                    placeholder="Nombre completo..."
                    maxlength="30"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Correo</label>
                <div class="control">
                  <input
                    v-model="email"
                    class="input"
                    type="email"
                    placeholder="Correo..."
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Contraseña</label>
                <div class="control">
                  <input
                    v-model="contraseña"
                    class="input"
                    type="password"
                    placeholder="Contraseña..."
                    minlength="8"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Teléfono</label>
                <div class="control">
                  <input
                    v-model="telefono"
                    class="input"
                    type="number"
                    placeholder="Celular o fijo"
                    minlength="10"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Dirección</label>
                <div class="control">
                  <GMapAutocomplete
                    placeholder="Escribe tu dirección"
                    class="input"
                    @place_changed="cambio"
                  >
                  </GMapAutocomplete>
                </div>
              </div>
              <button class="button is-primary">Registrarse</button>
              <hr />
              <button class="button is-info">
                <a href="login">¿Ya tienes cuenta? Inicia sesión</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
const auth = getAuth();
const db = getFirestore();
import router from "../router";
export default {
  data() {
    return {
      email: "",
      contraseña: "",
      nombre: "",
      telefono: "",
      direccion: "",
    };
  },
  methods: {
    crear(e) {
      e.preventDefault();
      if (this.validar()) {
        createUserWithEmailAndPassword(auth, this.email, this.contraseña)
          .then(async (userCredential) => {
            await setDoc(doc(db, "usuarios", userCredential.user.uid), {
              telefono: this.telefono,
              direccion: this.direccion,
              nombre: this.nombre,
              email: this.email,
            });
            alert("Te has registrado exitosamente.");
<<<<<<< HEAD
            router.push("login");
=======
            router.push("Login");
>>>>>>> 02668438741ed21af430ec2b10c02d585eaa7e2d
          })
          .catch((error) => {
            console.log(error);
            alert("Correo registrado previamente o contraseña invalida.");
          });
      }
    },
    validar() {
      if (
        !(
          this.email.length &&
          this.contraseña.length &&
          this.nombre.length &&
          this.telefono &&
          this.direccion.length
        )
      ) {
        alert("Todos los campos obligatorios");
        return false;
      }
      return true;
    },
    cambio(e) {
      this.direccion = e.formatted_address;
    },
  },
};
</script>

<style>
.formulario {
  margin: 500px, 500px;
}
</style>