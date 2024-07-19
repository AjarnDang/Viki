<template>
  <v-container class="mb-16">
    <b-breadcrumb :items="Contact" class="mt-5 mb-10"></b-breadcrumb>
    <v-row>
      <v-col lg="6" md="6" sm="12" cols="12">
        <h1>Contact me</h1>
        <p class="d-flex">
          Let's get in touch. &nbsp;
          <a href="https://banny.vercel.app/" target="_blank" class="text-primary text-decoration-none"
            >About me<i class="fa-solid fa-arrow-up-right-from-square ml-2 text-primary"></i
          ></a>
        </p>
        <CardSocialVue />
      </v-col>
      <v-col lg="6" md="6" sm="12" cols="12" class="d-flex justify-content-end">
        <img src="../assets/img/me-2.png" alt="Hero Image" width="90%" class="object-fit-contain"/>
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
