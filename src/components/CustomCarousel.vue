<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in 10" :key="slide">
      <img alt="" class="destination__image" src="/Images/hero-bg.webp" />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import "vue3-carousel/carousel.css";
import { Carousel, Pagination, Slide } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  mouseWheel: true,
};
</script>

<style scoped>
.carousel {
  --vc-pgn-background-color: var(--white);
  --vc-pgn-active-color: var(--orange);
  --vc-pgn-border-radius: 0.3rem;
  --vc-pgn-height: 0.5rem;
  --vc-pgn-width: 1rem;
}

.destination__image {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
  border-radius: 2rem;
  object-position: bottom;
}

@media (min-width: 600px) {
  .destination__image {
    height: 50rem;
  }
}
</style>
