<template>
  <aside
    class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
  >
    <p class="menu-label is-hidden-touch">Menu</p>
    <ul class="menu-list">
      <li>
        <router-link to="/dashboard">
          <a href="#" class="is-active">
            <span class="icon"><i class="fa fa-table"></i></span> Usuarios
            registrados
          </a>
        </router-link>
        <router-link to="/pedidos">
          <a href="#" class="is-active">
            <span class="icon"><i class="fa fa-book"></i></span> Pedidos de hoy
          </a>
        </router-link>
        <router-link to="/perfil">
          <a href="#" class="is-active">
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
export default {};
</script>

<style>
.menu {
  position: fixed;
  width: 15%;
  height: 100%;
  background: #25502454;
}
</style>