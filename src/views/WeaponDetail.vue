<template>
  <v-container class="mb-16">
    <b-breadcrumb class="mt-5 mb-10">
      <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item to="/allweapon">Weapon</b-breadcrumb-item>
      <b-breadcrumb-item :to="breadcrumbLink" >{{ lastWord }}</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ weapon.displayName }}</b-breadcrumb-item>
    </b-breadcrumb>
    <h2 class="mb-5">{{ weapon.displayName }}</h2>
    <div v-if="weapon">
      <img :src="weapon.displayIcon" alt="Weapon Icon" />
      <p>{{ weapon.description }}</p>
      <!-- Add more details as needed -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weapon: null,
      lastWord: null,
    };
  },
  computed: {
    breadcrumbLink() {
      return `/${this.lastWord}`;
    }
  },
  async created() {
    const displayName = this.$route.params.displayName;
    try {
      const res = await axios.get(`https://valorant-api.com/v1/weapons/skins`);
      if (res.data.status === 200) {
        const weapon = res.data.data.find(
          (item) => item.displayName === displayName
        );
        this.weapon = weapon;
        if (weapon) {
          const words = weapon.displayName.split(" ");
          this.lastWord = words[words.length - 1];
        }
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
