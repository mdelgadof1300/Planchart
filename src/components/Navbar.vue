<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="../assets/planchartLogo.png" width="50" />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#"> Inicio </a>
        <a class="navbar-item" href="#sobre"> Nosotros </a>
        <a class="navbar-item" href="#galeria"> Precios </a>
        <a class="navbar-item" href="#contacto"> Contacto </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
              <router-link to="/registro">Registro</router-link>
            </a>
            <a class="button is-link">
              <router-link to="/login">Ingreso</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style>
.logo {
  margin: 0;
  z-index: 1;
  width: 38% !important;
  padding: 1%;
  word-spacing: 15px;
  position: relative;
  float: right;
  text-align: left;
  font-family: "Sansita Swashed", cursive;
}
nav {
  margin: 0;
  z-index: 1;
  width: 100%;
  padding: 1%;
  word-spacing: 15px;
  position: relative;
  float: left;
  font-family: "Sansita Swashed", cursive;
  text-indent: ce;
}

nav a {
  color: rgb(71, 206, 30);
}

nav {
  display: flex;
  justify-content: space-between;
}

nav ul {
  margin-top: 35px;
  width: 45%;
  list-style: none;
}

nav ul li {
  float: left;
  position: relative;
  padding: 1%;
}

nav ul li a {
  display: inline-block;
  text-decoration: none;
  text-align: right;
  background-color: none;
  font-size: 150%;
}
</style>