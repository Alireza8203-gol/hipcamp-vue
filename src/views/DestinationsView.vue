<template>
  <main class="main">
    <div class="destinations-hero">
      <div class="hero-content">
        <h1 class="hero-content__title">Explore Destinations And Activities</h1>
        <p class="hero-content__caption">
          Book unique camping experiences on over 300,000 campsites, cabins, RV
          parks, public parks and more.
        </p>
        <div class="hero-content__form">
          <input
            v-model="searchQuery"
            class="hero-content__input"
            placeholder="Search Destinations"
            type="text"
          />
        </div>
      </div>
    </div>
    <!--    <div class="divider"></div>-->
    <div class="container">
      <div class="destinations__places">
        <DestinationCard
          v-for="destination in filteredDestinations"
          :key="destination.id"
          :destination-info="destination"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import DestinationCard from "@/components/DestinationCard.vue";
import { type Destination, destinations } from "@/data/destinations.ts";

const searchQuery = ref<string>("");
const destinationsArr = ref<Destination[] | []>(destinations);
const filteredDestinations = computed(() => {
  // console.log("query received", searchQuery.value);
  if (!searchQuery.value) {
    console.log("query empty");
    return destinations;
  }
  console.log("query not empty");
  return destinationsArr.value.filter((place) => {
    console.log("filter is running");
    return place.title.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

// const lookUpDestination = () => {
//   console.log(searchQuery.value);
// };
</script>

<style scoped>
.destinations-hero {
  display: flex;
  min-height: 85vh;
  align-items: start;
  justify-content: center;
  border-bottom-left-radius: 10rem;
  border-bottom-right-radius: 10rem;
  background:
    linear-gradient(rgba(59, 55, 53, 0.5), rgba(59, 55, 53, 0.5)) center
      center / cover,
    url("/Images/image12.webp") center center / cover;
}
.hero-content {
  margin-top: 16vh;
  text-align: center;
  color: var(--white);
}
.hero-content__title {
  margin: 0 auto;
  font-size: 4rem;
  padding: 0 5rem;
  text-wrap: balance;
  line-height: 6.1rem;
  font-family: var(--secondary-font), sans-serif;
}
.hero-content__caption {
  max-width: 34rem;
  font-size: 1.8rem;
  align-self: center;
  margin: 2.3rem auto;
}
.hero-content__form {
  display: flex;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 50vw;
  align-items: start;
  border-radius: 2rem;
  justify-content: center;
  background-color: var(--white);
}
.hero-content__input {
  width: 70%;
  height: 5rem;
  border: none;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  color: var(--light-grey);
}
.hero-content__input:focus {
  border: none;
  outline: none;
  color: var(--text--dark);
  box-shadow: 0 0 8px 0 var(--orange);
}
.destinations__places {
  gap: 1.5rem;
  display: flex;
  flex-wrap: wrap;
}
.divider {
  width: 100%;
  height: 1px;
  margin: 5rem auto;
  background-color: var(--orange);
}

@media (min-width: 376px) {
  .destinations__places {
    margin-top: -5vh;
  }
}
@media (min-width: 992px) {
  .destinations-hero {
    min-height: 70vh;
  }
  .hero-content__title {
    font-size: 5vh;
    max-width: 90vh;
    line-height: 7vh;
  }
  .hero-content__caption {
    padding: 0;
    font-size: 2vh;
    max-width: 60vh;
    margin: 2rem auto 5rem;
  }
}
</style>
