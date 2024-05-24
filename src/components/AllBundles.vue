<template>
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
  </template>
  
  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        bundles: [],
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
      allBundles() {
        return this.bundles
      },
    },
  };
  </script>
  