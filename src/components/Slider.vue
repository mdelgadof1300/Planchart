<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <section id="container-slider">
    <a @click="fntExecuteSlide('prev')" class="arrowPrev"
      ><i class="fas fa-chevron-circle-left"></i
    ></a>
    <a @click="fntExecuteSlide('next')" class="arrowNext"
      ><i class="fas fa-chevron-circle-right"></i
    ></a>
    <ul class="listslider">
      <li>
        <a
          @click="this.accionar"
          itlist="itList_0"
          class="item-select-slid"
        ></a>
      </li>
      <li><a @click="this.accionar" itlist="itList_1"></a></li>
      <li><a @click="this.accionar" itlist="itList_2"></a></li>
      <li><a @click="this.accionar" itlist="itList_3"></a></li>
    </ul>
    <ul id="slider">
      <li
        style="
          background-image: url('https://blog.flota.es/wp-content/uploads/2016/06/guia-basica-planchado-ropa.jpg')
          z-index: 0;
          opacity: 1;
        "
      >
        <div class="content_slider">
          <div>
            <h2>Planchart</h2>
            <p>El arte de planchar.</p>
          </div>
        </div>
      </li>
      <li
        style="
          background-image: url('https://www.65ymas.com/uploads/s1/89/19/3/bigstock-electric-iron-and-pile-of-clot-181401475.jpeg');
        "
      >
        <div class="content_slider">
          <div>
            <h2>Empresa 100% Mexicana</h2>
            <p>Y tú, ¿Ya te liberaste de planchar?</p>
            <p>Vamos desde Coacalco hasta Aragón por tu ropa.</p>
          </div>
        </div>
      </li>
      <li
        style="
          background-image: url('https://blog.flota.es/wp-content/uploads/2017/03/consejos-planchar-ropa-algodon.jpg');
        "
      >
        <div class="content_slider">
          <div>
            <h2>Planchamos por ti en 4 pasos</h2>
            <p>1.- Junta tu ropa</p>
            <p>2.- Llámanos</p>
            <p>3.- Vamos por tu ropa</p>
            <p>4.- Recíbela en máximo 24 horas</p>
          </div>
        </div>
      </li>
      <li
        style="
          background-image: url('https://lh3.googleusercontent.com/proxy/Hlptv1Sln-1hJ9icTC9t0GzdNcBnss0lrs9zne_yrEV-mWAUzKOudaRaJ8R8K8UrPKRQxvepdyKIbV5jdrwSNDdxjXq293mju6ciUG5r-HieTP4mNTMsSw');
        "
      >
        <div class="content_slider">
          <div>
            <h2>Espera próximamente:</h2>
            <p>Solicitar tus pedidos en línea</p>
            <p>y un sistema de puntos de plataforma</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    fntExecuteSlide(side) {
      let parentTarget = document.getElementById("slider");
      let elements = parentTarget.getElementsByTagName("li");
      let curElement, nextElement;
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.opacity == 1) {
          curElement = i;
          break;
        }
      }
      if (side == "prev" || side == "next") {
        if (side == "prev") {
          nextElement = curElement == 0 ? elements.length - 1 : curElement - 1;
        } else {
          nextElement = curElement == elements.length - 1 ? 0 : curElement + 1;
        }
      } else {
        nextElement = side;
        side = curElement > nextElement ? "prev" : "next";
      }
      //RESALTA LOS PUNTOS
      let elementSel = document
        .getElementsByClassName("listslider")[0]
        .getElementsByTagName("a");
      elementSel[curElement].classList.remove("item-select-slid");
      elementSel[nextElement].classList.add("item-select-slid");
      elements[curElement].style.opacity = 0;
      elements[nextElement].style.opacity = 1;
    },
    accionar(e) {
      e.preventDefault();
      let item = e.target.getAttribute("itlist");
      let arrItem = item.split("_");
      this.fntExecuteSlide(arrItem[1]);
      return false;
    },
  },
  mounted() {
    if (document.querySelector("#container-slider")) {
      setInterval(() => {
        this.fntExecuteSlide("next");
      }, 5000);
    }
  },
};
</script>

<style scoped>
@import url("../styles/estilos.css");
</style>
