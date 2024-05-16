<template>
  <div>
    <div class="img-bg"></div>
    <div class="container">
      <div class="card-image d-lg-flex justify-content-md-center align-items-center">
        <v-img class="c-image" src="../assets/img/me.jpg" cover> </v-img>
        <div class="ml-5 mt-5 d-lg-inline  d-md-inline d-sm-none d-none">
          <h2 class="mb-0">Thornthan Jomtharak</h2>
          <p>Frontend Developer, UX/UI Designer</p>
        </div>
      </div>

      <v-card
        :disabled="loading"
        :loading="loading"
        class="mx-auto mt-16 mb-12 bg-text"
      >
        <v-row>
          <v-col lg="5" md="5" sm="6" cols="12">
            <v-card-item>
              <v-card-subtitle>
                <span
                  >Hi, my name is Thornthan Jomtharak. My nickname is Brand.
                  Comes from Bangkok, Thailand. I graduated from Khon Kaen
                  University, Information Technology Major, College of
                  Computing. Specialize in Frontend Development and
                  UX / UI Design and Graphic Design.</span
                >
                <CardSocial />
              </v-card-subtitle>
            </v-card-item>
          </v-col>
          <v-col lg="7" md="7" sm="6" cols="12">
            <v-card-text>
              <h6 class="text-white mb-5">Experiences</h6>
              <div class="text-secondary">
                <div class="mb-3">
                  <p class="mb-0">Software Engineer</p>
                  <p class="mb-0 text-secondary">
                    INET (Internet Thailand PCL)
                  </p>
                  <p class="text-secondary">May 2024 - Present</p>
                </div>
                <div class="mb-3">
                  <p class="mb-0">UX / UI Designer</p>
                  <p class="mb-0 text-secondary">Zenith Comp Co,. LTd.</p>
                  <p class="text-secondary">Nov 2023 - Apr 2024</p>
                </div>
                <div class="mb-3">
                  <p class="mb-0">Developer</p>
                  <p class="mb-0 text-secondary">AXONS Corporate</p>
                  <p class="text-secondary">Jun 2023 - Oct 2023</p>
                </div>
                <div class="mb-3">
                  <p class="mb-0">Developer (Internship)</p>
                  <p class="mb-0 text-secondary">
                    Metro Systems Corporation Public Limited Company
                  </p>
                  <p class="text-secondary">Nov 2022 - Mar 2024</p>
                </div>
              </div>
            </v-card-text>

            <v-divider class="mx-4 mb-1 mt-0"></v-divider>

            <v-card-text>
              <h6 class="text-white mb-5">Programming Skills</h6>
              <div class="mb-2">
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary"
                  >HTML5</v-chip
                >
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary">CSS3</v-chip>
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary"
                  >JavaScript</v-chip
                >
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary">PHP</v-chip>
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary">SQL</v-chip>
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary"
                  >React.js</v-chip
                >
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary"
                  >Node.js</v-chip
                >
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary"
                  >Next.js</v-chip
                >
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary"
                  >.NET MVC</v-chip
                >
                <v-chip class="skills mr-2 mb-2 text-white" color="secondary"
                  >Vue.js</v-chip
                >
              </div>

              <h6 class="text-white my-5">Tools & Utilities</h6>
              <div class="mb-2">
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary"
                  >Visual Studio Code</v-chip
                >
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary">Figma</v-chip>
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary">Canva</v-chip>
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary"
                  >Adoba Photoshop</v-chip
                >
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary"
                  >Adobe Premier Pro</v-chip
                >
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary"
                  >Adobe XD</v-chip
                >
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary">Git</v-chip>
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary"
                  >MongoDB</v-chip
                >
                <v-chip class="tools mr-2 mb-2 text-white" color="secondary">MySQL</v-chip>
              </div>

              <h6 class="text-white my-5">Strengths</h6>
              <div class="mb-2">
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Open Minded</v-chip
                >
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Pay attention to details</v-chip
                >
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Prioritize</v-chip
                >
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Critical-Thinking</v-chip
                >
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Communication</v-chip
                >
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Work as Team</v-chip
                >
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Flexible</v-chip
                >
                <v-chip class="str mr-2 mb-2 text-white" color="secondary"
                  >Emphatize</v-chip
                >
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import CardSocial from "../components/CardSocial.vue";

export default {
  components: {
    CardSocial,
  },
};
</script>

<style>
.img-bg {
  height: 320px;
  width: 100%;
  object-fit: contain;
  position: relative;
  opacity: 0.3;
  background-image: url("https://cdn.wallpapersafari.com/86/2/bfFe9r.jpeg");
}

.card-image {
  position: absolute;
  top: 4.5rem;
  z-index: 1000;
}

.c-image {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 2px solid #6d6767;
}
.v-chip .v-chip__content {
  color: #eeeeee;
}
</style>
