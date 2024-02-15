<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchighNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect } from 'vue';
// component imports
import PostList from '../components/PostList.vue'
import getPost from '../composables/getPosts';
import Spinner from '../components/Spinner.vue'


export default {
  name: 'HomeView',
  components: { PostList, Spinner },
  /* 
  setup() 函數的主要用途是定義組件的響應式數據和函數，
  並將它們返回給模板或其他組合式 API 函數使用。
  發生在組件的生命周期之前，甚至在 beforeCreate 和 created 鉤子之前。
  */
  setup() {
    const { posts, error, load } = getPost();
    load();

    const search = ref('');
    const names = ref(['teemo', 'edward', 'miku', 'meow'])

    // watch() 需要明確指定它所依賴的數據源，並且只有在指定的數據源變化時才執行回調函數。
    const stopWatch = watch(search, () => {
      console.log("watch function");
    });
    // watchEffect 會自動追蹤回調函數中用到的所有響應式數據，並在這些數據變化時重新執行回調函數。
    const stopEffect = watchEffect(() => {
      console.log("watchEffect function", search.value);
    });

    // computed() 接收一個返回值的函數作為參數，該返回值就是計算屬性的結果
    const matchighNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));  // 過濾符合條件的資料
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    }
    return { posts, error, names, search, matchighNames, handleClick }
  },
  /*
  當同時使用 setup() 函數和 data() 選項時，
  data() 中定義的屬性會覆蓋 setup() 函數返回的同名屬性。  
  */
  data() {
    return {

    }
  }
}
</script>
