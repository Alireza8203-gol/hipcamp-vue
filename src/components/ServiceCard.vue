<template>
  <div class="service">
    <img
      :alt="serviceInfo.img"
      :src="`/Images/svgs/${serviceInfo.img}.svg`"
      class="service__img"
    />
    <h3 class="service__title">{{ serviceInfo.title }}</h3>
    <p class="service__caption">{{ serviceInfo.caption }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  serviceInfo: { id: number; img: string; title: string; caption: string };
}>();
</script>

<style scoped>
.service {
  width: 34rem;
  flex-grow: 1;
  height: 29rem;
  display: flex;
  padding: 0 3.5rem;
  text-align: center;
  align-items: center;
  border-radius: 2rem;
  margin: 0 1.5rem 2rem;
  flex-direction: column;
  justify-content: center;
  color: var(--text--dark);
  background: var(--white);
}
.service__img {
  display: block;
}
.service__title {
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  font-family: var(--secondary-font), sans-serif;
}
</style>
