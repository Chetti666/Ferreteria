<template>
  <LayouT>
  <v-container class="login-container">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <LoginComp />
      </v-col>
    </v-row>
  </v-container>
  </LayouT>
</template>

<script>
import LayouT from '@/components/LayouT.vue'
import LoginComp from "@/components/LoginComp.vue";

export default {
  name: "LoginView",
  components: {
    LoginComp,
    LayouT,
  },
};
</script>

<style scoped>
.login-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>