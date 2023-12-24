<template>
  <h1>Edward Reaction timer</h1>
  <button @click="start">Start</button>
  <Block v-if="isPlaying" :delay="delay"></Block>
</template>

<script>
import Block from './components/Block.vue';

export default {
  name: 'App',
  components: {
    Block
  },
  data(){
    return{
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    start(){
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
      console.log(this.delay);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
