<template>
  <v-container class="mb-16">
    <b-breadcrumb :items="Features" class="mt-5 mb-10"></b-breadcrumb>
    <div class="d-flex justify-content-between align-center flex-wrap mb-5">
      <h2>Artistic Mastery.</h2>
      <a href="/" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back
      </a>
    </div>

    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(item, index) in filteredBundles"
          :key="index"
        >
          <router-link
            class="links"
            :to="{
              name: 'BundleDetail',
              params: { displayName: item.displayName },
            }"
          >
            <img
              :src="item.displayIcon"
              class="d-block w-100 carousel-image-2"
              alt="img-features"
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>{{ item.displayName }}</h2>
              <p>Exclusive {{ item.description }} Bundle</p>
            </div>
          </router-link>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div
      class="d-flex align-items-center justify-content-between flex-wrap mt-16 mb-0"
    >
      <h3>
        Get your favorite
        <h3 class="d-inline text-primary">VCT Team</h3>
      </h3>
      <a href="/allbundle" class="text-decoration-none text-white">
        View all <i class="fa-solid fa-arrow-right mr-1"></i>
      </a>
    </div>

    <v-sheet
      class="mx-auto shadow-none mt-5"
      elevation="8"
      color="transparent"
      dark
    >
      <v-slide-group v-model="model" active-class="success" show-arrows>
        <v-slide-item v-for="(item, index) in vctBundles" :key="index">
          <router-link
            class="links"
            :to="{
              name: 'BundleDetail',
              params: { displayName: item.displayName },
            }"
          >
            <v-card
              :color="dark"
              class="pa-1 ma-3 bottom-gradient"
              height="auto"
              width="250"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-img
                  :src="item.displayIcon"
                  class="w-100 rounded-lg mt-3"
                  height="150"
                ></v-img>
                <v-card-text class="px-0 pb-0 text-left">
                  <p class="mb-0 text-secondary">
                    {{ item.displayName }}
                  </p>
                </v-card-text>
              </v-row>
            </v-card>
          </router-link>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <h3 class="mt-16 mb-0">Today's bundle</h3>
    <v-row class="mt-5">
      <v-col
        cols="6"
        sm="6"
        md="4"
        v-for="(bundle, index) in randomBundles"
        :key="index"
      >
        <router-link
          class="links"
          :to="{
            name: 'BundleDetail',
            params: { displayName: bundle.displayName },
          }"
        >
          <v-img
            :src="bundle.displayIcon"
            class="rounded-lg w-100"
            height="200"
          ></v-img>
          <p class="mt-3 text-secondary">{{ bundle.displayName }}</p>
        </router-link>
      </v-col>
      <div class="text-center mt-5">
        <a class="btn btn-outline-primary px-5" href="/bundle">
          View All
        </a>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import { Features } from "@/components/Breadcrump";

export default {
  name: "AllProduct",
  data() {
    return {
      Features,
      bundles: [],
      skins: [],
      contentTiers: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [bundleRes, skinRes, tierRes] = await Promise.all([
          axios.get("https://valorant-api.com/v1/bundles"),
          axios.get("https://valorant-api.com/v1/weapons/skins"),
          axios.get("https://valorant-api.com/v1/contenttiers"),
        ]);

        if (
          bundleRes.data.status === 200 &&
          skinRes.data.status === 200 &&
          tierRes.data.status === 200
        ) {
          this.bundles = bundleRes.data.data;
          this.skins = skinRes.data.data;
          this.contentTiers = tierRes.data.data;
          this.randomizeBundles();
        }
      } catch (e) {
        console.log(e);
      }
    },
    randomizeBundles() {
      const shuffled = [...this.bundles].sort(() => 0.5 - Math.random());
      this.randomBundlesData = shuffled.slice(0, 9);
    },
    startCountdown() {
      setInterval(() => {
        const now = new Date().getTime();
        const distance = this.nextUpdateTime - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.countdown = `${minutes}m ${seconds}s`;

        if (distance < 0) {
          this.scheduleNextUpdate();
        }
      }, 1000);
    },
    scheduleNextUpdate() {
      this.nextUpdateTime = new Date().getTime() + 10 * 60 * 1000; // 10 minutes from now
      this.randomizeBundles();
    },
  },
  computed: {
    randomBundles() {
      const shuffled = [...this.bundles].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 9);
    },
    filteredBundles() {
      return this.bundles.filter(
        (item) =>
          item.displayName.includes("Arcane") ||
          item.displayName.includes("Champions") ||
          item.displayName.includes("XERØFANG") ||
          item.displayName.includes("Ignite")
      );
    },
    vctBundles() {
      return this.bundles.filter((item) => item.displayName.includes("VCT"));
    },
    matchingBundles() {
      const skinDisplayNames = new Set(
        this.skins.map((skin) => skin.displayName)
      );
      return this.bundles.filter((bundle) =>
        skinDisplayNames.has(bundle.displayName)
      );
    },
  },
};
</script>

<style>
.carousel-image-2 {
  height: 500px;
  object-fit: cover;
}

.v-application .elevation-8 {
  box-shadow: none !important;
}

.theme--dark.v-sheet {
  background: transparent !important;
  box-shadow: none !important;
}

.theme--light.v-tabs-items {
  background: transparent !important;
}

.theme--dark.v-tabs > .v-tabs-bar,
.theme--light.v-tabs > .v-tabs-bar {
  background: transparent !important;
}
</style>
