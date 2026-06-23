<template>
  <main class="main">
    <div class="container">
      <section class="destination__hero">
        <img alt="" class="destination__image" src="/Images/hero-bg.webp" />

        <div class="destination__hero-content">
          <h1 class="destination__title">{{ destinationDetails?.title }}</h1>

          <div class="destination__meta">
            <span class="destination__rating">⭐ 4.2</span>
            <span class="destination__price"
              >{{ destinationDetails?.price }} / night</span
            >
          </div>
        </div>
      </section>

      <div class="destination__container">
        <section class="destination__overview">
          <div class="destination__host">
            <h2 class="destination__section-title">
              Hosted by {{ destinationDetails?.details.owner }}
            </h2>
          </div>

          <ul class="destination__stats">
            <li class="destination__stat">
              <span class="destination__stat-value">
                {{ destinationDetails?.details.guests }}
              </span>
              <span class="destination__stat-label"
                ><users :size="16" />Guests</span
              >
            </li>

            <li class="destination__stat">
              <span class="destination__stat-value">
                {{ destinationDetails?.details.bedrooms }}
              </span>
              <span class="destination__stat-label"
                ><house-plus :size="16" />Bedroom</span
              >
            </li>

            <li class="destination__stat">
              <span class="destination__stat-value">
                {{ destinationDetails?.details.beds }}
              </span>
              <span class="destination__stat-label"><bed :size="16" />Bed</span>
            </li>

            <li class="destination__stat">
              <span class="destination__stat-value">
                {{ destinationDetails?.details.baths }}
              </span>
              <span class="destination__stat-label"
                ><bath-icon :size="16" /> Bath</span
              >
            </li>
          </ul>
        </section>

        <section class="destination__description">
          <h2 class="destination__section-title">About this destination</h2>

          <p class="destination__text">
            {{ destinationDetails?.details.description }}
          </p>
        </section>

        <section class="destination__amenities">
          <h2 class="destination__section-title">Amenities</h2>

          <ul class="destination__amenities-list">
            <li
              v-if="destinationDetails?.details.amenities.kitchen"
              class="destination__amenity"
            >
              <cooking-pot />
              Kitchen
            </li>
            <li
              v-if="destinationDetails?.details.amenities.wifi"
              class="destination__amenity"
            >
              <Wifi /> Wifi
            </li>
            <li
              v-if="destinationDetails?.details.amenities.tv"
              class="destination__amenity"
            >
              <Tv /> TV
            </li>
            <li
              v-if="destinationDetails?.details.amenities.parking"
              class="destination__amenity"
            >
              <SquareParking />
              Parking Spot
            </li>
            <li
              v-if="destinationDetails?.details.amenities.laundry"
              class="destination__amenity"
            >
              <WashingMachine />
              Laundry
            </li>
            <li
              v-if="destinationDetails?.details.amenities.patioOrBalcony"
              class="destination__amenity"
            >
              <shrub />
              Patio / Balcony
            </li>
            <li
              v-if="destinationDetails?.details.amenities.airConditioning"
              class="destination__amenity"
            >
              <AirVent />
              Air Conditioning
            </li>
            <li
              v-if="destinationDetails?.details.amenities.hairDryer"
              class="destination__amenity"
            >
              <wind-icon />
              Hairdryer
            </li>
            <li
              v-if="destinationDetails?.details.amenities.elevator"
              class="destination__amenity"
            >
              <building /> Elevator
            </li>
            <li
              v-if="destinationDetails?.details.amenities.microwave"
              class="destination__amenity"
            >
              <LucideMicrowave />
              Microwave
            </li>
            <li
              v-if="destinationDetails?.details.amenities.refrigerator"
              class="destination__amenity"
            >
              <refrigerator />
              Refrigerator
            </li>
          </ul>
        </section>

        <aside class="destination__booking">
          <div class="destination__booking-card">
            <p class="destination__booking-price">
              {{ destinationDetails?.price }}
              <span class="destination__booking-period">/ night</span>
            </p>

            <button class="btn destination__booking-btn">Reserve Now</button>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { type Destination, destinations } from "@/data/destinations.ts";
import {
  AirVent,
  BathIcon,
  Bed,
  Building,
  CookingPot,
  HousePlus,
  LucideMicrowave,
  Refrigerator,
  Shrub,
  SquareParking,
  Tv,
  Users,
  WashingMachine,
  Wifi,
  WindIcon,
} from "@lucide/vue";

const route = useRoute();
const destinationDetails = ref<Destination>();

onMounted(() => {
  destinationDetails.value = destinations.find((destination) => {
    return route.params.id == destination.id.toString();
  });
  console.log(destinationDetails.value);
});
</script>

<style scoped>
.destination__hero {
  overflow: hidden;
  margin-top: 12rem;
  position: relative;
  margin-bottom: 3rem;
  border-radius: 1.5rem;
}
.destination__image {
  width: 100%;
  height: 50rem;
  display: block;
  object-fit: cover;
  border-radius: 2rem;
}
.destination__title {
  font-size: 3rem;
  margin-bottom: 0.75rem;
  color: var(--text--dark);
  font-family: var(--primary-font), sans-serif;
}
.destination__meta {
  gap: 1.5rem;
  display: flex;
  font-size: 1.1rem;
  color: var(--text--dark);
}
/* LAYOUT */
.destination__container {
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 32rem;
}
/* CONTENT */
.destination__description p {
  color: #555;
  line-height: 1.8;
}
/* STATS */
.destination__stats {
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.destination__stat {
  padding: 1.5rem;
  text-align: center;
  border-radius: 1rem;
  border: 1px solid var(--dark-grey);
}
.destination__stat-value {
  display: block;
  font-weight: 700;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}
.destination__stat-label {
  gap: 1rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* AMENITIES */
.destination__amenities-list {
  gap: 1rem;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
}
.destination__amenity {
  gap: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 0.75rem;
  border: 1px solid var(--light-grey);
}
/* BOOKING */
.destination__booking {
  position: relative;
}
.destination__booking-card {
  top: 2rem;
  padding: 2rem;
  position: sticky;
  border-radius: 1.5rem;
  border: 1px solid #e5e5e5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
.destination__booking-price {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
.destination__booking-period {
  color: var(--text--dark);
  font-size: 1rem;
  font-weight: 400;
}
.destination__booking-btn {
  margin: 0;
  width: 100%;
  border: none;
  //padding: 0 3rem;
  font-weight: 400;
  font-size: 1.3rem;
  border-radius: 0.75rem;
  transition: transform 150ms ease-in;
}
.destination__booking-btn:hover {
  transform: scale(105%);
  transition: transform 150ms ease-in;
}

/* TABLET */
@media (max-width: 900px) {
  .destination__container {
    grid-template-columns: 1fr;
  }
  .destination__booking-card {
    position: static;
  }
}
/* MOBILE */
@media (max-width: 600px) {
  .destination {
    padding: 1rem;
  }
  .destination__image {
    height: 350px;
  }
  .destination__title {
    font-size: 2rem;
  }
  .destination__stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .destination__amenities-list {
    grid-template-columns: 1fr;
  }
}
</style>
