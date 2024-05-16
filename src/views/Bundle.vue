<template>
  <v-container class="my-16">
    <div class="d-flex justify-content-end align-center flex-wrap mb-5">
      <a href="/Shop" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back to Shop
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

    <h3 class="mt-16 mb-0">
      Get your favorite
      <h3 class="d-inline text-primary">VCT Team</h3>
    </h3>

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
                <v-card-text class="px-0 pb-0 text-center">
                  <p class="mb-0 weapon-name text-secondary">
                    {{ item.displayName }}
                  </p>
                </v-card-text>
              </v-row>
            </v-card>
          </router-link>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <v-tabs dark class="rounded-lg mt-16">
      <v-tab> All Bundles </v-tab>
      <v-tab> Exclusive Edition </v-tab>
      <v-tab> Premium Edition </v-tab>
      <v-tab> Deluxe Bundles </v-tab>
      <v-tab> Select Bundles </v-tab>
      <v-tab> Give/Run Back </v-tab>

      <v-tab-item class="mt-3">
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="4"
            v-for="(item, index) in allBundles"
            :key="index"
          >
            <router-link
              class="links"
              :to="{
                name: 'BundleDetail',
                params: { displayName: item.displayName },
              }"
            >
              <v-img
                :src="item.displayIcon"
                class="rounded-lg w-100"
                height="200"
              ></v-img>
              <p class="mt-3 text-secondary">{{ item.displayName }} Bundle</p>
            </router-link>
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item class="mt-3">
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="4"
            v-for="(item, index) in exclusiveBundles"
            :key="index"
          >
            <router-link
              class="links"
              :to="{
                name: 'BundleDetail',
                params: { displayName: item.displayName },
              }"
            >
              <v-img
                :src="item.displayIcon"
                class="rounded-lg w-100"
                height="200"
              ></v-img>
              <p class="mt-3 text-secondary">{{ item.displayName }} Bundle</p>
            </router-link>
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item class="mt-3">
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="4"
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
              <v-img
                :src="item.displayIcon"
                class="rounded-lg w-100"
                height="200"
              ></v-img>
              <p class="mt-3 text-secondary">{{ item.displayName }} Bundle</p>
            </router-link>
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item class="mt-6">
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="4"
            v-for="(item, index) in deluxeBundles"
            :key="index"
          >
            <router-link
              class="links"
              :to="{
                name: 'BundleDetail',
                params: { displayName: item.displayName },
              }"
            >
              <v-img
                :src="item.displayIcon"
                class="rounded-lg w-100"
                height="200"
              ></v-img>
              <p class="mt-3 text-secondary">{{ item.displayName }} Bundle</p>
            </router-link>
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item class="mt-6">
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="4"
            v-for="(item, index) in selectBundles"
            :key="index"
          >
            <router-link
              class="links"
              :to="{
                name: 'BundleDetail',
                params: { displayName: item.displayName },
              }"
            >
              <v-img
                :src="item.displayIcon"
                class="rounded-lg w-100"
                height="200"
              ></v-img>
              <p class="mt-3 text-secondary">{{ item.displayName }} Bundle</p>
            </router-link>
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item class="mt-6">
        <v-row>
          <v-col
            cols="6"
            sm="6"
            md="4"
            v-for="(item, index) in runbackBundles"
            :key="index"
          >
            <router-link
              class="links"
              :to="{
                name: 'BundleDetail',
                params: { displayName: item.displayName },
              }"
            >
              <v-img
                :src="item.displayIcon"
                class="rounded-lg w-100"
                height="200"
              ></v-img>
              <p class="mt-3 text-secondary">{{ item.displayName }} Bundle</p>
            </router-link>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AllProduct",
  data() {
    return {
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
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
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
      return this.bundles.filter((bundle) =>
        premiumBundleName.includes(bundle.displayName)
      );
    },

    deluxeBundles() {
      const deluxeBundleName = [
        "Xenohunter",
        "Neptune",
        "Origin",
        "Radiant Crisis 001",
        "Forsaken",
        "Soulstrife",
        "Elderflame",
        "Prime",
        "Black.Market",
        "Magepunk",
        "Valiant Hero",
        "Crimsonbeast",
        "Ion",
        "Oni",
        "Cryostasis",
        "Gravitational Uranium Neuroblaster",
        "Reaver",
        "Recon",
        "Prime",
        "Prime//2.0"
      ];
      return this.bundles.filter((bundle) =>
        deluxeBundleName.includes(bundle.displayName)
      );
    },

    runbackBundles() {
      return this.bundles.filter(
        (item) =>
          item.displayName.includes("Run Back") ||
          item.displayName.includes("Run It Back") ||
          item.displayName.includes("Give Back")
      );
    },

    exclusiveBundles() {
      const deluxeBundle = new Set([
        ...this.matchingBundles.map((item) => item.displayName),
        ...this.premiumBundles.map((item) => item.displayName),
        ...this.deluxeBundles.map((item) => item.displayName),
        ...this.selectBundles.map((item) => item.displayName),
        ...this.runbackBundles.map((item) => item.displayName),
      ]);
      return this.bundles.filter((item) => !deluxeBundle.has(item.displayName));
    },

    selectBundles() {
      const selectBundle = new Set([
        ...this.filteredBundles.map((item) => item.displayName),
        ...this.vctBundles.map((item) => item.displayName),
        ...this.matchingBundles.map((item) => item.displayName),
        ...this.premiumBundles.map((item) => item.displayName),
        ...this.deluxeBundles.map((item) => item.displayName),
        ...this.runbackBundles.map((item) => item.displayName),
      ]);

      return this.bundles.filter((item) => !selectBundle.has(item.displayName));
    },

    allBundles() {
      const excludedDisplayNames = new Set([
        ...this.filteredBundles.map((item) => item.displayName),
        ...this.vctBundles.map((item) => item.displayName),
        ...this.matchingBundles.map((item) => item.displayName),
      ]);

      return this.bundles.filter(
        (item) => !excludedDisplayNames.has(item.displayName)
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
