<template>
  <div>
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
      const deluxeBundles = this.bundles.filter((bundle) =>
        deluxeBundleName.includes(bundle.displayName)
      );
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return deluxeBundles.slice(start, end);
    },
    totalPages() {
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
      const deluxeBundles = this.bundles.filter((bundle) =>
        deluxeBundleName.includes(bundle.displayName)
      );
      return Math.ceil(deluxeBundles.length / this.itemsPerPage);
    },
  },
};
</script>
