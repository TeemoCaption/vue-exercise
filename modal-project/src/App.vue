<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">   <!--使用 ref 屬性給元素或子組件添加一個參考名稱-->
  <button @click="handleClick">Click me</button>
  <Modal></Modal>
</template>

<script>
import Modal from './components/Modal.vue';


export default {
  name: 'App',
  components:{
    Modal
  },
  data() {
    return {
      title: 'My first vue app :)',
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name);   // 通過 this.$refs 來訪問元素或子組件
      this.$refs.name.classList.add('active');  // 使用classList.add('...') 來添加一個class
      this.$refs.name.focus();  // focus() 聚焦在輸入框
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px
}
</style>
