<template>
  <div class="home">
    <Navbar />
    <Slider />
    <Precios />
    <Contacto />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Slider from "@/components/Slider.vue";
import Precios from "@/components/Precios.vue";
import Contacto from "@/components/Contacto.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Slider,
    Precios,
    Contacto,
    Footer,
  },
};
</script>
