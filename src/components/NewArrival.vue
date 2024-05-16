<template>
  <div class="mb-16">
    <div class="d-flex justify-content-between flex-wrap align-end">
      <div>
        <h2 class="mb-0">New Arrivals</h2>
        <p class="mb-0">The best assets for you</p>
      </div>
      <a href="/allproduct" class="text-decoration-none text-white">
        View all <i class="fa-solid fa-arrow-right ml-1"></i>
      </a>
    </div>

    <v-sheet
      class="mx-auto shadow-none mt-5"
      color="transparent"
      dark
    >
      <v-slide-group v-model="model" active-class="success" show-arrows>
        <v-slide-item v-for="(item, index) in Vandal" :key="index">
          <v-card :color="dark" class="ma-4" height="auto" width="300">
            <v-row class="fill-height" align="center" justify="center">
              <v-img
                :src="item.img"
                class="w-100 rounded-lg"
                height="180px"
              ></v-img>
              <v-card-text class="px-0">
                <h5 class="mb-0">{{ item.name }}</h5>
                <p class="text-primary">{{ item.price }} VP</p>
              </v-card-text>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "NewArival",
  data() {
    return {
      Vandal: [
        {
          name: "Reaver Vandal",
          price: "1650",
          img: "https://fbi.cults3d.com/uploaders/21595173/illustration-file/46148bbb-d608-415c-ba77-33de66c34842/Valorant-Reaver-Collection-Vandal-HD.jpg",
        },
        {
          name: "RGX Vandal",
          price: "2350",
          img: "https://valorantstrike.com/wp-content/uploads/Valorant-RGX-11Z-Pro-Collection-Vandal-Yellow.jpg",
        },
        {
          name: "Chronoviod Vandal",
          price: "2350",
          img: "https://valorantstrike.com/wp-content/uploads/Valorant-Chronovoid-Collection-Vandal-HD.jpg",
        },
        {
          name: "Eldenflame Vandal",
          price: "2350",
          img: "https://valorantstrike.com/wp-content/uploads/2020/07/Valorant-Elderflame-Collection-Vandal-HD.jpg",
        },
        {
          name: "Sentinel of Light Vandal",
          price: "1650",
          img: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/01/an-image-of-the-sentinels-of-light-vandal-in-valorant.jpg",
        },
        {
          name: "Prime Vandal",
          price: "1650",
          img: "https://pbs.twimg.com/media/FU1iI1hUsAAxQYP.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
