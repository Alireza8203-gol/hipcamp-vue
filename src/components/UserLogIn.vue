<template>
  <div :class="`nav__links ${isDesktop ? 'hidden' : ''}`">
    <RouterLink class="nav__link" to="/under-development">Sign Up</RouterLink>
    <RouterLink class="nav__link nav__link--border" to="/under-development">
      Sign In
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    isDesktop?: boolean;
  }>(),
  {
    isDesktop: false,
  },
);
</script>

<style scoped>
.nav__links {
  gap: 1rem;
  display: flex;
  flex-flow: column;
  border-radius: 5rem;
}
.nav__link {
  flex-grow: 1;
  padding: 1rem;
  margin: 1rem 0;
  display: block;
  text-align: center;
  border-radius: 5rem;
  color: var(--text--dark);
  transition: all 150ms ease-in;
  border: 1px solid var(--text--dark);
}
.nav__link:hover {
  color: var(--text--dark);
  background-color: var(--white);
  transition: all 150ms ease-in-out;
}
.hidden {
  display: none;
}

@media (min-width: 992px) {
  .nav__links {
    display: flex;
    flex-flow: row;
    border-color: var(--white);
    border: 1px solid var(--white);
  }
  .nav__link {
    border: none;
    margin-top: 0;
    margin-bottom: 0;
    padding: 1rem 3rem;
    color: var(--white);
    font-family: var(--primary-font-md), sans-serif;
  }
  .nav__link--border {
    border-radius: 10rem;
    transition: all 150ms ease-in-out;
  }
}
</style>
