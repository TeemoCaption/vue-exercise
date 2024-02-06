<template>
  <div class="home">
    home
    <p ref="">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  /* 
  setup() 函數的主要用途是定義組件的響應式數據和函數，
  並將它們返回給模板或其他組合式 API 函數使用。
  發生在組件的生命周期之前，甚至在 beforeCreate 和 created 鉤子之前。
  */
  setup() {  
    console.log(this);
    let name = "edward";
    let age = 22;

    const p = ref(null);

    const handleClick = ()=>{
      console.log(p,p.value);
      p.value.classList.add("test");

    }
    return { name,age,handleClick,p }
  },
  /*
  當同時使用 setup() 函數和 data() 選項時，
  data() 中定義的屬性會覆蓋 setup() 函數返回的同名屬性。  
  */ 
  data(){
    return {
      name: 'Teemo',
      age: 20,
    }
  }
}
</script>
