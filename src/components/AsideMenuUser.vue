<template>
  <aside
    class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
  >
    <p class="menu-label is-hidden-touch">Navigation</p>
    <ul class="menu-list">
      <li>
        <a href="#" class="">
          <span class="icon"><i class="fa fa-home"></i></span> Mis pedidos
        </a>
      </li>
      <li>
        <a href="#" class="is-active">
          <span class="icon"><i class="fa fa-table"></i></span> Mi perfil
        </a>
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