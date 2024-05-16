<template>
  <v-col cols="12" class="mb-3 rounded-lg bg-text">
          <v-card
            class="mx-auto bg-text p-3 border-0"
            max-width="100%"
            outlined
          >
            <h5 class="mb-0 text-white">Calculator</h5>
            <p class="text-secondary">Rules : input number range 1 - 100.</p>
            <v-text-field
              dark
              name="name"
              label="Enter Number"
              id="name"
              v-model="name"
              class="text-white"
            ></v-text-field>
            <v-btn
              rounded-lg
              class="text-white bg-primary mb-2 px-4"
              @click="callAlertParam(name)"
              >ENTER</v-btn
            >
          </v-card>
        </v-col>
</template>

<script>
export default {
    name: "SmallWorks",

    methods: {
    callAlert() {
      alert("โฮ่ง");
    },
    callAlertParam(item) {
      if (item >= 80 && item <= 100) {
        alert("A");
      } else if (item >= 70 && item <= 79) {
        alert("B");
      } else if (item >= 60 && item <= 69) {
        alert("C");
      } else if (item >= 50 && item <= 59) {
        alert("D");
      } else if (item >= 0 && item <= 49) {
        alert("F");
      } else {
        alert("กรอกเลขตั้งแต่ 0-100 เท่านั้นจ้าพี่");
      }
    },
  },

}
</script>

<style>

</style>