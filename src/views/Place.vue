<template>
  <div>
    <h1>this is the place: {{ router.params.title }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<style scoped></style>
