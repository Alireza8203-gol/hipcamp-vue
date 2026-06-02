<template>
  <div :class="`nav-menu ${isMenuOpen ? 'show-menu' : 'hide-menu'}`">
    <ul class="mobile-menu">
      <MenuItem v-for="item in menuItemNames" :key="item.id" :item="item" />
    </ul>
    <UserLogIn />
  </div>
  <div
    :class="`overlay ${isMenuOpen ? 'overlay--visible' : 'overlay--invisible'}`"
    @click="toggleMobileMenu"
  ></div>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/MenuItem.vue";
import UserLogIn from "@/components/UserLogIn.vue";

const props = defineProps<{
  isMenuOpen: boolean;
  menuItemNames: { id: number; label: string; path: string }[];
}>();
const emit = defineEmits<{
  (e: "toggleMenu", value: boolean): void;
}>();

const toggleMobileMenu = () => {
  emit("toggleMenu", !props.isMenuOpen);
};
</script>

<style scoped>
.nav-menu {
  top: 0;
  bottom: 0;
  //z-index: 99;
  width: 25rem;
  position: fixed;
  backdrop-filter: blur(12px);
  padding: 10rem 2.5rem 2.5rem;
  //background-color: var(--app-bg);
  transition: all 200ms ease-in-out;
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
}
.mobile-menu {
  margin-bottom: 3rem;
}
.hide-menu {
  left: -29rem;
}
.show-menu {
  left: 0;
}
.overlay {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.25);
}
.overlay--visible {
  display: block;
}
.overlay--invisible {
  display: none;
}

@media (min-width: 380px) {
  .nav-menu {
    //width: 26.5rem;
  }
}

@media (min-width: 768px) {
  .nav-menu {
    display: none;
  }
  .overlay {
    display: none;
  }
}
</style>
