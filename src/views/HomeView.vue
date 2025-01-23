<template>
  <v-app>
    <!-- Navbar -->
    <NavbarComp />

    <!-- Contenido principal -->
    <v-main>
      <HomeComp 
        :nombreFerreteria="nombreFerreteria" 
        :promocionDestacada="promocionDestacada" 
        heroImage="ruta/a/tu/imagen.jpg" 
      />
    </v-main>

    <!-- Footer -->
    <FooterComp 
      :redSocial="redSocial" 
      :informacion="informacion" 
    />
  </v-app>
</template>

<script>
import axios from "axios";
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import HomeComp from '@/components/HomeComp.vue';

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    FooterComp,
    HomeComp,
  },
  data() {
    return {
      paginaHomes: [], // Almacena los datos de la página de inicio
      promociones: [], // Almacena las promociones
      redSocial: {}, // Almacena las redes sociales
      informacion: {}, // Almacena la información de contacto
    };
  },
  computed: {
    // Obtiene el nombre de la ferretería
    nombreFerreteria() {
      return this.paginaHomes[0]?.nombre || "Ferretería";
    },
    // Obtiene la promoción destacada
    promocionDestacada() {
      return this.promociones[0] || { titulo: "Promoción Destacada", descripcion: "Descripción de la promoción" };
    },
  },
  methods: {
    // Obtiene los datos de la API
    async fetchHomeData() {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json"
        );
        const data = response.data.paginaHome;

        // Asigna los datos obtenidos
        this.paginaHomes = [{ nombre: data.nombre }];
        this.promociones = data.promocionesActuales;
        this.redSocial = data.informacionGeneral.redesSociales;
        this.informacion = {
          direccion: data.informacionGeneral.direccion,
          telefono: data.informacionGeneral.telefono,
          correoElectronico: data.informacionGeneral.correoElectronico,
        };
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
  },
  mounted() {
    this.fetchHomeData(); // Llama a la función para obtener los datos al montar el componente
  },
};
</script>

<style scoped>
.imagelogo {
  height: 50px;
  cursor: pointer;
}
</style>