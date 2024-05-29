<template>
    <v-container class="mb-16">
      <b-breadcrumb :items="Bulldog" class="mt-5 mb-10"></b-breadcrumb>
      <div class="d-flex justify-content-between align-center flex-wrap">
        <h2 class="mb-0">Bulldog</h2>
        <a href="/allweapon" class="text-decoration-none text-white">
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
                  <div v-if="getContentTier(item.contentTierUuid)">
                    <p class="text-secondary d-flex align-items-center mt-2 mb-1">
                      <img
                        :src="getContentTier(item.contentTierUuid)?.displayIcon"
                        width="20"
                        class="mr-2"
                      />
                      {{ getContentTier(item.contentTierUuid)?.displayName }}
                    </p>
                  </div>
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
  import { Bulldog } from "@/data/Breadcrump";
  import axios from "axios";
  
  export default {
    data() {
      return {
        Bulldog,
        info: [],
        contentTiers: [],
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
    async mounted() {
      this.getImage();
      this.getContentTiers();
    },
    methods: {
      async getImage() {
        try {
          const res = await axios.get(`https://valorant-api.com/v1/weapons/skins`);
          if (res.data.status === 200) {
            const filteredData = res.data.data.filter(
              (item) => item.displayName.includes("Bulldog") && item.displayIcon != null
            );
            this.info = filteredData;
          }
        } catch (e) {
          console.log(e);
        }
      },
      async getContentTiers() {
        try {
          const res = await axios.get(`https://valorant-api.com/v1/contenttiers`);
          if (res.data.status === 200) {
            this.contentTiers = res.data.data;
          }
        } catch (e) {
          console.log(e);
        }
      },
      getContentTier(uuid) {
        const tier = this.contentTiers.find((tier) => tier.uuid === uuid);
        return tier ? { displayName: tier.displayName, displayIcon: tier.displayIcon } : null;
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
  