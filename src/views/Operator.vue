<template>
  <v-container class="my-16">
    <div class="d-flex justify-content-between align-center flex-wrap">
      <h2 class="mb-0">Operator</h2>
      <a href="/Shop" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back to Shop
      </a>
    </div>
    <v-row dense class="mt-5">
      <v-col
        lg="4"
        md="6"
        sm="6"
        cols="6"
        v-for="(info, index) in info"
        :key="index"
      >
        <div class="card bg-transparent shadow-none bg-text p-4 card-weapon">
          <img
            :src="info.displayIcon"
            class="white--text align-end mt-2 mb-5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="auto"
            width="100%"
          />

          <div class="card-body p-0 text-white card-weapon-detail">
            <div>
              <h5 class="mb-0">{{ info.displayName }}</h5>
              <p class="mb-0 text-primary">1650 VP</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    this.getImage();
  },
  methods: {
    async getImage() {
      await axios
        .get(`https://valorant-api.com/v1/weapons/skins`)
        .then((res) => {
          if (res.data.status == 200) {
            const filteredData = res.data.data.filter((item) =>
              item.displayName.includes("Operator") && item.displayIcon != null
            );
            this.info = filteredData; // Limit to first 10 items
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>

</style>
