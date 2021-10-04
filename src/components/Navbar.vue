<template>
  <div id="header">
    <nav>
      <div class="logo">
        <img src="../assets/planchartLogo.png" style="width: inherit" />
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#sobre">Nosotros</a></li>
        <li><a href="#galeria">Precios</a></li>
        <li><a href="#contacto" class="menuContacto">Contacto</a></li>
        <li><router-link to="/registro">Login</router-link></li>
      </ul>
    </nav>
  </div>
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