<template>
  <div>
    <h1>Simple Component</h1>
    <h2>{{ name }}</h2>
    <v-btn @click="callMain()">callMain</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'

export default {
    props:['name'],
    mounted() {
        EventBus.$on('SimComCallAlert', this.$SimComAlert)
    },
    methods: {
        callMain() {
            this.$emit('callAlert')
        }
    },
    SimComAlert() {
        alert('เหมียว')
    }
}
</script>

<style>

</style>