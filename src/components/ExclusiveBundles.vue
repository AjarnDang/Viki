<template>
  <div>
    <v-row>
      <v-col
        cols="6"
        sm="6"
        md="4"
        v-for="(item, index) in paginatedExclusiveBundles"
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

    <div class="d-flex justify-content-center mt-10">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        @input="changePage"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bundles: [],
      skins: [],
      contentTiers: [],
      currentPage: 1,
      itemsPerPage: 21,
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
    changePage(page) {
      this.currentPage = page;
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
        "Prime//2.0",
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
    paginatedExclusiveBundles() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.exclusiveBundles.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.exclusiveBundles.length / this.itemsPerPage);
    },
  },
};
</script>
