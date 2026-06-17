<template>
  <div class="not-found">
    <img
      alt="under-development"
      class="not-found__image"
      loading="lazy"
      src="/Images/not-found.webp"
    />
    <h1 class="not-found__title">404</h1>
    <h2 class="not-found__subtitle">Oops, this page doesn’t exist.</h2>
    <RouterLink class="btn btn--orange" to="/"> Go back home </RouterLink>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.not-found {
  display: flex;
  margin-top: 10rem;
  align-items: center;
  margin-bottom: 10rem;
  flex-direction: column;
}
.not-found__image {
  width: min(50rem, 90%);
}
.not-found__title {
  margin-bottom: 1.25rem;
  font-size: 1.875rem;
  text-align: center;
}
.not-found__subtitle {
  font-size: 2.6rem;
  text-align: center;
}
.btn--orange {
  margin-top: 2rem;
  background-color: var(--orange);
  padding: 0 2rem;
}
</style>
