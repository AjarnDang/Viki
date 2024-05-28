<template>
  <v-container class="mb-16">
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
    };
  },
  async created() {
    const displayName = this.$route.params.displayName;
    try {
      const res = await axios.get(`https://valorant-api.com/v1/weapons/skins`);
      if (res.data.status === 200) {
        this.weapon = res.data.data.find(
          (item) => item.displayName === displayName
        );
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
