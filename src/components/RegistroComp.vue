<template>
  <v-container fluid fill-height class="d-flex justify-center align-center" style="border-radius: 10px;" min-width="350px">
    <!-- Eliminar v-col y permitir que la tarjeta se expanda -->
    <v-row justify="center">
      <v-card class="pa-6" outlined min-width="300px">
        <!-- Logo -->
        <v-row justify="center">
          <v-col cols="auto">
            <span class="mdi mdi-screw-flat-top" style="font-size: 64px; color: #1565C0;"></span>
          </v-col>
        </v-row>

        <!-- Formulario de Registro -->
        <v-form @submit.prevent="register">
          <v-text-field v-model="name" label="Nombre" required placeholder="Ingrese su Nombre" outlined dense></v-text-field>
          <v-text-field v-model="email" label="Email" type="email" required placeholder="Ingrese su email" outlined dense></v-text-field>
          <v-text-field v-model="phone" label="Teléfono" required placeholder="Ingrese su teléfono" outlined dense></v-text-field>
          <v-text-field v-model="password" label="Contraseña" type="password" required placeholder="Ingrese su contraseña" outlined dense></v-text-field>
          <v-text-field v-model="confirmPassword" label="Repetir Contraseña" type="password" required placeholder="Repita su contraseña" outlined dense></v-text-field>

          <v-btn type="submit" color="primary" block class="mb-4">Registrarme</v-btn>

          <v-divider></v-divider>

          <p>¿Ya tienes cuenta? <router-link to="/login">Inicia Sesión</router-link></p>

          <v-btn to="/" color="secondary" text block class="mt-4">Regresar al Home</v-btn>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroreq.json"
        );
        const data = await response.json();

        if (data.registroUsuario) {
          this.$router.push("/confirmacion");
        }
      } catch (error) {
        console.error("Error durante el registro:", error);
        alert("Error al registrar el usuario. Intente nuevamente.");
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
