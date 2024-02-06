<template>
  <div class="home">
    <h1>home</h1> 
    <h2>Ref</h2>
    <p>My name is {{ edwardOne.name }} and my age is {{ edwardOne.age }}</p>
    <button @click="updateEdwardOne">Click me</button>
    <h2>Reactive</h2>
    <p>{{ edwardTwo.name }} - {{ edwardTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateEdwardTwo">Click me</button>
  </div>
</template>

<script>
import { ref,reactive } from 'vue';

export default {
  name: 'HomeView',
  /* 
  setup() 函數的主要用途是定義組件的響應式數據和函數，
  並將它們返回給模板或其他組合式 API 函數使用。
  發生在組件的生命周期之前，甚至在 beforeCreate 和 created 鉤子之前。
  */
  setup() {  
    const edwardOne = ref({name: 'edward', age: 19})
    //const name = ref("edward");
    //const age = ref(22);
    const edwardTwo = reactive({name: 'teemo', age:40});
    const nameOne = ref('edward');
    const nameTwo = ref('teemo');

    const updateEdwardOne = ()=>{
      edwardOne.value.age = 21;
    }

    const updateEdwardTwo = ()=>{
      edwardTwo.age = 35;
      //nameTwo = "edward";
    }
    return { edwardOne, edwardTwo, nameOne, nameTwo, updateEdwardOne, updateEdwardTwo }
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
