<template>
  <v-app>
    <!-- Navbar -->
    <NavbarComp />

    <!-- Contenido principal -->
    <v-main>
      <v-container class="confirmation-container">
        <v-card class="pa-5 text-center">
          <v-icon size="64" color="success">mdi-check-circle</v-icon>
          <h2 class="mt-4">Confirmación de Registro</h2>
          <p class="mt-3">{{ message }}</p>
          <v-btn
            color="primary"
            to="/"
            class="mt-4"
          >
            Regresar al Home
          </v-btn>
        </v-card>
      </v-container>
    </v-main>

    <!-- Footer -->
    <FooterComp />
  </v-app>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "ConfirView",
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroresp.json"
      );
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      this.message = data.respuestaRegistro.mensaje;
    } catch (error) {
      console.error("Error al obtener el mensaje de confirmación:", error);
      this.message = "Hubo un error al procesar tu registro. Por favor, intenta nuevamente.";
    }
  },
};
</script>

<style scoped>
.confirmation-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.v-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
}

p {
  font-size: 1.1rem;
  color: #555;
}
</style>