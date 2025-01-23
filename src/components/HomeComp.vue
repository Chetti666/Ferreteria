<template>
  <div>
    <!-- Encabezado -->
    <v-container>
      <v-row justify="center" class="mt-5">
        <v-col cols="12" class="text-center">
          <v-card class="pa-5 rounded-lg" elevation="6" color="primary">
            <v-row align="center" justify="center">
              <v-col cols="auto">
                <v-icon size="80" color="white">mdi-screw-flat-top</v-icon>
              </v-col>
              <v-col cols="auto">
                <h1 class="white--text font-weight-bold">Ferretería El Tornillo Perdido</h1>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Promociones Destacadas -->
    <v-container>
      <v-card class="mx-auto rounded-lg mt-5" outlined>
        <v-card-title class="text-h5 font-weight-bold">Promociones Destacadas</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="4" v-for="(promocion, index) in promociones" :key="index">
              <v-card class="mx-auto rounded-lg" color="secondary" dark>
                <v-card-title>{{ index === 0 ? 'Promoción 1' : index === 1 ? 'Promoción 2' : 'Promoción 3' }}</v-card-title>
                <v-card-subtitle>{{ promocion.descripcion }}</v-card-subtitle>
                <v-card-text>
                  Fecha de inicio: {{ promocion.fechaInicio }}<br>
                  Fecha de fin: {{ promocion.fechaFin }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="white" text>Ver Promoción</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>

    <!-- Secciones Destacadas -->
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12" md="4" v-for="section in secciones" :key="section.title">
          <v-card class="text-center pa-5 rounded-lg" outlined>
            <v-icon size="64" color="primary">{{ section.icon }}</v-icon>
            <h3 class="mt-3">{{ section.title }}</h3>
            <p>{{ section.description }}</p>
            <v-btn :color="section.color" :to="section.link"> {{ section.btnText }} </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      promociones: [],
      error: null, // Agregar manejo de errores
      secciones: [
        { title: "Productos Populares", icon: "mdi-tools", description: "Descubre nuestras herramientas más vendidas.", link: "/productos", btnText: "Ver Productos", color: "primary" },
        { title: "Ofertas", icon: "mdi-sale", description: "Aprovecha nuestras promociones exclusivas.", link: "/ofertas", btnText: "Ver Ofertas", color: "primary" },
        { title: "Contactos", icon: "mdi-phone", description: "Estamos aquí para ayudarte. ¡Contáctanos!", link: "/contacto", btnText: "Contactar", color: "primary" }
      ]
    };
  },
  mounted() {
    this.fetchHomeData();
  },
  methods: {
    async fetchHomeData() {
      try {
        const response = await fetch("https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json");
        const data = await response.json();
        this.promociones = data.paginaHome.promocionesActuales;

        // Agregar una nueva promoción
        this.promociones.push({
          descripcion: "Promoción Especial: 20% de descuento en herramientas seleccionadas.",
          fechaInicio: "2023-10-01",
          fechaFin: "2023-10-31"
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
  }
};
</script>

<style scoped>
.v-card {
  transition: transform 0.3s ease-in-out;
}

.v-card:hover {
  transform: scale(1.03);
}
</style>
