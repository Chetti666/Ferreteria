<template>
  <LayouT>
  <v-container class="register-container">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <RegistroComp />
      </v-col>
    </v-row>
  </v-container>
  </LayouT>
</template>

<script>
import RegistroComp from "@/components/RegistroComp.vue";
import LayouT from "@/components/LayouT.vue";

export default {
  name: "RegistroView",
  components: {
    RegistroComp,
    LayouT,
  },
};
</script>

<style scoped>
.register-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>