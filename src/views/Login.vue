
<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form @submit="iniciarSession" class="box">
              <div class="field">
                <label for="" class="label">Correo</label>
                <div class="control has-icons-left">
                  <input
                    type="email"
                    placeholder="Escribe tu correo..."
                    class="input"
                    required
                    v-model="email"
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Contraseña</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="Escribe tu contraseña..."
                    class="input"
                    required
                    v-model="contraseña"
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Recordarme
                </label>
              </div>
              <div class="field">
                <button class="button is-success">Ingresar</button>
                <hr />
                <button class="button is-info">
                  <a href="registro"> Regístrate</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default {
  data() {
    return {
      email: "",
      contraseña: "",
    };
  },
  methods: {
    iniciarSession(e) {
      e.preventDefault();
      signInWithEmailAndPassword(auth, this.email, this.contraseña)
        .then(async (userCredential) => {
          let token = await userCredential.user.getIdToken();
          localStorage.setItem("token", token);
          alert("Inicio de sesion correcto");
          this.$router.push("DashboardUser");
        })
        .catch((e) => {
          alert(
            "Tu contraseña es erronea o el correo no ha sido registrado previamente."
          );
        });
    },
  },
  async beforeMount() {},
};
</script>

