<template>
  <LayouT>
    <div>
      <!-- Encabezado similar al de HomeComp -->
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

      <!-- Detalle Producto -->
      <v-container>
        <h1 class="display-2 text-center mb-3">Detalle Producto</h1>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card v-if="product" class="elevation-12" max-width="100%" style="padding: 0;">
              
              <v-card-title class="pa-2" style="margin-top: 0; font-size: 1.5rem; padding: 8px 16px;">
                {{ product.nombre }}
              </v-card-title>
              <v-card-subtitle class="pa-2" style="margin-top: 0; padding: 8px 16px;">
                {{ product.categoria }}
              </v-card-subtitle>
              <v-card-text style="padding: 12px;">
                <p>{{ product.descripcion }}</p>
                <p><strong>Precio:</strong> {{ product.precio }}</p>
                <p><strong>Stock:</strong> {{ product.stock }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn to="/productos" color="secondary">Regresar al listado de productos</v-btn>
              </v-card-actions>
            </v-card>

            <!-- Error o Producto no encontrado -->
            <v-card v-else>
              <v-card-title class="text-center">No se encontró el producto</v-card-title>
              <v-card-text class="text-center">Lo sentimos, no pudimos encontrar el producto solicitado.</v-card-text>
              <v-card-actions class="justify-center">
                <v-btn to="/productos" color="primary">Volver al listado</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </LayouT>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import LayouT from "./LayouT.vue";

export default {
  name: "ProductosComp",
  components: { LayouT },
  setup() {
    const product = ref(null);
    const error = ref(null);
    const route = useRoute();

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json"
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        const productId = parseInt(route.params.id);
        if (isNaN(productId)) {
          throw new Error("ID de producto inválido");
        }
        product.value = data.productos.find((p) => p.id === productId);
        if (!product.value) {
          throw new Error("Producto no encontrado");
        }
      } catch (err) {
        error.value = err.message;
      }
    };

    watch(route, () => {
      fetchProduct();
    });

    onMounted(() => {
      fetchProduct();
    });

    return { product, error };
  },
};
</script>

<style scoped>
.v-card {
  margin: 10px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}



.v-btn {
  font-weight: bold;
}

h1, .v-card-title {
  color: #1565C0; /* Color del título */
}

.v-card-title, .v-card-subtitle {
  margin-top: 0 !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}

.v-card-text {
  padding: 16px;
}

.v-card-actions {
  padding: 10px 16px;
}
</style>
