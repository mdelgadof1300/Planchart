<template>
  <div class="contacto">
    <h1 id="contacto">Contacto</h1>
    <h2>
      <p>
        <unicon name="location-point" fill="white" /> Tecpanecas #134 Mza 327.
        Lte. 8 Ecatepec de Morelos
      </p>
      <p><unicon name="whatsapp" fill="white" /> 5576270580</p>
      <p><unicon name="envelope" fill="white" /> planchartgroup@gmail.com</p>
      <p>
        <unicon name="clock" fill="white" /> Horario de atención: Lunes a
        sábado, de 09:00 a 19:00 hrs
      </p>
    </h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.983610588969!2d-99.02824768509157!3d19.542317186822075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f00faf4a9455%3A0x8a5d9c9626611740!2sC.%20Tepanecas%20134%2C%20Cd%20Azteca%201ra%20Secc%2C%2055120%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1632592158323!5m2!1ses!2smx"
      width="600"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contacto {
  margin: 0;
  width: 100%;
  position: relative;
  float: left;
  border-style: solid;
  border-top: 1;
  border-right: 0;
  border-left: 0;
  border-bottom: 0;
  border-color: saddlebrown;
  background-color: #5c7aea;
  color: #e6e6e6;
}

.icones {
  margin: 0;
  width: 2%;
  padding-left: 15%;
  float: left;
  position: relative;
}

.contacto h1 {
  margin: 0;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1%;
  font-family: "Sansita Swashed", cursive;
  font-weight: 100;
  font-size: 40px;
}

.contacto h2 {
  margin: 0;
  width: 45%;
  padding-bottom: 1%;
  font-weight: 100;
  font-size: 20px;
  font-family: "Josefin Slab", serif;
  position: relative;
  float: left;
}

.contacto p {
  margin-top: 10px;
  margin-bottom: 10px;
}

.contacto p {
  margin: 0;
  padding-left: 10%;
  padding-bottom: 5%;
  width: auto;
  color: #e6e6e6;
}

.mapa {
  margin: 0;
  padding-bottom: 5%;
  padding-left: 2%;
  position: relative;
  float: left;
}
</style>