<template>
  <v-app-bar color="darkseagreen" dense>
    <!-- Menú hamburguesa que controla el drawer -->
    <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <!-- Logo y Título -->
    <span class="mdi mdi-screw-flat-top mr-3" style="font-size: 48px;"></span>
    <v-toolbar-title class="white--text">El Tornillo Perdido</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Botones de navegación (visibles en escritorio) -->
    <v-btn text to="/" class="white--text d-none d-md-flex">Home</v-btn>
    <v-btn text to="/productos" class="white--text d-none d-md-flex">Productos</v-btn>
    <v-btn text to="/proveedores" class="white--text d-none d-md-flex" v-if="isLoggedIn()">Proveedores</v-btn>
    <v-btn text to="/login" class="white--text d-none d-md-flex" v-if="!isLoggedIn()">Iniciar Sesión</v-btn>
    <v-btn text @click="logout" class="white--text d-none d-md-flex" v-if="isLoggedIn()">Cerrar Sesión</v-btn>
  </v-app-bar>

  <!-- Menú lateral (Drawer) -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item @click="$router.push('/')" title="Home"></v-list-item>
      <v-list-item @click="$router.push('/productos')" title="Productos"></v-list-item>
      <v-list-item @click="$router.push('/proveedores')" title="Proveedores" v-if="isLoggedIn()"></v-list-item>
      <v-list-item @click="$router.push('/login')" title="Iniciar Sesión" v-if="!isLoggedIn()"></v-list-item>
      <v-list-item @click="logout" title="Cerrar Sesión" v-if="isLoggedIn()"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

---


<script>
export default {
  name: "NavbarComp",
  data() {
    return {
      drawer: false, // Controla el estado del menú lateral
    };
  },
  methods: {
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.v-app-bar {
  background-image: linear-gradient(45deg, #0D47A1, #1565C0); /* Degradado azul oscuro */
}

.v-btn {
  margin-left: 10px;
}

.v-toolbar-title {
  color: white;
}
</style>
