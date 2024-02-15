import { ref } from 'vue'

const getPost = () => {
  // 定義一個響應式參考來存儲帖子數據，初始為空陣列
  const posts = ref([]);

  // 定義一個響應式參考來存儲可能發生的錯誤信息，初始為 null
  const error = ref(null);

  // 定義一個異步函數用於從服務器加載帖子數據
  const load = async () => {
    try {
      // 使用 fetch API 向本地服務器請求帖子數據
      let data = await fetch("http://localhost:3000/posts");

      // 檢查 HTTP 請求是否成功
      if (!data.ok) {
        // 如果請求不成功，拋出錯誤
        throw Error("no available data");
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
  return { posts, error, load }
};

export default getPost;
