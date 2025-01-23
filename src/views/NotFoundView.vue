<template>
  <div class="not-found">
    <h1>Error 404: Página no encontrada</h1>
    <p>La página que estás buscando no existe o ha sido eliminada.</p>
    <v-btn to="/" color="primary">Regresar al inicio</v-btn>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 18px;
  color: #666;
}

.v-btn {
  margin-top: 20px;
}
</style>