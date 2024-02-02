<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <!-- params: 傳遞路由參數。 -->
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [],
        }
    },
    // 當組件完成了所有的初始化工作，並把處理好的 HTML 插入到頁面上相應的位置後，mounted() 生命週期鉤子就會被調用，mounted() 常常用來執行那些需要訪問或操作 DOM 的任務，只有在這個階段，組件的 DOM 結構才已經形成
    mounted(){
        // 使用 fetch API 向本地伺服器的 '/jobs' 端點發送 GET 請求
        
        fetch('http://localhost:3000/jobs')
            .then((res)=> res.json())  // 得到響應後，將響應體（Response Body）解析為 JSON 格式
            .then(data => this.jobs = data)  // 將解析後的 JSON 數據（即 'jobs' 數據）賦值給組件的 'jobs' 屬性
            .catch(err => console.log(err.message))
        }       
}
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>