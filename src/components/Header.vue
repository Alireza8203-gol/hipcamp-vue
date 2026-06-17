<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav__wrapper">
          <RouterLink class="app-logo" to="/">
            <img
              alt="app-logo"
              class="app-logo__img"
              src="/Images/svgs/logo.svg"
            />
          </RouterLink>
          <DesktopNavMenu :menu-item-names="menuItemsNames" />
        </div>
        <MobileNavMenu
          :is-menu-open="isMenuOpen"
          :menu-item-names="menuItemsNames"
          @toggleMenu="toggleMenu"
        />
        <UserLogIn :is-desktop="true" />
        <div
          :class="['nav__btn', { 'nav__btn--open': isMenuOpen }]"
          @click="toggleMenu"
        >
          <span class="nav__btn-line"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UserLogIn from "@/components/UserLogIn.vue";
import MobileNavMenu from "@/components/MobileNavMenu.vue";
import DesktopNavMenu from "@/components/DesktopNavMenu.vue";

const isMenuOpen = ref(false);
const menuItemsNames = [
  { id: 1, label: "Home", path: "/", doesWork: true },
  { id: 2, label: "Destinations", path: "/destinations", doesWork: true },
  { id: 3, label: "Near Me", path: "/near-me", doesWork: false },
  { id: 4, label: "Events", path: "/events", doesWork: false },
  { id: 5, label: "Blog", path: "/blog", doesWork: false },
  { id: 6, label: "Gallery", path: "/gallery", doesWork: false },
  { id: 7, label: "About", path: "/about", doesWork: false },
  { id: 8, label: "Contact Us", path: "/contact", doesWork: false },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.header {
  top: 0;
  width: 100%;
  z-index: 100;
  position: fixed;
}
.nav {
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;
}
.nav__wrapper {
  display: flex;
  align-items: center;
}
.app-logo {
  width: 5.5rem;
  height: 5.5rem;
  display: block;
  margin-right: 4rem;
}
.app-logo__img {
  width: 100%;
  height: 100%;
}
.nav__btn {
  z-index: 1;
  width: 5.5rem;
  display: flex;
  height: 5.5rem;
  cursor: pointer;
  align-items: center;
  border-radius: 2rem;
  justify-content: center;
  background-color: var(--white);
}
.nav__btn-line {
  width: 2.5rem;
  height: 0.3rem;
  display: block;
  position: relative;
  border-radius: 5rem;
  transition: all 150ms ease;
  background-color: var(--orange);
}
.nav__btn-line::before,
.nav__btn-line::after {
  z-index: 3;
  content: " ";
  width: 2.5rem;
  height: 0.3rem;
  position: absolute;
  border-radius: 5rem;
  background-color: var(--orange);
  transition: all 200ms ease-in-out;
}
.nav__btn-line::before {
  top: -0.7rem;
}
.nav__btn-line::after {
  top: 0.7rem;
}
.nav__btn--open .nav__btn-line {
  background-color: transparent;
}
.nav__btn--open .nav__btn-line::before {
  transform: translateY(7px) rotate(45deg);
}
.nav__btn--open .nav__btn-line::after {
  transform: translateY(-7px) rotate(-45deg);
}

@media (min-width: 768px) {
  .header {
    backdrop-filter: blur(1.5rem);
    --webkit-backdrop-filter: blur(1.5rem);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(151, 71, 255, 0) 100%
    );
  }
  .nav__btn {
    display: none;
  }
}
@media (min-width: 992px) {
  .--desktop {
    display: none;
  }
}
</style>
