<template>
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
  </div>
</template>

<script>
export default {};
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