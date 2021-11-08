<template>
  <AsideMenuUser />
  <section class="hero is-primary is-fullheight">
    <h1 class="title is-1">Mi perfil</h1>
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
                    maxlength="10"
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
              <button class="button is-link">Actualizar datos</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AsideMenuUser from "../components/AsideMenuUser.vue";
export default {
  components: {
    AsideMenuUser,
  },
  cambio(e) {
    this.direccion = e.formatted_address;
  },
};
</script>
<style scoped>
h1 {
  align-content: center;
}
</style>
