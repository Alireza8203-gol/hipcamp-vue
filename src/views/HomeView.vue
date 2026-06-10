<template>
  <Hero />
  <main class="main">
    <div class="container">
      <ServicesSection />
      <DestinationsSection :number-of-destinations="12" />
      <NewsletterSection />
    </div>
  </main>
</template>

<script lang="ts" setup>
import Hero from "@/components/Hero.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import NewsletterSection from "@/components/NewsletterSection.vue";
import DestinationsSection from "@/components/DestinationsSection.vue";
</script>

<style scoped></style>
