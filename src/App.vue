<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from '@/components/Footer.vue';

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: #3e3e3e;
  border-radius: 0.5rem;
  cursor: pointer;
}

.v-application ul,
.v-application ol {
  padding-left: 0;
}

.breadcrumb-item a {
  color: var(--secondary) !important;
  text-decoration: none;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: var(--secondary) !important;
}

.breadcrumb-item.active span {
  color: var(--primary) !important;
}

.v-tabs-slider {
  background-color: var(--primary) !important;
}

</style>
