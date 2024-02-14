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
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect } from 'vue';
// component imports
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  /* 
  setup() 函數的主要用途是定義組件的響應式數據和函數，
  並將它們返回給模板或其他組合式 API 函數使用。
  發生在組件的生命周期之前，甚至在 beforeCreate 和 created 鉤子之前。
  */
  setup() {
    // 定義一個響應式參考來存儲帖子數據，初始為空陣列
    const posts = ref([]);

    // 定義一個響應式參考來存儲可能發生的錯誤信息，初始為 null
    const error = ref(null);

    // 定義一個異步函數用於從服務器加載帖子數據
    const load = async () => {
      try {
        // 使用 fetch API 向本地服務器請求帖子數據
        let data = await fetch('http://localhost:3000/posts');

        // 檢查 HTTP 請求是否成功
        if (!data.ok) {
          // 如果請求不成功，拋出錯誤
          throw Error('no available data');
        }
        // 將成功響應的 JSON 內容解析為 JavaScript 對象或陣列
        posts.value = await data.json();
        // 打印加載的帖子數據
        console.log(posts.value);
      } catch (err) {
        // 捕獲異步操作中發生的任何錯誤
        // 將錯誤信息存儲在響應式參考 error 中
        error.value = err.message;
        // 打印錯誤信息到控制台
        console.log(error.value);
      }
    };

    // 調用 load 函數以執行加載數據的操作
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
