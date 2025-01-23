<template>
  <v-footer color="transparent" padless>
    <v-container>
      <v-row justify="center">
        <!-- Redes Sociales -->
        <v-col cols="12" md="6" class="text-md-start">
          <h4 class="mb-4">Redes Sociales</h4>
          <v-list dense color="transparent">
            <v-list-item
              v-for="(social, key) in redesSociales"
              :key="key"
              :href="social.url"
              target="_blank"
              class="px-0"
              :aria-label="'Visitar ' + social.nombre"
            >
              <v-list-item-icon>
                <v-icon>{{ social.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ social.nombre }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Información de contacto -->
        <v-col cols="12" md="6" class="text-md-start">
          <h4 class="mb-4">Información de Contacto</h4>
          <v-list dense color="transparent">
            <v-list-item>
              <v-list-item-title>Email: {{ informacionContacto.correoElectronico }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Teléfono: {{ informacionContacto.telefono }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Dirección: {{ informacionContacto.direccion }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Derechos reservados -->
      <v-row justify="center" class="mt-4">
        <v-col cols="12" class="text-center">
          <p class="mb-0">
            &copy; {{ new Date().getFullYear() }} Ferretería. Todos los derechos reservados.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComp",
  props: {
    redesSociales: {
      type: Object,
      default: () => ({
        facebook: { nombre: "Facebook", url: "https://www.facebook.com/herramientasysoluciones", icon: "mdi-facebook" },
        instagram: { nombre: "Instagram", url: "https://instagram.com/herramientasysoluciones", icon: "mdi-instagram" },
        twitter: { nombre: "Twitter", url: "https://twitter.com/herrsoluciones", icon: "mdi-twitter" },
      }),
    },
    informacionContacto: {
      type: Object,
      default: () => ({
        correoElectronico: "contacto@ferreteria.com",
        telefono: "+56 9 1234 5678",
        direccion: "Av. Principal 123, Santiago, Chile",
      }),
    },
  },
};
</script>

<style scoped>
.v-footer {
  background-image: linear-gradient(45deg, #2196F3, #0c355e);

  color: white;
}

.v-list-item-icon {
  margin-right: 12px;
}

h4 {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}

.v-list-item-title, .v-list-item {
  font-size: 1rem;
  color: white; /* Asegurar que el texto sea blanco */
}

.v-list {
  background-color: transparent !important; /* Eliminar el fondo blanco */
}
</style>
