<template>
  <div>
    <NavbarComp />
    <main>
      <slot />
    </main>
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "Layout",
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>