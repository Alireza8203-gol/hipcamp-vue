<template>
  <section class="services">
    <ServiceCard
      v-for="service in services"
      :key="service.id"
      :service-info="service"
    />
  </section>
</template>

<script lang="ts" setup>
import ServiceCard from "@/components/ServiceCard.vue";

const services = [
  {
    id: 1,
    img: "fire",
    title: "Camping & Day Use",
    caption:
      "Return to your favorite spot or discover a new one that’s right for you.",
  },
  {
    id: 2,
    img: "tickets",
    title: "Tours & Tickets",
    caption: "Reserve tours and tickets to participate in events.",
  },
  {
    id: 3,
    img: "paper",
    title: "Permits",
    caption: "Obtain permits for access to high-demand locations.",
  },
  {
    id: 4,
    img: "fish",
    title: "Recreation Activities",
    caption:
      "Find the best spots for hunting, fishing & recreational shooting.",
  },
];
</script>

<style scoped>
.services {
  display: flex;
  flex-wrap: wrap;
  margin: -15rem -1.5rem 0;
}
</style>
