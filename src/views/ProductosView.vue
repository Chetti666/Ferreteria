<template>
  <v-app>
    <!-- Navbar -->
    <NavbarComp />

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <h2 class="text-center mb-5">Listado de Productos</h2>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id">
            <v-card class="product-card" outlined>
              <v-card-title class="text-h6">{{ product.nombre }}</v-card-title>
              <v-card-subtitle>{{ product.categoria }}</v-card-subtitle>
              <v-card-text class="pa-2">
                <p>{{ product.descripcion }}</p>
                <p><strong>Precio:</strong> ${{ product.precio }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  :to="{ name: 'producto', params: { id: product.id } }"
                >
                  Ver Detalles
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-btn to="/" color="secondary" class="mt-5">
          Regresar al Home
        </v-btn>
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
  name: "ProductosView",
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json"
      );
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      this.products = data.productos;
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  },
};
</script>

<style scoped>
.product-card {
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #e3f2fd; /* Color de fondo suave para las tarjetas */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.v-card-title, .v-card-subtitle {
  font-weight: bold;
  color: #1565C0; /* Color del título */
}

.v-card-text p {
  font-size: 0.9rem;
  color: #333;
}

.v-card-actions {
  padding: 10px;
}

.v-btn {
  font-weight: bold;
}
</style>
