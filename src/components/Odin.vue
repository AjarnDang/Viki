<template>
  <WeaponList :weaponName="'Odin'" :weaponData="info" />
</template>

<script>
import axios from "axios";
import WeaponList from "../views/WeaponList.vue";

export default {
  components: {
    WeaponList,
  },
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get("https://valorant-api.com/v1/weapons/skins");
        if (res.data.status === 200) {
          this.info = res.data.data.filter(
            (item) => item.displayName.includes("Odin") && item.displayIcon != null
          );
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
