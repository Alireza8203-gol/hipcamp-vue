<template>
  <li class="menu__item">
    <RouterLink
      :id="`${item.id}`"
      :class="['menu__link', { 'menu__link--active': isActive }]"
      :to="item.path"
      >{{ item.label }}
    </RouterLink>
  </li>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps<{
  item: { id: number; label: string; path: string };
}>();
const isActive = computed(() => route.path === props.item.path);
</script>

<style scoped>
.menu__item {
  margin-bottom: 2rem;
  margin-right: 1.5rem;
}
.menu__link {
  color: var(--text--dark);
  transition: color 150ms ease-in;
}
.menu__link:hover {
  color: var(--white);
  transition: color 150ms ease-in;
}
.menu__link--active {
  z-index: 1;
  position: relative;
  color: var(--text--dark);
}
.menu__link--active::before {
  left: 0;
  right: 0;
  top: 0.7rem;
  width: 4rem;
  z-index: -1;
  content: " ";
  display: none;
  margin: 0 auto;
  height: 0.3rem;
  position: absolute;
  border-radius: 10rem;
  transform: rotate(45deg);
  background-color: var(--orange);
}

@media (min-width: 768px) {
  .menu__item {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
  .menu__link {
    color: var(--light-grey);
  }
  .menu__link--active {
    color: var(--white);
  }
  .menu__link--active::before {
    display: block;
  }
}
</style>
