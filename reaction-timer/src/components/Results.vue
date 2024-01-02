<template>
  <p>Reaction time - {{ score }} ms</p>
  <p class="rank">{{ rank }}</p> 
</template>

<script>
export default {
    props: ['score'],
    data() {
      return{
        rank: null,
      }
    },
    mounted(){
      if(this.score<250){
        this.rank = "你很強!";
      }else if(this.score<400){
        this.rank = "反應得很快!";
      }else {
        this.rank = "可以再快點!";
      }
    },
}
</script>

<style>
.rank{
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>