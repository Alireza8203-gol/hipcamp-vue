<template>
  <section class="newsletter">
    <div class="newsletter__content">
      <h2 class="newsletter__title">Let's Stay In Touch</h2>
      <p class="newsletter__caption">
        Get travel planning ideas, helpful tips, and stories from our visitors
        delivered right to your inbox.
      </p>
      <div class="newsletter__email-box">
        <form class="newsletter__form" @action.prevent="">
          <div class="newsletter__email-address">
            <svg
              class="newsletter__email-icon"
              height="17.746"
              viewBox="0 0 24.242 17.746"
              width="24.242"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Path_908"
                d="M26.215,17.058H8.027A3.03,3.03,0,0,0,5,20.085V31.777A3.031,3.031,0,0,0,8.027,34.8H26.215a3.031,3.031,0,0,0,3.027-3.027V20.085A3.03,3.03,0,0,0,26.215,17.058Zm-18.188.857H26.215a2.168,2.168,0,0,1,1.829,1.007l-9.328,8.81a2.354,2.354,0,0,1-3.189,0L6.2,18.923A2.169,2.169,0,0,1,8.027,17.915ZM5.878,32.062a2.207,2.207,0,0,1-.021-.285V20.085a2.163,2.163,0,0,1,.021-.285l6.491,6.131Zm20.337,1.885H8.027A2.168,2.168,0,0,1,6.2,32.94l6.8-6.419,1.944,1.835a3.22,3.22,0,0,0,4.366,0l1.943-1.835,6.8,6.418A2.167,2.167,0,0,1,26.215,33.947Zm2.169-13.862V31.777a2.2,2.2,0,0,1-.021.285l-6.491-6.131L28.364,19.8A2.251,2.251,0,0,1,28.384,20.085Z"
                data-name="Path 908"
                fill="#8d8d8d"
                transform="translate(-5 -17.058)"
              />
            </svg>
            <input
              class="newsletter__input"
              placeholder="Email Address"
              type="text"
            />
          </div>
          <button class="newsletter__submit" type="submit">
            <svg
              height="18.23"
              viewBox="0 0 24.162 18.23"
              width="24.162"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Path_909"
                d="M9.778,15.82,6.954,17.7a.55.55,0,0,1-.816-.439V13.121l11.546-8.66L3.88,11.8.3,9.356A.748.748,0,0,1,.491,8.039L23.709-.37c.314-.126.565.251.377.565L13.606,17.514a.773.773,0,0,1-1.067.188Z"
                data-name="Path 909"
                fill="#fff"
                fill-rule="evenodd"
                transform="translate(0.012 0.395)"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
    <div class="newsletter__banner">
      <img alt="tent" class="newsletter__img" src="/Images/tent.webp" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.newsletter {
  display: flex;
  margin: 6rem 0;
  max-width: 100%;
  overflow: hidden;
  padding: 4rem 2rem;
  position: relative;
  text-align: center;
  border-radius: 2rem;
  flex-direction: column-reverse;
  background-color: var(--secondary-color);
}
.newsletter::before {
  bottom: 0;
  top: 23rem;
  content: "";
  left: -15rem;
  right: 4.5rem;
  position: absolute;
  background: url(/Images/svgs/shape3.svg) 0 0 / cover no-repeat;
}
.newsletter__content {
  color: var(--text--dark);
  z-index: 2;
}
.newsletter__title {
  max-width:;
  font-size: 4rem;
  line-height: 6rem;
  margin: 0 auto 2rem;
  font-family: var(--secondary-font), serif;
}
.newsletter__caption {
  max-width: 33rem;
  margin: 0 auto 2rem;
  font-family: var(--primary-font-md), serif;
}
.newsletter__email-box {
  height: 8rem;
  border-radius: 2rem;
  background-color: var(--white);
}
.newsletter__form {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.newsletter__email-address {
  width: 100%;
  display: inherit;
  margin-left: 3rem;
  align-items: center;
}
.newsletter__email-icon {
  flex-shrink: 0;
  margin-right: 1rem;
}
.newsletter__input {
  width: 85%;
  outline: 0;
  height: 100%;
  border: none;
  font-size: 1.6rem;
  color: var(--dark-grey);
}
.newsletter__submit {
  outline: 0;
  border: none;
  width: 5.5rem;
  display: flex;
  height: 5.5rem;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  border-radius: 2rem;
  margin-right: 1.5rem;
  justify-content: center;
  background-color: var(--orange);
  box-shadow: 0 0 1rem rgba(231, 111, 81, 0.5);
}
.newsletter__banner {
  z-index: 2;
}
.newsletter__img {
  width: 100%;
  margin-bottom: 4rem;
}

@media (max-width: 310px) {
  .newsletter::before {
    right: 0;
    top: 12rem;
    left: -25rem;
  }
}
@media (max-width: 380px) {
  .newsletter__title {
    max-width: 22rem;
  }
}
@media (min-width: 768px) {
  .newsletter {
    align-items: center;
  }
  .newsletter::before {
    top: 10rem;
    left: -24rem;
  }
  .newsletter__caption {
    font-size: 2rem;
    max-width: 45rem;
  }
  .newsletter__img {
    margin-bottom: 0;
  }
}
@media (min-width: 992px) {
  .newsletter {
    text-align: left;
    padding: 2rem 5rem;
    flex-direction: row;
    justify-content: space-between;
  }
  .newsletter::before {
    top: -35rem;
    left: -50rem;
    right: 30rem;
  }
  .newsletter__content {
    flex-basis: 55%;
    margin-left: 5rem;
    margin-right: 3rem;
  }
  .newsletter__caption {
    margin: 0 0 2rem;
  }
  .newsletter__email-box {
    max-width: 90%;
  }
  .newsletter__banner {
    flex-basis: 40%;
    margin-left: 10rem;
  }
}
@media (min-width: 1200px) {
  .newsletter::before {
    right: 0;
    top: -40rem;
    left: -10rem;
    background-size: auto;
  }
  .newsletter__img {
    width: 468px;
  }
}
</style>
