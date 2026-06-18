<template>
  <div class="not-found">
    <img
      alt="under-development"
      class="not-found__image"
      loading="lazy"
      src="/Images/not-found.webp"
    />
    <h1 class="not-found__title">Oops, looks like you're lost!</h1>
    <h2 class="not-found__subtitle">
      The page you're looking for doesn't exist or may have been removed
    </h2>
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
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: 1.25rem;
}
.not-found__subtitle {
  font-size: 2rem;
  text-align: center;
}
.btn--orange {
  padding: 0 2rem;
  margin-top: 2rem;
  background-color: var(--orange);
}
</style>
