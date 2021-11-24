<template>
  <aside
    class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
  >
    <p class="menu-label is-hidden-touch">Usuario</p>
    <ul class="menu-list">
      <li>
        <router-link to="/dashboarduser">
          <a href="#" :class="ruta === 'DashboardUser' ? 'is-active' : ''">
            <span class="icon"><i class="fa fa-table"></i></span> Mis pedidos
          </a></router-link
        >
      </li>
      <li>
        <router-link to="/perfil">
          <a href="#" :class="ruta === 'Perfil' ? 'is-active' : ''">
            <span class="icon"><i class="fa fa-user"></i></span> Perfil
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/salir">
          <a href="#" class="is-active">
            <span class="icon"><i class="fa fa-sign-out"></i></span> Salir
          </a>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      ruta: this.$router.currentRoute.value.name,
    };
  },
};
</script>

<style>
</style>