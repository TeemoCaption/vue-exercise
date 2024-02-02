<template>
    <div v-if="job">
        <h1>Job Details Page</h1>
        <p>{{ job.title }}</p>
        <!--
            $route：Vue Router 注入到每個 Vue 實例中的一個對象，它包含當前路由資訊，如路徑、查詢參數、路由參數等。
            $route：對象中的一個屬性，它是一個對象，包含當前路由的所有動態片段和全匹配片段。 
            params：對象中的一個屬性，其名稱應與路由配置中定義的參數名相匹配。例如，如果有一條路由定義為 /user/:id，那麼 :id 就是一個動態路由參數，可以通過 $route.params.id 訪問它的值。
        -->
        <p>The job id is {{ id }}</p>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Job is loading</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: {},
        }
    },
    // 當組件完成了所有的初始化工作，並把處理好的 HTML 插入到頁面上相應的位置後，mounted() 生命週期鉤子就會被調用，mounted() 常常用來執行那些需要訪問或操作 DOM 的任務，只有在這個階段，組件的 DOM 結構才已經形成
    mounted() {
        // 使用 fetch API 向本地伺服器的 '/jobs' 端點發送 GET 請求
        fetch('http://localhost:3000/jobs/' + this.id)
            .then((res) => res.json())  // 得到響應後，將響應體（Response Body）解析為 JSON 格式
            .then(data => this.job = data)  // 將解析後的 JSON 數據（即 'jobs' 數據）賦值給組件的 'jobs' 屬性
            .catch(err => console.log(err.message))
    }
}
</script>

<style></style>