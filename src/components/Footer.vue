<template>
  <footer class="footer">
    <div class="container">
      <a href="" @click.prevent="scrollToTop">
        <svg
          fill="#E76F51"
          height="22.175"
          viewBox="0 0 18.68 22.175"
          width="18.68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path_958"
            d="M22.175,9.358a1.43,1.43,0,0,0-1.43-1.43H5.063l5.813-5.42A1.43,1.43,0,1,0,8.923.421L.455,8.311a1.43,1.43,0,0,0,0,2.091L8.923,18.3A1.43,1.43,0,1,0,10.875,16.2L5.063,10.788H20.746A1.43,1.43,0,0,0,22.175,9.358Z"
            data-name="Path 958"
            transform="translate(18.68) rotate(90)"
          />
        </svg>
      </a>
      <div class="footer__wrapper">
        <div class="footer-caption">
          <div class="footer-content">
            <h3 class="footer__title">
              Hipcamp is everywhere you want to camp.
            </h3>
            <p class="footer-content__description">
              Discover unique experiences on ranches, nature preserves, farms,
              vineyards, and public campgrounds across the U.S. Book tent
              camping, treehouses, cabins, yurts, primitive backcountry sites,
              car camping, Airstreams, tiny houses, RV camping, clamping tents
              and more.
            </p>
          </div>
          <div class="footer-pages-wrapper">
            <FooterPages
              v-for="footerInfo in footerListInfo"
              :key="footerInfo.id"
              :list-items-info-arr="footerInfo.menuItems"
              :title="footerInfo.title"
            />
          </div>
        </div>
      </div>
      <p class="footer__copy-right">© 2020. All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FooterPages from "@/components/FooterPages.vue";
import { footerData } from "@/data/footerListsInfo.ts";

const footerListInfo = footerData;
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.footer {
  line-height: 2;
  margin-top: 10rem;
  position: relative;
  padding-top: 10rem;
  color: var(--text--dark);
  border-top-left-radius: 10rem;
  border-top-right-radius: 10rem;
  background-color: var(--secondary-color);
}
.footer-pages-wrapper,
.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer-caption {
  margin-bottom: 4rem;
}
.footer__title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: var(--secondary-font), sans-serif;
}
.footer-content__description {
  text-align: justify;
}
.footer__copy-right {
  text-align: center;
  font-size: 1.4rem;
  padding: 4rem 0;
}
.footer__scroll {
  position: absolute;
  top: -13rem;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 2rem;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1rem rgba(59, 55, 53, 0.05);
}

@media (min-width: 1200px) {
  .footer-caption {
    max-width: 45rem;
  }
  .footer__scroll {
    right: 0;
    margin: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .footer-caption {
    max-width: 62rem;
  }
}
</style>
