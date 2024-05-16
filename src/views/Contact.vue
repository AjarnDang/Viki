<template>
  <v-container class="my-16">
    <v-row>
      <v-col lg="6" md="6" sm="12" cols="12">
        <p>Let's get in touch.</p>
        <h1>Contact me</h1>
        <CardSocialVue />
      </v-col>
      <v-col lg="6" md="6" sm="12" cols="12" class="d-flex justify-content-end">
        <img
            src="../assets/img/me-2.png"
            alt="Hero Image"
            width="90%"
          />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardSocialVue from "@/components/CardSocial.vue";

export default {
  components: {
    CardSocialVue,
  },
};
</script>

<style></style>
