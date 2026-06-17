<script lang="ts" setup></script>
<template>
  <section class="under-development">
    <img
      alt="Under Development"
      class="under-development__image"
      loading="lazy"
      src="/Images/under-development.png"
    />

    <h1 class="under-development__title">Under Development</h1>

    <p class="under-development__description">
      We're working hard to bring this page to life. Check back soon for new
      features and adventures.
    </p>

    <RouterLink class="btn btn--orange under-development__button" to="/">
      Go Back Home
    </RouterLink>
  </section>
</template>

<style scoped>
.under-development {
  display: flex;
  margin-top: 10rem;
  align-items: center;
  margin-bottom: 10rem;
  padding-inline: 1rem;
  flex-direction: column;
}
.under-development__image {
  width: min(500px, 90%);
}
.under-development__title {
  margin-top: 1rem;
  font-weight: 700;
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
}
.under-development__description {
  max-width: 40rem;
  margin-top: 1rem;
  line-height: 1.7;
  text-align: center;
}
.under-development__button {
  margin-top: 2rem;
}
.btn--orange {
  margin-top: 2rem;
  background-color: var(--orange);
  padding: 0 2rem;
}
</style>
