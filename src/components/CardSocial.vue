<template>
  <div>
    <div class="social my-6">
      <a class="social-link" href="https://www.twitch.tv/banny3633" target="_blank">
        <div
          class="d-flex align-items-center justify-content-center social-tw py-3 mb-4"
        >
          <i class="fa-brands fa-twitch fa-2xl mr-3"></i>
          <span target="_blank">Twitch</span>
        </div>
      </a>

      <a class="social-link" href="https://www.instagram.com/brandthron44/" target="_blank">
        <div
          class="d-flex align-items-center justify-content-center social-ins py-3 mb-4"
        >
          <i class="fa-brands fa-instagram fa-2xl mr-3"></i>
          <span target="_blank">Instagram</span>
        </div>
      </a>

      <a class="social-link" href="https://www.linkedin.com/in/thornthan-jomtharak-b10403279/" target="_blank">
        <div
          class="d-flex align-items-center justify-content-center social-li py-3 mb-4"
        >
          <i class="fa-brands fa-linkedin fa-2xl mr-3"></i>
          <span target="_blank">LinkedIn</span>
        </div>
      </a>

      <a class="social-link" href="https://www.youtube.com/channel/UC8T4F0fNvCg7nKxSbnPKBSg" target="_blank">
        <div
          class="d-flex align-items-center justify-content-center social-yt py-3 mb-4"
        >
          <i class="fa-brands fa-youtube fa-2xl mr-3"></i>
          <span target="_blank">YouTube</span>
        </div>
      </a>

      <a class="social-link" href="https://www.tiktok.com/@banny3633" target="_blank">
        <div
          class="d-flex align-items-center justify-content-center social-tt py-3 mb-4"
        >
          <i class="fa-brands fa-tiktok fa-2xl mr-3"></i>
          <span target="_blank">Tiktok</span>
        </div>
      </a>

      <a class="social-link" href="https://www.behance.net/torntanjomthar" target="_blank">
        <div
          class="d-flex align-items-center justify-content-center social-tt py-3 mb-4"
        >
          <i class="fa-brands fa-behance fa-2xl mr-3"></i>
          <span target="_blank">BeHance</span>
        </div>
      </a>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSocial",
};
</script>

<style>
.social .social-link .social-tw {
  background-color: #6441a5;
  border-radius: 4rem;
}

.social .social-link .social-ins {
  background-color: #8a3ab9;
  border-radius: 4rem;
}

.social .social-link .social-tt {
  background-color: #101010;
  border-radius: 4rem;
}

.social .social-link .social-yt {
  background-color: #FF0000;
  border-radius: 4rem;
}

.social .social-link .social-li {
  background-color: #0077b5;
  border-radius: 4rem;
}

.social a.social-link,
.fa-brands {
  text-decoration: none;
  color: #eeeeee;
}
</style>
