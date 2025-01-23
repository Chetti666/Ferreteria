<template>
  <v-container fluid fill-height class="d-flex justify-center align-center" style="border-radius: 10px; ">
    <v-card class="pa-6" min-width="250px" outlined>
      <!-- Logo -->
      <v-row justify="center">
        <v-col cols="auto">
          <span class="mdi mdi-screw-flat-top" style="font-size: 64px; color: #1565C0;"></span>
        </v-col>
      </v-row>

      <!-- Formulario de Login -->
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="email"
          label="Correo Electrónico"
          type="email"
          required
          placeholder="Ingrese su correo electrónico"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Contraseña"
          type="password"
          required
          placeholder="Ingrese su contraseña"
          outlined
          dense
        ></v-text-field>

        <v-btn type="submit" color="primary" block class="mb-4">
          Iniciar Sesión
        </v-btn>

        <v-divider></v-divider>

        <v-btn to="/registro" color="secondary" text block class="mt-4">
          Registrarse
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    },
    async login() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/login.json"
        );
        const data = await response.json();

        console.log("Datos recibidos:", data);

        if (data.login) {
          const { correoElectronico, contrasena } = data.login;

          if (
            this.email === correoElectronico &&
            this.password === contrasena
          ) {
            localStorage.setItem('token', 'logueado');
            if (this.isLoggedIn()) {
              console.log("Usuario logueado correctamente");
              this.$router.push("/proveedores");
            } else {
              console.log("Error al loguear al usuario");
            }
          } else {
            alert("Correo electrónico o contraseña incorrectos");
          }
        } else {
          alert("Error: Datos del usuario no encontrados");
        }
      } catch (error) {
        console.error("Error durante el login:", error);
        alert("Error al iniciar sesión. Intente nuevamente.");
      }
    },
  },
};
</script>

<style scoped>
.v-container {
  background: linear-gradient(45deg, #2196F3, #21CBF3);
}

.v-card {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.v-btn {
  font-weight: bold;
}

.mdi-screw-flat-top {
  color: #1565C0;
}
</style>
