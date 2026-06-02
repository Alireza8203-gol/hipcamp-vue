<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-content__title">Find Yourself Outside.</h1>
      <p class="hero-content__caption">
        Book unique camping experiences on over 300,000 campsites, cabins, RV
        parks, public parks and more.
      </p>
      <RouterLink class="hero-content__link btn" to="/">Discover</RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.hero {
  display: flex;
  min-height: 85vh;
  align-items: start;
  justify-content: center;
  border-bottom-left-radius: 10rem;
  border-bottom-right-radius: 10rem;
  background:
    linear-gradient(rgba(59, 55, 53, 0.5), rgba(59, 55, 53, 0.5)) center center /
      cover,
    url("/Images/hero-bg.webp") center center / cover;
}
.hero-content {
  margin-top: 16vh;
  text-align: center;
  color: var(--white);
}
.hero-content__title {
  margin: 0 auto;
  font-size: 5rem;
  max-width: 35rem;
  line-height: 6.1rem;
  font-family: var(--secondary-font), sans-serif;
}
.hero-content__caption {
  /* text-align: center; */
  max-width: 34rem;
  font-size: 1.8rem;
  align-self: center;
  margin: 2.3rem auto;
}
.hero-content__link {
  background-color: var(--orange);
}

@media (min-width: 992px) {
  .hero-content__title {
    font-size: 7vh;
    max-width: 50vh;
    line-height: 10vh;
  }
  .hero-content__caption {
    font-size: 2vh;
    max-width: 60vh;
    margin: 3.3vh auto 3vh;
  }
}
</style>
