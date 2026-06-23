<template>
  <div class="place">
    <div class="place__banner">
      <RouterLink :to="`/destinations/${destinationInfo.title}`">
        <img
          :alt="destinationInfo.title"
          :src="`/Images/image${destinationInfo.img}.webp`"
          class="place__img"
        />
      </RouterLink>
      <div class="place__like" @click="toggleLike">
        <svg
          :class="['place__like-icon', { 'place__like-icon--filled': isLiked }]"
          fill="#fff"
          height="24.037"
          stroke="#E76F51"
          viewBox="0 0 24.037 24.037"
          width="24.037"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path_955"
            d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772Z"
            data-name="Path 955"
            transform="translate(2.716 20.496) rotate(-45)"
          />
        </svg>
      </div>
      <div class="place__price">
        <p class="place__price-text">${{ destinationInfo.price }}/night</p>
      </div>
    </div>
    <RouterLink :to="`/destinations/${destinationInfo.title}`">
      <h3 class="place__title">{{ destinationInfo.title }}</h3>
    </RouterLink>
    <p class="place__caption">{{ destinationInfo.caption }}</p>
    <RouterLink
      :to="`/destinations/${destinationInfo.id}`"
      class="place__link btn"
    >
      Read More
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isLiked = ref(false);
const props = defineProps<{
  destinationInfo: {
    id: number;
    img: string;
    price: number;
    title: string;
    caption: string;
  };
}>();

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};
</script>

<style scoped>
.place {
  width: 34rem;
  flex-grow: 1;
  padding: 4rem;
  max-width: 50rem;
  text-align: center;
  border-radius: 2rem;
  background-color: var(--white);
}
.place__banner {
  max-width: 29rem;
  position: relative;
  margin: 0 auto 3.3rem;
}
.place__img {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
}
.place__like {
  top: 1.5rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  cursor: pointer;
  position: absolute;
  align-items: center;
  border-radius: 1.3rem;
  justify-content: center;
  background-color: var(--white);
}
.place__like-icon {
  stroke-width: 2px;
}
.place__like-icon--filled {
  fill: var(--orange);
}
.place__price {
  left: 0;
  right: 0;
  height: 5rem;
  display: flex;
  margin: 0 auto;
  bottom: -1.5rem;
  font-size: 1.7rem;
  position: absolute;
  max-width: 14.5rem;
  align-items: center;
  border-radius: 1rem;
  justify-content: center;
  background-color: var(--white);
}
.place__price-text {
  color: var(--orange);
  font-family: var(--primary-font-md), serif;
}
.place__title {
  margin-top: 4rem;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: var(--secondary-font), serif;
}
.place__caption {
  max-width: 28rem;
  margin: 0 auto 2.5rem;
  font-family: var(--primary-font), serif;
}
.place__link {
  font-size: 1.8rem;
  color: var(--dark-grey);
  transition: all ease-in-out 150ms;
  background-color: var(--dark-grey-btn);
  font-family: var(--primary-font-md), serif;
}
.place__link:hover {
  font-size: 2rem;
  transition: all ease-in-out 200ms;
}
</style>
