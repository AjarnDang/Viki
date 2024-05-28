<template>
  <v-container class="mb-16">
    <b-breadcrumb :items="Contact" class="mt-5 mb-10"></b-breadcrumb>
    <v-row>
      <v-col lg="6" md="6" sm="12" cols="12">
        <h1>Contact me</h1>
        <p>Let's get in touch.</p>
        <CardSocialVue />
      </v-col>
      <v-col lg="6" md="6" sm="12" cols="12" class="d-flex justify-content-end">
        <img src="../assets/img/me-2.png" alt="Hero Image" width="90%" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Contact } from "@/data/Breadcrump";
import CardSocialVue from "@/components/CardSocial.vue";

export default {
  components: {
    CardSocialVue,
  },
  data() {
    return {
      Contact,
    };
  },
};
</script>

<style></style>
