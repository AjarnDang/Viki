<template>
  <div>
    <v-row>
      <v-col
        cols="6"
        sm="6"
        md="4"
        v-for="(item, index) in paginatedPremiumBundles"
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
          <h6 class="mt-3 mb-0 text-secondary">{{ item.displayName }} Bundle</h6>
          <div class="mt-1 d-flex align-content-center">
            <!-- <img :src="item.tierIcon" class="tier-icon mr-2" alt="Tier Icon" width="20" /> 
            <span class="text-secondary">{{ item.tier }}</span> -->
          </div>
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

<script>import axios from "axios";

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
    getTierInfo(displayName) {
      let tierInfo = { name: "Unknown Edition", icon: "" };
      const ultraBundleNames = [
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

      if (ultraBundleNames.includes(displayName)) {
        tierInfo = this.contentTiers.find(tier => tier.displayName === "Ultra Edition") || tierInfo;
      }

      return { name: tierInfo.displayName, icon: tierInfo.displayIcon };
    },
  },
  computed: {
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
      return this.bundles
        .filter((bundle) =>
          premiumBundleName.includes(bundle.displayName)
        )
        .map((bundle) => {
          const tierInfo = this.getTierInfo(bundle.displayName);
          return {
            ...bundle,
            tier: tierInfo.name,
            tierIcon: tierInfo.icon,
          };
        });
    },
    paginatedPremiumBundles() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.premiumBundles.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.premiumBundles.length / this.itemsPerPage);
    },
  },
};

</script>
