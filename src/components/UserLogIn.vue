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
  display: flex;
  flex-flow: column;
}
.nav__link {
  flex-grow: 1;
  padding: 1rem;
  margin: 1rem 0;
  display: block;
  text-align: center;
  color: var(--text--dark);
}
.nav__link--border {
  border-radius: 5rem;
  border: 1px solid var(--text--dark);
}
/*
  TODO: Make a better hover background color for sign in button in desktop breakpoint
*/
.nav__link--border:hover {
  color: var(--text--dark);
  background-color: var(--white);
  transition: all 150ms ease-in-out;
}
.hidden {
  display: none;
}

@media (min-width: 768px) {
}
@media (min-width: 992px) {
  .nav__links {
    display: flex;
    flex-flow: row;
  }
  .nav__link {
    margin-top: 0;
    padding-left: 0;
    margin-bottom: 0;
    padding-right: 0;
    margin-left: 3rem;
    color: var(--white);
    font-family: var(--primary-font-md), sans-serif;
  }
  .nav__link--border {
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: 1px solid var(--white);
    transition: all 150ms ease-in-out;
  }
}
</style>
