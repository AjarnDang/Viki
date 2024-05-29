<template>
  <v-container class="mb-16">
    <b-breadcrumb class="mt-5 mb-10">
      <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="/allweapon">Weapon</b-breadcrumb-item>
      <b-breadcrumb-item :to="breadcrumbLink">{{ lastWord }}</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ weapon?.displayName }}</b-breadcrumb-item>
    </b-breadcrumb>
    <h2 class="mb-5">{{ weapon?.displayName }}</h2>
    <div v-if="weapon">
      <v-item-group>
        <div class="d-flex justify-content-center my-10">
          <img :src="currentImage" class="my-5 w-75" alt="Weapon Icon" />
        </div>

        <h3>Variants</h3>
        <v-row v-if="isValidItem(weapon)">
          <v-col
            v-for="(chroma, chromaIndex) in weapon.chromas"
            :key="chromaIndex"
            lg="3"
            md="6"
            sm="6"
            cols="6"
          >
            <v-card
              class="card bg-transparent shadow-none border-0 bg-text p-2 card-weapon"
              @click="handleItemClick(chroma)"
            >
              <v-card-text>
                <img
                  v-if="chroma.fullRender || chroma.displayIcon"
                  :src="chroma.fullRender || chroma.displayIcon"
                  class="white--text align-end mt-2 mb-5"
                  height="auto"
                  width="100%"
                />
                <div class="card-body p-0 text-white card-weapon-detail">
                  <h6 class="mb-0 text-secondary">{{ chroma.displayName }}</h6>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div v-else class="mb-0 text-primary bg-text p-4 rounded-lg h6">
          No Variants
        </div>
      </v-item-group>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <!-- <div>
      <h2 class="mt-16">See also</h2>
      <v-row v-if="randomFilteredSkins.length > 0">
        <v-col
          v-for="(card, index) in randomFilteredSkins"
          :key="index"
          lg="3"
          md="6"
          sm="6"
          cols="6"
        >
          <a
            :href="{
              name: 'weaponDetail',
              params: { displayName: card.displayName },
            }"
            class="text-decoration-none"
          >
            <v-card
              v-if="card.displayIcon"
              :color="dark"
              class="card bg-transparent shadow-none border-0 bg-text p-2 card-weapon"
              height="auto"
              width="300"
            >
              <v-card-text class="px-0 pb-0 pt-5">
                <v-img
                  :src="card.displayIcon"
                  class="w-100 rounded-lg mb-5 mt-3"
                ></v-img>
                <div class="card-body p-0 text-white card-weapon-detail">
                  <h6 class="mb-0 text-secondary">{{ card.displayName }}</h6>
                </div>
              </v-card-text>
            </v-card>
          </a>
        </v-col>
      </v-row>
      <div v-else>
        <p>No skins available</p>
      </div>
    </div> -->
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weapon: null,
      lastWord: null,
      currentImage: null,
      randomFilteredSkins: [],
    };
  },
  computed: {
    breadcrumbLink() {
      return `/${this.lastWord}`;
    },
  },
  async created() {
    const displayName = this.$route.params.displayName;
    try {
      const res = await axios.get(`https://valorant-api.com/v1/weapons/skins`);
      if (res.data.status === 200) {
        const skins = res.data.data;

        const weapon = skins.find((item) => item.displayName === displayName);
        this.weapon = weapon;
        if (weapon) {
          const words = weapon.displayName.split(" ");
          this.lastWord = words[words.length - 1];
        }

        // Randomly select 4 skins
        const randomIndices = [];
        while (
          randomIndices.length < 4 &&
          randomIndices.length < skins.length
        ) {
          const randomIndex = Math.floor(Math.random() * skins.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }

        // Populate randomFilteredSkins array with selected skins
        this.randomFilteredSkins = randomIndices.map((index) => skins[index]);
      }
    } catch (e) {
      console.log("Error fetching skins:", e);
      // Handle error here
    }
    this.currentImage = this.weapon ? this.weapon.displayIcon : null;
  },
  methods: {
    isValidItem(item) {
      if (item && item.chromas) {
        const validChromas = item.chromas.filter((chroma) => {
          return chroma.displayIcon !== null || chroma.fullRender !== null;
        });
        const validLevels = item.levels.filter((level) => {
          return level.levelItem !== null;
        });
        const hasValidChromas = validChromas.length > 1;
        const hasValidLevels = validLevels.length > 1;
        return hasValidChromas || hasValidLevels;
      }
      return false; // Return false if item or item.chromas is undefined
    },
    handleItemClick(chroma) {
      this.currentImage = chroma.fullRender || chroma.displayIcon;
    },
  },
};
</script>

<style>
.v-card__text {
  min-height: 40vh;
}
</style>
