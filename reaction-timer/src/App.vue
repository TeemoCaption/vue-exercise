<template>
  <h1>Edward Reaction timer</h1>
  <button @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
  <p>Reaction time: {{ score }}ms</p>
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
      score: null,
      showResults: null,
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      //console.log(this.delay);
      /*setTimeout(() => {
        this.isPlaying = true;
      }, this.delay);*/
    },
    endGame(recationTime){
      this.score = recationTime;
      this.isPlaying = false;
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
