<template>
  <v-container class="mb-16">
    <b-breadcrumb class="mt-5 mb-10">
      <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
    <b-breadcrumb-item href="/">Bundle</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ cleanedDisplayName }} Bundle</b-breadcrumb-item>
    </b-breadcrumb>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap mb-5"
    >
      <h2>{{ cleanedDisplayName }} Bundle</h2>
      <div>
        <a href="/bundle" class="text-decoration-none text-white">
          <i class="fa-solid fa-arrow-left mr-1"></i> Back
        </a>
      </div>
    </div>
    <img
      :src="detail.displayIcon"
      alt="Image"
      v-if="detail.displayIcon"
      class="w-100 rounded-lg"
    />
    <h3 class="mt-10">Weapon skins</h3>
    <v-row>
      <v-col
        lg="4"
        md="6"
        sm="6"
        cols="6"
        v-for="(skin, index) in matchingSkins"
        :key="index"
      >
        <div class="card bg-transparent shadow-none bg-text p-4 card-weapon">
          <img
            :src="skin.displayIcon"
            class="white--text align-end mt-2 mb-5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="auto"
            width="100%"
          />

          <div class="card-body p-0 text-white card-weapon-detail">
            <div>
              <h5 class="mb-0">{{ skin.displayName }}</h5>
              <!-- <p class="mb-0 text-primary">1650 VP</p> -->
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <h3 class="mt-10">Buddies</h3>
    <v-row v-if="matchingSprays.length > 0">
      <v-col
        lg="4"
        md="6"
        sm="6"
        cols="6"
        v-for="(buddy, index) in matchingBuddies"
        :key="index"
      >
        <div
          v-if="buddy.displayName"
          class="card bg-transparent shadow-none bg-text p-4 card-buddy"
        >
          <v-img
            :src="buddy.displayIcon"
            class="rounded-lg w-100"
            height="200"
            contain
          ></v-img>
          <h5 class="mt-3 mb-0 text-secondary">{{ buddy.displayName }}</h5>
          <p class="mb-0 text-primary">Exclusive only in Bundle</p>
        </div>
        <div
          v-else
          class="card bg-transparent shadow-none bg-text p-4 card-spray"
        >
          <p class="text-secondary">This bundle has no data</p>
        </div>
      </v-col>
    </v-row>
    <div v-else>
      <p class="text-secondary">No Buddy available in this bundle.</p>
    </div>

    <h3 class="mt-10">Sprays</h3>
    <v-row v-if="matchingSprays.length > 0">
      <v-col
        lg="4"
        md="6"
        sm="6"
        cols="6"
        v-for="(spray, index) in matchingSprays"
        :key="index"
      >
        <div
          v-if="spray.displayIcon && spray.displayIcon !== ''"
          class="card bg-transparent shadow-none bg-text p-4 card-spray"
        >
          <v-img
            :src="spray.displayIcon"
            class="rounded-lg w-100"
            height="200"
            contain
          ></v-img>
          <h5 class="mt-3 mb-0 text-secondary">{{ spray.displayName }}</h5>
          <p class="mb-0 text-primary">Exclusive only in Bundle</p>
        </div>
        <div v-else>
          <p class="text-secondary">This bundle has no data</p>
        </div>
      </v-col>
    </v-row>
    <div v-else>
      <p class="text-secondary">No Spray available in this bundle.</p>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "BundleDetail",
  data() {
    return {
      detail: null,
      matchingSkins: [],
    };
  },
  mounted() {
    this.fetchDetail();
  },
  methods: {
    async fetchDetail() {
      const displayName = this.$route.params.displayName;
      try {
        const bundleRes = await axios.get(
          "https://valorant-api.com/v1/bundles"
        );
        const skinRes = await axios.get(
          "https://valorant-api.com/v1/weapons/skins"
        );
        const buddiesRes = await axios.get(
          "https://valorant-api.com/v1/buddies"
        );
        const spraysRes = await axios.get("https://valorant-api.com/v1/sprays");

        if (bundleRes.data.status === 200 && skinRes.data.status === 200) {
          this.detail = bundleRes.data.data.find(
            (bundle) => bundle.displayName === displayName
          );
          this.matchingSkins = skinRes.data.data.filter((skin) =>
            skin.displayName.includes(displayName)
          );
          this.matchingBuddies = buddiesRes.data.data.filter((skin) =>
            skin.displayName.includes(displayName)
          );
          this.matchingSprays = spraysRes.data.data.filter((skin) =>
            skin.displayName.includes(displayName)
          );
        }
      } catch (error) {
        console.error(error);
      }
    },
    getCleanedDisplayName(displayName) {
      // Remove "Altitude " from displayName
      return displayName.replace("Altitude ", "");
    },
  },
  computed: {
    cleanedDisplayName() {
      if (this.detail) {
        return this.getCleanedDisplayName(this.detail.displayName);
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
/* Add styles as needed */
</style>
