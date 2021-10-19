<template>
  <div class="formulario">
    <form @submit="crear">
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
        <label class="label">Teléfono</label>
        <div class="control">
          <input
            v-model="contraseña"
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
          <input
            v-model="direccion"
            class="input"
            type="text"
            placeholder="Dirección completa"
          />
        </div>
      </div>
      <button class="button is-primary">Registrarse</button>
    </form>
  </div>
</template>

<script>
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
      if (this.validar()) console.log(this.email, this.contraseña);
    },
    validar() {
      if (
        !(
          this.email &&
          this.contraseña &&
          this.nombre &&
          this.telefono &&
          this.direccion
        )
      ) {
        alert("Campos obligatorios");
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
.formulario {
  margin: 500px, 500px;
}
</style>