<template>
    <h1>Job Details Page</h1>
    <!--
            $route：Vue Router 注入到每個 Vue 實例中的一個對象，它包含當前路由資訊，如路徑、查詢參數、路由參數等。
            $route：對象中的一個屬性，它是一個對象，包含當前路由的所有動態片段和全匹配片段。 
            params：對象中的一個屬性，其名稱應與路由配置中定義的參數名相匹配。例如，如果有一條路由定義為 /user/:id，那麼 :id 就是一個動態路由參數，可以通過 $route.params.id 訪問它的值。
        -->
    <p>The job id is {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
    // data(){
        // return {
            // id: this.$route.params.id,
        // }
    // }
}
</script>

<style></style>