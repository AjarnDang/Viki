<template>
  <v-container class="my-16">
    <div class="d-flex justify-content-between align-center flex-wrap">
      <h2 class="mb-0">{{ weaponName }}</h2>
      <router-link to="/" class="text-decoration-none text-white">
        <i class="fa-solid fa-arrow-left mr-1"></i> Back to Shop
      </router-link>
    </div>
    <v-row dense class="mt-5">
      <v-col
        lg="4"
        md="6"
        sm="6"
        cols="6"
        v-for="(item, index) in paginatedInfo"
        :key="index"
      >
        <div class="card bg-transparent shadow-none bg-text p-4 card-weapon">
          <img
            :src="item.displayIcon"
            class="white--text align-end mt-2 mb-5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="auto"
            width="100%"
          />
          <div class="card-body p-0 text-white card-weapon-detail">
            <div>
              <h5 class="mb-0">{{ item.displayName }}</h5>
              <p class="mb-0 text-primary">1650 VP</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      class="mt-4"
      @input="updatePage"
    ></v-pagination>
  </v-container>
</template>

<script>
export default {
  props: {
    weaponName: {
      type: String,
      required: true,
    },
    weaponData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.weaponData.length / this.itemsPerPage);
    },
    paginatedInfo() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.weaponData.slice(start, end);
    },
  },
  methods: {
    updatePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
