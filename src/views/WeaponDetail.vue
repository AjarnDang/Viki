<template>
  <v-container class="mb-16">
    <b-breadcrumb class="mt-5 mb-10">
      <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="/allweapon">Weapon</b-breadcrumb-item>
      <b-breadcrumb-item :href="breadcrumbLink">{{ lastWord }}</b-breadcrumb-item>
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
            <div
              class="card bg-transparent shadow-none border-0 bg-text p-2 card-weapon"
              @click="handleItemClick(chroma)"
            >
              <div class="card-body p-0 text-white card-weapon-detail">
                <div>
                  <div>
                  <img
                    v-if="chroma.fullRender || chroma.displayIcon"
                    :src="chroma.fullRender || chroma.displayIcon"
                    class="mt-2 mb-5"
                    height="auto"
                    width="100%"
                  />
                </div>
                  <h6 class="mb-0 text-secondary">
                    {{ chroma.displayName }}
                  </h6>
                </div>
              </div>
            </div>
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
