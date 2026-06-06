<template>
  <Hero />
  <main class="main">
    <div class="container">
      <ServicesSection />
      <DestinationsSection />
      <NewsletterSection />
    </div>
  </main>
</template>

<script lang="ts" setup>
import Hero from "@/components/Hero.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import DestinationsSection from "@/components/DestinationsSection.vue";
import NewsletterSection from "@/components/NewsletterSection.vue";
</script>

<style scoped></style>
