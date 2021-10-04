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
          background-image: url('https://chontalpa.tecnm.mx/img/web-pc%20-%20copia.jpg');
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#container-slider {
  position: relative;
  display: block;
  width: 100%;
  z-index: 0;
}
#slider {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  min-height: 500px;
}
#slider li {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  display: block;
  -webkit-transition: opacity 1s;
  -moz-transition: opacity 1s;
  -ms-transition: opacity 1s;
  -o-transition: opacity 1s;
  transition: opacity 1s;
  z-index: -1;
  opacity: 0;
}
#container-slider .arrowPrev,
#container-slider .arrowNext {
  font-size: 30pt;
  color: rgba(204, 204, 204, 0.65);
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50px;
  z-index: 2;
}
#container-slider .arrowNext {
  left: initial;
  right: 50px !important;
}
.content_slider {
  padding: 15px 30px;
  color: #fff;
  width: 100%;
  height: 100%;
}
.content_slider div {
  text-align: center;
}
.content_slider h2 {
  font-family: "arial";
  font-size: 50pt;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.content_slider p {
  font-size: 30pt;
  font-family: "arial";
  color: #fff;
  margin-bottom: 20px;
}
#slider li .content_slider {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 125px;
}
.content_slider {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnSlider {
  color: #fff;
  font-size: 15pt;
  font-family: "arial";
  letter-spacing: 1px;
  padding: 10px 50px;
  border: 1px solid #ccc;
  background: rgba(13, 13, 13, 0.55);
  border-radius: 31px;
  text-decoration: none;
  transition: 0.5s all;
}
.btnSlider:hover {
  background: #111;
  border: 1px solid #111;
}
.listslider {
  position: absolute;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  bottom: 5%;
  list-style: none;
  z-index: 2;
  transform: translateX(-50%);
}
.listslider li {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin: 0 5px;
}
.listslider li a {
  background: #ccc;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: block;
}
.item-select-slid {
  background: #fff !important;
}

@media screen and (max-width: 460px) {
  .content_slider h2 {
    font-size: 15pt !important;
  }
  .content_slider p {
    font-size: 12pt !important;
  }
  #container-slider .arrowPrev,
  #container-slider .arrowNext {
    font-size: 20pt;
  }
  #container-slider .arrowPrev {
    left: 15px;
  }
  #container-slider .arrowNext {
    right: 15px !important;
  }
  #slider {
    height: 400px;
    min-height: 400px;
  }
  #slider li .content_slider {
    padding: 10px 35px;
  }
  .btnSlider {
    padding: 10px 30px;
    font-size: 10pt;
  }
}
</style>