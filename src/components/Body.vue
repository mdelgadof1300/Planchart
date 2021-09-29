<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br /><br />
  <br />
  <br />
  <div class="sobre">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Nanum+Brush+Script&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Sansita+Swashed:wght@300&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Josefin+Slab&family=Sansita+Swashed:wght@300&display=swap"
      rel="stylesheet"
    />
    <h1 id="sobre">Sobre nosotros</h1>
    <br />
    <h2>Simplificamos tu vida</h2>
    <br />
  </div>
  <Slider />
  <div class="galeria">
    <section class="layer plans">
      <h1 id="galeria">Paquetes</h1>
      <section>
        <section class="third lift plan-tier" onclick="location.href='#';">
          <h4>Individual</h4>
          <h5>
            <sup class="superscript">$</sup><span class="plan-price">12</span
            ><sub>MXN</sub>
          </h5>
          <ul>
            <li><strong>Por prenda</strong> a partir de 6 piezas</li>
            <li><strong>Recolecta y entrega</strong> sin costo extra.</li>
            <li><strong>Recolecta</strong> de 1 a 3 horas.</li>
            <li><strong>Entrega</strong> de 24 a 48 horas.</li>
            <li><strong>Equipo</strong> profesional.</li>
          </ul>
        </section>
        <section
          class="third lift plan-tier callout"
          onclick="location.href='#';"
        >
          <h6>Gran familia</h6>
          <h4>Oferta especial</h4>
          <h5>
            <sup class="superscript">$</sup><span class="plan-price">10</span
            ><sub>MXN</sub>
          </h5>

          <p class="early-adopter-price">Antes</p>
          <br />
          <del>$15MXN</del>

          <ul>
            <li><strong>Por prenda</strong> a partir de la séptima docena</li>
            <li><strong>Recolecta y entrega</strong> sin costo extra.</li>
            <li><strong>Recolecta</strong> de 1 a 3 horas.</li>
            <li><strong>Entrega</strong> de 24 a 48 horas.</li>
            <li><strong>Equipo</strong> profesional.</li>
            <li><strong>Portatrajes</strong> personalizado.</li>
          </ul>
        </section>

        <section class="third lift plan-tier" onclick="location.href='#';">
          <h4>Mini familia</h4>
          <h5>
            <sup class="superscript">$</sup><span class="plan-price">11</span
            ><sub>MXN</sub>
          </h5>

          <ul>
            <li><strong>Por prenda</strong> a partir de la cuarta docena</li>
            <li><strong>Recolecta y entrega</strong> sin costo extra.</li>
            <li><strong>Recolecta</strong> de 1 a 3 horas.</li>
            <li><strong>Entrega</strong> de 24 a 48 horas.</li>
            <li><strong>Equipo</strong> profesional.</li>
          </ul>
        </section>
        <div style="clear: both"></div>
      </section>
    </section>
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
  </div>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  components: {
    Slider,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: top;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body {
  font-family: "Source Sans Pro", "helvetica", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 16px;
  color: rgba(39, 65, 90, 1);
}

h1,
h2 {
  text-align: left;
}

h4 {
  margin-bottom: 12px;
  font-size: 1.25em;
  font-weight: 400;
  text-transform: uppercase;
}

h5 {
  font-size: 1.75em;
}

p {
  margin-top: 1em;
  margin-bottom: 1em;
  color: rgba(39, 65, 90, 0.9);
  font-size: 1.25em;
  line-height: 1.625em;
}

ol,
ul {
  list-style: none;
}

body {
  line-height: 1;
}

strong {
  color: rgba(39, 65, 90, 1);
  font-weight: 600;
}

.plans {
  background: #e7f2f0;
}

.layer {
  clear: both;
  width: 100%;
  height: auto;
  padding: 60px 7.5% 60px;
  display: block;
}

.layer > section,
.layer > article {
  clear: both;
  width: 100%;
  height: auto;
  max-width: 1092px;
  margin: 0 auto;
  display: block;
}

.third {
  width: 27.95%;
  margin: 0 30px 0 0;
  display: inline-block;
}

.plan-tier {
  background: white;
  vertical-align: baseline;
  border-radius: 3px;
  -moz-border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
}

.lift {
  position: relative;
  -webkit-transition: all 0.075s ease-out;
  -moz-transition: all 0.075s ease-out;
  -o-transition: all 0.075s ease-out;
  transition: all 0.075s ease-out;
}

.lift:hover {
  top: -3px;
  -webkit-box-shadow: 0 2px 6px rgba(39, 65, 90, 0.15);
  -moz-box-shadow: 0 2px 6px rgba(39, 65, 90, 0.15);
  box-shadow: 0 2px 6px rgba(39, 65, 90, 0.15);
}

.plan-tier h4 {
  padding: 18px 0 15px;
  margin: 0 0 30px;
  background: #00a1ff;
  color: white;
}

.plan-tier {
  cursor: pointer;
}

.plan-tier sup {
  position: relative;
  right: -9px;
}

.plan-tier ul {
  margin: 30px 0 0;
  border-top: 2px solid #e7f2f0;
}

.plan-tier ul li {
  font-size: 1.25em;
  padding: 18px 0;
  color: rgba(39, 65, 90, 0.9);
  border-bottom: 2px solid #e7f2f0;
}

sup {
  vertical-align: top;
}

.plan-tier .plan-price {
  font-size: 5em;
  font-weight: 300;
  letter-spacing: -3px;
}

.plan-tier sub {
  vertical-align: bottom;
  position: relative;
  bottom: 0.875em;
}

.plan-tier .early-adopter-price {
  color: #0091e5;
}
p:first-of-type {
  margin-top: 0;
}

small,
del {
  color: rgba(39, 65, 90, 0.5);
  font-size: 1em;
  line-height: 1.5em;
}

s,
strike,
del {
  text-decoration: line-through;
}

.layer {
  padding-top: 96px;
  padding-bottom: 96px;
}

.plan-tier.callout h6 {
  width: 100%;
  padding: 15px 0 14px;
  background: #8dcf3f;
  color: rgba(39, 65, 90, 0.5);
  font-size: 1.25em;
}

.plan-tier.callout h4 {
  background-color: #78b336;
}
</style>
