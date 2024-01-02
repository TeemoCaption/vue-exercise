<template>
  <h1>Edward Reaction timer</h1>
  <button @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
  <Results v-if="showResults" :score="score"></Results>
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';


export default {
  name: 'App',
  components: {
    Block,Results
  },
  data(){
    return{
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
      //console.log(this.delay);
      /*setTimeout(() => {
        this.isPlaying = true;
      }, this.delay);*/
    },
    endGame(recationTime){
      this.score = recationTime;
      this.isPlaying = false;
      this.showResults = true;
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
