<template>
  <v-container class="mb-16">
    <b-breadcrumb :items="Spectre" class="mt-5 mb-10"></b-breadcrumb>
    <div class="d-flex justify-content-between align-center flex-wrap">
      <h2 class="mb-0">Spectre</h2>
      <a to="/allweapon" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back
      </a>
    </div>
    <v-row dense class="mt-5">
      <v-col
        lg="4"
        md="6"
        sm="6"
        cols="6"
        v-for="(item, index) in paginatedInfo"
        :key="index"
      >
        <router-link
          :to="{
            name: 'weaponDetail',
            params: { displayName: item.displayName },
          }"
          class="text-decoration-none"
        >
          <div class="card bg-transparent shadow-none bg-text p-4 card-weapon">
            <img
              :src="item.displayIcon"
              class="white--text align-end mt-2 mb-5"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="auto"
              width="100%"
            />
            <div class="card-body p-0 text-white card-weapon-detail">
              <div>
                <div
                  v-if="isValidItem(item)"
                  class="mb-0 text-primary d-inline-flex justify-content-evenly flex-wrap"
                >
                  <div
                    class="px-3 py-2 my-3 mr-2 bg-dark rounded"
                    v-for="(chroma, chromaIndex) in item.chromas"
                    :key="chromaIndex"
                  >
                    <img
                      v-if="chroma.fullRender || chroma.displayIcon"
                      :src="chroma.fullRender || chroma.displayIcon"
                      width="50"
                    />
                  </div>
                </div>
                <div v-else class="mb-0 text-primary">No Varients</div>
                <h5 class="mb-0">{{ item.displayName }}</h5>
              </div>
            </div>
          </div>
        </router-link>
      </v-col>
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      class="mt-4"
      @input="updatePage"
    ></v-pagination>
  </v-container>
</template>

<script>
import { Spectre } from "@/data/Breadcrump";
import axios from "axios";

export default {
  data() {
    return {
      Spectre,
      info: [],
      currentPage: 1,
      itemsPerPage: 21, // Number of items per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.info.length / this.itemsPerPage);
    },
    paginatedInfo() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.info.slice(start, end);
    },
  },
  mounted() {
    this.getImage();
  },
  methods: {
    async getImage() {
      try {
        const res = await axios.get(
          `https://valorant-api.com/v1/weapons/skins`
        );
        if (res.data.status === 200) {
          const filteredData = res.data.data.filter(
            (item) =>
              item.displayName.includes("Spectre") && 
              item.displayIcon != null
          );
          this.info = filteredData;
        }
      } catch (e) {
        console.log(e);
      }
    },
    updatePage(page) {
      this.currentPage = page;
    },
    isValidItem(item) {
      const validChromas = item.chromas.filter((chroma) => {
        return chroma.displayIcon !== null || chroma.fullRender !== null;
      });
      const validLevels = item.levels.filter((level) => {
        return level.levelItem !== null;
      });
      const hasValidChromas = validChromas.length > 1;
      const hasValidLevels = validLevels.length > 1;
      return hasValidChromas || hasValidLevels;
    },
  },
};
</script>

<style>
.v-application .primary {
  background-color: var(--primary) !important;
  border-color: var(--primary) !important;
  color: #eeeeee !important;
}
.theme--light.v-pagination .v-pagination__item {
  background: #eeeeee;
  color: #212121;
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
