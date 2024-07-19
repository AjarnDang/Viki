<template>
  <div>
    <v-container class="mt-5">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{ active: index === 0 }"
            v-for="(item, index) in premiumBundles"
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

      <v-sheet
        class="mx-auto shadow-none d-flex justify-content-center mt-5"
        color="transparent"
        dark
      >
        <v-slide-group
          v-model="model"
          active-class="success"
          show-arrows
          class="mt-5 mb-16"
        >
          <v-slide-item v-for="tag in Tags" :key="tag">
            <a
              :href="tag.tagLink"
              class="weapons text-white text-decoration-none mx-2"
            >
              <v-card
                :color="dark"
                class="pa-2 ma-3 bottom-gradient"
                height="auto"
                width="250"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-img
                    :src="tag.tagImage"
                    class="w-100 rounded-lg mt-3"
                  ></v-img>
                  <v-card-text class="px-0 pb-0 text-center">
                    <p class="mb-0">
                      {{ tag.tagName }}
                    </p>
                  </v-card-text>
                </v-row>
              </v-card>
            </a>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <div class="mb-16">
        <div class="d-flex justify-content-between flex-wrap align-end">
          <div>
            <h2 class="mb-0">New Arrivals</h2>
            <p class="mb-0">The best assets for you</p>
          </div>
          <a href="/allweapon" class="text-decoration-none text-white">
            View all <i class="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>

        <v-sheet
          class="mx-auto shadow-none mt-5"
          elevation="8"
          color="transparent"
          dark
        >
          <v-slide-group v-model="model" active-class="success" show-arrows>
            <v-slide-item
              v-for="(card, index) in randomFilteredSkins"
              :key="index"
            >
              <router-link
                :to="{
                  name: 'weaponDetail',
                  params: { displayName: card.displayName },
                }"
                class="text-decoration-none"
              >
                <v-card
                  v-if="card.displayIcon"
                  :color="dark"
                  class="pa-8 ma-3 bottom-gradient bg-text"
                  height="auto"
                  width="300"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img
                      :src="card.displayIcon"
                      class="w-100 rounded-lg mb-5 mt-3"
                    ></v-img>
                    <v-card-text class="px-0 pb-0 pt-5">
                      <h6 class="mb-0 weapon-name">{{ card.displayName }}</h6>
                      <!-- <p class="text-primary">1650 VP</p> -->
                    </v-card-text>
                  </v-row>
                </v-card>

                <div v-else></div>
              </router-link>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>

      <div class="my-16">
        <div class="d-flex justify-content-between align-center flex-wrap">
          <h2 class="mb-0">Get you favorite skins</h2>
          <a href="/allweapon" class="text-decoration-none text-white">
            View all <i class="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
        <v-row dense class="mt-5">
          <v-col
            v-for="card in randomWeaponCards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="rounded-lg">
              <a :href="card.tagLink" class="text-decoration-none text-white">
                <v-img
                  :src="card.src"
                  class="align-end rounded-lg exc-image"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0, 1)"
                >
                  <v-card-title>{{ card.title }}</v-card-title>
                </v-img>
              </a>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="mt-16">
        <div class="d-flex justify-content-between align-center flex-wrap">
          <h2 class="mb-0">Premium Bundles</h2>
          <a href="/features" class="text-decoration-none text-white">
            View all <i class="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
        <v-row dense class="mt-5">
          <v-col v-if="randomBundle" :key="randomBundle.uuid" :cols="12">
            <router-link
              :to="{
                name: 'BundleDetail',
                params: { displayName: randomBundle.displayName },
              }"
              class="text-decoration-none text-white bundle-card"
            >
              <v-card class="rounded-xl">
                <v-img
                  :src="randomBundle.displayIcon"
                  class="white--text align-end rounded-xl exc-image"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
                >
                  <div class="overlay">
                    <div class="overlay-text">
                      {{ randomBundle.displayName }}
                    </div>
                  </div>
                </v-img>
              </v-card>
            </router-link>
          </v-col>
          <v-col v-for="item in randomBundles" :key="item.uuid" :cols="6">
            <router-link
              :to="{
                name: 'BundleDetail',
                params: { displayName: item.displayName },
              }"
              class="text-decoration-none text-white bundle-card"
            >
              <v-card class="rounded-xl">
                <v-img
                  :src="item.displayIcon"
                  class="white--text align-end rounded-xl exc-image"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
                >
                  <div class="overlay">
                    <div class="overlay-text">
                      {{ item.displayName }}
                    </div>
                  </div>
                </v-img>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <div class="py-10 mt-16 bg-text">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-7 col-md-6 col-sm-12 mb-4">
            <p>Receive our exclusive news and discount.</p>
            <h2>Let's connect you to our best skins store.</h2>
            <v-form class="mt-10">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                dark
                required
              ></v-text-field>
              <v-btn class="btn btn-primary">Subscribe</v-btn>
            </v-form>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 mb-4 text-center">
            <img
              src="https://pbs.twimg.com/media/GLZS87Oa0AAIs9m.png"
              class="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NewArrival from "../components/NewArrival.vue";
import axios from "axios";
import { Weapons, Tags } from "@/data/Home";

export default {
  components: {
    // NewArrival,
  },

  data() {
    return {
      bundles: [],
      skins: [],
      contentTiers: [],
      randomFilteredSkins: [],
      selectedBundle: null,
      Weapons,
      Tags,
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
          this.selectedBundle = this.randomExclusiveBundle();
          const filteredSkins = this.filterSkinsByKeywords(this.skins, [
            "Vandal",
            "Phantom",
            "Operator",
          ]);

          let randomFilteredSkins = this.getRandomItems(filteredSkins, 6);
          randomFilteredSkins = randomFilteredSkins.filter(
            (skin) => skin.displayName !== "Standard"
          );
          this.randomFilteredSkins = randomFilteredSkins;
        }
      } catch (e) {
        console.log(e);
      }
    },
    filterSkinsByKeywords(skins, keywords) {
      return skins.filter((skin) =>
        keywords.some((keyword) => skin.displayName.includes(keyword))
      );
    },
    getRandomItems(array, num) {
      const shuffled = array.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    },
    randomExclusiveBundle() {
      const randomIndex = Math.floor(
        Math.random() * this.exclusiveBundles.length
      );
      return this.exclusiveBundles[randomIndex];
    },
    randomExclusiveBundles(excludeItem) {
      const filteredBundles = this.exclusiveBundles.filter(
        (bundle) => bundle.displayName !== excludeItem.displayName
      );
      const shuffledBundles = filteredBundles.sort(() => 0.5 - Math.random());
      return shuffledBundles.slice(0, 2);
    },
  },
  computed: {
    randomWeaponCards() {
      let shuffled = this.Weapons.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, 3);
    },
    exclusiveBundles() {
      return this.bundles.filter(
        (item) =>
          item.displayName.includes("Arcane") ||
          item.displayName.includes("Champions") ||
          item.displayName.includes("XERØFANG") ||
          item.displayName.includes("Ignite")
      );
    },
    randomBundles() {
      return this.randomExclusiveBundles(this.selectedBundle);
    },
    premiumBundles() {
      const premiumBundleName = [
        "RGX 11z Pro",
        "Araxys",
        "Spectrum",
        "Glitchpop",
        "ChronoVoid",
        "Prelude to Chaos",
        "Radiant Entertainment System",
        "Gaia's Vengeance",
        "Elderflame",
        "Imperium",
        "Singularity",
        "Neo Frontier",
        "Primordium",
        "Ruination",
        "Overdrive",
        "Kuronami",
        "Sentinels of Light",
        "Sovereign",
        "Mystbloom",
        "BlastX",
        "Protocol 781-A",
      ];

      // Filter the bundles to get only the premium bundles
      const premiumBundles = this.bundles.filter((bundle) =>
        premiumBundleName.includes(bundle.displayName)
      );

      // Shuffle the array using the Fisher-Yates algorithm
      for (let i = premiumBundles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [premiumBundles[i], premiumBundles[j]] = [
          premiumBundles[j],
          premiumBundles[i],
        ];
      }

      // Return only the first 5 elements
      return premiumBundles.slice(0, 5);
    },
  },
};
</script>

<style>
.carousel {
  border-radius: 1rem !important;
}

.v-application .elevation-8 {
  box-shadow: none !important;
}

.theme--dark.v-sheet {
  background: transparent;
  box-shadow: none !important;
}

.bg-text {
  background-color: #212121 !important;
}

.theme--light.v-chip:not(.v-chip--active) {
  background-color: #ff4655;
}

.v-chip .v-chip__content {
  color: #212121 !important;
}

.v-card--reveal {
  background-color: #ff4655;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.85;
  position: absolute;
  width: 100%;
}
</style>
