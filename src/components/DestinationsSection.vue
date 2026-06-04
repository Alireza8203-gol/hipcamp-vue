<template>
  <section class="destinations">
    <img
      alt="destinations"
      class="destinations__logo"
      src="/Images/svgs/destination.svg"
    />
    <h2 class="destinations__title">Explore Destinations & Activities</h2>
    <div class="destinations__places">
      <DestinationCard
        v-for="place in visiblePlaces"
        :key="place.id"
        :place-info="place"
      />
    </div>
    <RouterLink class="destinations__btn btn" to="/destinations">
      View All
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { places } from "@/data/places.ts";
import DestinationCard from "@/components/DestinationCard.vue";

const sliceValue = 12;
const visiblePlaces = computed(() => {
  return places.slice(0, sliceValue);
});
</script>

<style scoped>
.destinations {
  padding: 8rem 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  color: var(--text--dark);
  font-family: var(--secondary-font), sans-serif;
}
.destinations::after,
.destinations::before {
  content: "";
  z-index: -1;
  width: 100rem;
  height: 100rem;
  position: absolute;
}
.destinations::before {
  top: auto;
  left: -70rem;
  bottom: 45rem;
  background: url(/Images/svgs/shape2.svg) 0 0 / contain no-repeat;
}
.destinations::after {
  top: -27rem;
  right: -53rem;
  background: url(/Images/svgs/shape1.svg) 0 0 / contain no-repeat;
}
.destinations__title {
  max-width: 30rem;
  margin: 3rem auto;
  font-size: 2.5rem;
  font-family: var(--secondary-font), sans-serif;
}
.destinations__places {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}
.destinations__btn {
  margin-top: 3rem;
  transition: 150ms;
  color: var(--orange);
  background-color: transparent;
  border: 1px solid var(--orange);
}
.destinations__btn:hover {
  transition: 150ms;
  color: var(--app-bg);
  background-color: var(--orange);
}
</style>
