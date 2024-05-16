<template>
  <v-container class="my-16">
    <h2 class="mb-0">Quality works</h2>
    <p class="mb-10">Since 2022 - Present</p>

    <v-tabs dark class="rounded-lg">
      <v-tab> Projects </v-tab>
      <v-tab> Small Projects </v-tab>

      <v-tab-item class="mt-3">
        <Works />
      </v-tab-item>

      <v-tab-item class="mt-6">
        <SmallWorks />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import SmallWorks from '../components/SmallWorks.vue';
import Works from "../components/Works.vue";

export default {
  components: {
    Works,
    SmallWorks,
  },
}

</script>

<style>
.theme--light.v-tabs-items {
  background: transparent !important;
}

.theme--dark.v-tabs > .v-tabs-bar,
.theme--light.v-tabs > .v-tabs-bar {
  background: transparent !important;
}
</style>
