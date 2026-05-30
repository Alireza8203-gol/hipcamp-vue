<template>
  <ul class="menu">
    <MenuItem v-for="item in menuItemNames" :key="item.id" :item="item" />
  </ul>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/MenuItem.vue";

defineProps<{
  menuItemNames: { id: number; label: string; path: string }[];
}>();
</script>

<style scoped>
.menu {
  display: none;
}

@media (min-width: 768px) {
  .menu {
    display: flex;
  }
}
</style>
