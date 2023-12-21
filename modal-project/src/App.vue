<template>
  <h1>{{ title }}</h1>
  <p>Welcome....</p>
  <input type="text" ref="name">   <!--使用 ref 屬性給元素或子組件添加一個參考名稱-->
  <button @click="handleClick">Click me</button>
  <div v-if="showModal">
    <!-- v-bind的縮寫是「:」，用於動態地綁定一個或多個屬性，或者一組屬性到表達式-->
    <!-- 在使用子組件(Modal.vue)的地方用 @close 或 v-on:close 來監聽這個「close」事件 -->
    <Modal :header="header" :text="hello" theme="sale" @close="togleModal"></Modal>  
  </div>
  <button @click.alt="togleModal">open Modal(alt)</button>
</template>

<script>
import Modal from './components/Modal.vue';


export default {  // export 導出物件
  name: 'App',
  components:{  // components 屬性用於在 Vue 實例或組件中註冊子組件
    Modal
  },
  data() {
    return {
      title: 'My first vue app :)',
      header: 'Sign up for the giveaway!',
      text: 'hello',
      showModal: false,
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name);   // 通過 this.$refs 來訪問元素或子組件
      this.$refs.name.classList.add('active');  // 使用classList.add('...') 來添加一個class
      this.$refs.name.focus();  // focus() 聚焦在輸入框
    },
    togleModal() {
      this.showModal = !this.showModal;
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
