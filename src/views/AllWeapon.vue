<template>
  <v-container class="mb-16">
    <b-breadcrumb :items="WeaponBC" class="mt-5 mb-10"></b-breadcrumb>
    <div class="d-flex justify-content-between align-center flex-wrap mb-5">
      <h2>All you need.</h2>
      <a to="/" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back
      </a>
    </div>
    <div
      class="pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
    >
      <h5 class="text-primary mb-0">Pistols</h5>
    </div>
    <v-row class="mb-10">
      <v-col
        v-for="(info, index) in pistol"
        :key="index"
        lg="4"
        md="6"
        sm="6"
        cols="6"
      >
        <v-card dark class="pa-8 bottom-gradient" width="100%" :to="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name text-secondary">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>


    <div
      class="pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
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
        <v-card dark class="pa-8 bottom-gradient" width="100%" :to="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name text-secondary">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
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
        <v-card dark class="pa-8 bottom-gradient" width="100%" :to="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name text-secondary">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
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
        <v-card dark class="pa-8 bottom-gradient" width="100%" :to="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name text-secondary">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>


    <div
      class="pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
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
        <v-card dark class="pa-8 bottom-gradient" width="100%" :to="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name text-secondary">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
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
        <v-card dark class="pa-8 bottom-gradient" width="100%" :to="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name text-secondary">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div
      class="pt-5 d-flex justify-content-between align-center flex-wrap flex-wrap mt-5 mb-3"
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
        <v-card dark class="pa-8 bottom-gradient" width="100%" :to="info.link">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="info.img" class="w-100 rounded-lg mb-5 mt-3"></v-img>
            <v-card-text class="px-0 pb-0 pt-5">
              <h6 class="mb-0 weapon-name text-secondary">{{ info.name }}</h6>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { pistol, smg, shotgun, rifle, sniper, melee, heavy } from "@/data/Weapons";
import { WeaponBC } from "@/data/Breadcrump";

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
      WeaponBC,
    };
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
