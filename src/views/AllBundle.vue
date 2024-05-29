<template>
  <v-container class="mb-16">
    <b-breadcrumb :items="Bundle" class="mt-5 mb-10"></b-breadcrumb>
    <div class="d-flex justify-content-between align-center flex-wrap mb-5">
      <h2>Flawless beauty</h2>
      <a to="/" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back
      </a>
    </div>

    <v-tabs dark class="rounded-lg">
      <v-tab> All Bundles </v-tab>
      <v-tab> Exclusive Edition </v-tab>
      <v-tab> Ultra Edition </v-tab>
      <v-tab> Premium Bundles </v-tab>
      <v-tab> Deluxe Bundles </v-tab>
      <!-- <v-tab> Select Bundles </v-tab> -->
      <v-tab> Give/Run Back </v-tab>

      <v-tab-item class="mt-6">
        <AllBundles />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <ExclusiveBundles />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <UltraBundles />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <PremuimBundles />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <DeluxeBundles />
      </v-tab-item>

      <!-- <v-tab-item class="mt-6">
        <SelectBundles />
      </v-tab-item> -->

      <v-tab-item class="mt-6">
        <RunbackBundles />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import axios from "axios";
import { Bundle } from "@/data/Breadcrump";
import AllBundles from "@/components/AllBundles";
import ExclusiveBundles from "@/components/ExclusiveBundles";
import UltraBundles from "@/components/UltraBundles";
import PremuimBundles from "@/components/PremuimBundles.vue";
import DeluxeBundles from "@/components/DeluxeBundles";
import RunbackBundles from "@/components/RunbackBundles.vue";
// import SelectBundles from "@/components/SelectBundles";

export default {
  name: "AllProduct",
  components: {
    AllBundles,
    ExclusiveBundles,
    UltraBundles,
    PremuimBundles,
    DeluxeBundles,
    // SelectBundles,
    RunbackBundles,
  },
  data() {
    return {
      Bundle,
      bundles: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [bundleRes] = await Promise.all([
          axios.get("https://valorant-api.com/v1/bundles"),
        ]);

        if (bundleRes.data.status === 200) {
          this.bundles = bundleRes.data.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
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

.v-application .primary {
  background-color: var(--primary) !important;
  border-color: var(--primary) !important;
  color: var(--white) !important;
}

.theme--light.v-pagination .v-pagination__item {
  background-color: var(--gray);
  color: var(--text);
}

.theme--light.v-pagination .v-pagination__navigation {
  background: var(--gray);
}
</style>
