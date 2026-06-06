<template>
  <div class="footer-list">
    <h3 class="footer__title">Get to Know Us</h3>
    <ul class="footer-pages">
      <li
        v-for="item in listItemsInfoArr"
        :key="item.id"
        class="footer-pages__item"
      >
        <RouterLink :to="item.url" class="footer-pages__link">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  listItemsInfoArr: { id: number; name: string; url: string }[];
}>();
</script>

<style scoped>
.footer-list {
  max-width: 50%;
  margin-right: 3vw;
  margin-bottom: 4rem;
}
.footer__title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: var(--secondary-font), sans-serif;
}
.footer-pages__link {
  color: var(--text--dark);
}
.footer-pages__link:hover {
  color: var(--text--dark);
  text-decoration: underline;
}
</style>
