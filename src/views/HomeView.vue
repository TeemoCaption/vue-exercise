<template>
  <div class="home">
    <h1>home</h1> 
    <div v-for="name in names" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref, reactive } from 'vue';

export default {
  name: 'HomeView',
  /* 
  setup() 函數的主要用途是定義組件的響應式數據和函數，
  並將它們返回給模板或其他組合式 API 函數使用。
  發生在組件的生命周期之前，甚至在 beforeCreate 和 created 鉤子之前。
  */
  setup() {  
    // computed() 接收一個返回值的函數作為參數，該返回值就是計算屬性的結果
    const names = ref(['teemo','edward','miku','meow'])

    return {  }
  },
  /*
  當同時使用 setup() 函數和 data() 選項時，
  data() 中定義的屬性會覆蓋 setup() 函數返回的同名屬性。  
  */ 
  data(){
    return {
      
    }
  }
}
</script>
