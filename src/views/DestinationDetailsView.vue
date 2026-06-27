<template>
  <main class="main">
    <div class="container">
      <section class="destination__hero">
        <!--        <img alt="" class="destination__image" src="/Images/hero-bg.webp" />-->
        <CustomCarousel />

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
            <CustomDatePicker />
            <button class="destination__booking-btn">Reserve Now</button>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CustomCarousel from "@/components/CustomCarousel.vue";
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
import CustomDatePicker from "@/components/CustomDatePicker.vue";

const route = useRoute();
const destinationDetails = ref<Destination>();

onMounted(() => {
  destinationDetails.value = destinations.find((destination) => {
    return route.params.id == destination.id.toString();
  });
});
</script>

<style>
.destination__hero {
  overflow: hidden;
  margin-top: 12rem;
  position: relative;
  margin-bottom: 3rem;
  border-radius: 1.5rem;
}

.destination__image {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
  border-radius: 2rem;
}

.destination__hero-content {
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem;
  position: absolute;
  border-radius: 0 0 2rem 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 100%);
}

.destination__title {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 0.75rem;
  font-family: var(--primary-font), sans-serif;
}

.destination__meta {
  gap: 1.5rem;
  display: flex;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
}

/* LAYOUT */
.destination__container {
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr;
}

/* SECTION TITLES */
.destination__section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
}

.destination__section-title::after {
  left: 0;
  bottom: 0;
  height: 3px;
  content: "";
  width: 2.5rem;
  position: absolute;
  border-radius: 2px;
  background-color: var(--orange);
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
  margin-bottom: 2rem;
  grid-template-columns: repeat(2, 1fr);
}

.destination__stat {
  padding: 1.5rem;
  text-align: center;
  border-radius: 1rem;
  background-color: var(--white);
  border: 1px solid var(--light-grey);
  border-left: 3px solid transparent;
  transition:
    border-color 200ms ease,
    border-left-color 200ms ease;
}

.destination__stat:hover {
  border-left-color: var(--orange);
  background-color: var(--secondary-color);
}

.destination__stat-value {
  display: block;
  font-weight: 700;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--text--dark);
}

.destination__stat-label {
  gap: 0.4rem;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  color: var(--dark-grey);
  justify-content: center;
}

/* AMENITIES */
.destination__amenities-list {
  gap: 1rem;
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
}

.destination__amenity {
  gap: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  color: var(--text--dark);
  background-color: var(--white);
  border: 1px solid var(--light-grey);
  transition:
    color 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;
}

.destination__amenity:hover {
  color: var(--orange);
  border-color: var(--orange);
  background-color: var(--secondary-color);
}

/* BOOKING */
.destination__booking {
  position: relative;
}

.destination__booking-card {
  gap: 2rem;
  display: flex;
  padding: 2rem;
  position: static;
  align-items: center;
  border-radius: 1.5rem;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-top: 4px solid var(--orange);
  background-color: var(--secondary-color);
  box-shadow: 0 10px 30px rgba(231, 111, 81, 0.1);
}

.destination__booking-price {
  font-size: 3rem;
  font-weight: 700;
  align-self: start;
  color: var(--text--dark);
}

.destination__booking-period {
  font-weight: 400;
  font-size: 1.8rem;
  color: var(--dark-grey);
}

.destination__booking-btn {
  width: 100%;
  color: #fff;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, var(--orange) 0%, #d4593c 100%);
  transition:
    transform 150ms ease,
    box-shadow 150ms ease;
}

.destination__booking-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(231, 111, 81, 0.4);
}

/* TABLET */
@media (min-width: 600px) {
  .destination__image {
    height: 50rem;
  }

  .destination__title {
    font-size: 3rem;
  }

  .destination__stats {
    grid-template-columns: repeat(4, 1fr);
  }

  .destination__amenities-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* DESKTOP */
@media (min-width: 900px) {
  .destination__container {
    grid-template-columns: 1fr 32rem;
  }

  .destination__booking-card {
    top: 2rem;
    position: sticky;
  }
}

@media (min-width: 1200px) {
  .destination__amenities-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
