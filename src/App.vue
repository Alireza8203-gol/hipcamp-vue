<template>
  <Header />
  <RouterView v-slot="{ Component }">
    <Transition mode="out-in" name="page">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <Footer />
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.page-enter-active {
  transition: all 0.3s ease-out;
}
.page-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter-from,
.page-leave-to {
  transform: translateY(4rem);
  opacity: 0;
}
</style>
