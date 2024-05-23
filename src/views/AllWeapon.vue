<template>
  <v-container class="my-16">
    <div class="d-flex justify-content-between align-center flex-wrap mb-5">
      <h2>All you need.</h2>
      <a href="/" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back
      </a>
    </div>
    <div
      class="border-top pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">Pistols</h5>
      <!-- <a href="/vandal" class="text-decoration-none text-white">
          View all <i class="fa-solid fa-arrow-right ml-1"></i>
        </a> -->
    </div>

    <!-- <v-sheet
        class="mx-auto shadow-none mt-5"
        elevation="8"
        color="transparent"
        dark
      >
        <v-slide-group v-model="model" active-class="success" show-arrows>
          <v-slide-item v-for="(info, index) in pistol" :key="index">
            <v-card
              :color="dark"
              class="pa-8 ma-3 bottom-gradient"
              height="auto"
              width="300"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-img
                  :src="info.img"
                  class="w-100 rounded-lg mb-5 mt-3"
                ></v-img>
                <v-card-text class="px-0 pb-0 pt-5">
                  <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
                </v-card-text>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet> -->
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in pistol"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" height="230" width="100%" :href="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>


    <div
      class="border-top pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">SMGs</h5>
    </div>
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in smg"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" height="230" width="100%" :href="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="border-top pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">Shotguns</h5>
    </div>
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in shotgun"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" height="230" width="100%" :href="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="border-top pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">Rifles</h5>
    </div>
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in rifle"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" height="230" width="100%" :href="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>


    <div
      class="border-top pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">Snipers</h5>
    </div>
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in sniper"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" height="230" width="100%" :href="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="border-top pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">Heavys</h5>
    </div>
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in heavy"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" height="230" width="100%" :href="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="border-top pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">Melee</h5>
    </div>
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in melee"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" height="230" width="100%" :href="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from "axios";
import { pistol, smg, shotgun, rifle, sniper, melee, heavy } from "@/components/Weapons";

export default {
  name: "AllProduct",
  data() {
    return {
      info: [], // Initialize as an empty array
      pistol,
      smg,
      shotgun,
      rifle,
      sniper,
      heavy,
      melee,
    };
  },
  mounted() {
    this.getWeapon();
  },
  methods: {
    async getWeapon() {
      try {
        const res = await axios.get(
          "https://valorant-api.com/v1/weapons/skins"
        );
        if (res.data.status === 200) {
          this.info = res.data.data; // Store all data
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    odinInfo() {
      return this.info
        .filter((item) => item.displayName.includes("Odin"))
        .slice(0, 10);
    },
    vandalInfo() {
      return this.info
        .filter((item) => item.displayName.includes("Vandal"))
        .slice(0, 10);
    },
    phantomInfo() {
      return this.info
        .filter((item) => item.displayName.includes("Phantom"))
        .slice(0, 10);
    },
    operatorInfo() {
      return this.info
        .filter((item) => item.displayName.includes("Operator"))
        .slice(0, 10);
    },
    spectreInfo() {
      return this.info
        .filter((item) => item.displayName.includes("Spectre"))
        .slice(0, 10);
    },
  },
};
</script>

<style>
.v-application .elevation-8 {
  box-shadow: none !important;
}

.theme--dark.v-sheet {
  /* background: transparent !important; */
  box-shadow: none !important;
}

.theme--dark.v-sheet {
  /* background-color: rgba(255, 70, 85, 0.1); */
  background-color: #212121;
}

.weapon-name {
  position: absolute;
  bottom: 1rem;
}
</style>
