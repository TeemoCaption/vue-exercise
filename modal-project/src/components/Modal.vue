<template>
     <!--@click.self 只有當事件是直接在該元素上觸發（而不是其子元素上）時，事件才會被執行。-->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale'}">  <!--條件表達式-->
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default{  // export 導出物件
    // prop 是一種允許從父組件向子組件傳遞資料的機制，當父組件使用這個子組件時，它可以通過屬性的方式向這三個 prop 傳遞數據。
    props: ['header','text','theme'],  
    methods: {
        closeModal(){  // 關閉模態框
            this.$emit('close');  // $emit 用於觸發（emit）一個事件。這個方法主要用於子組件，以便通知其父組件某件事情已經發生。
        },
    },
}

</script>

<style> /* scoped 設置css樣式作用域*/
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal h1{
    color:#03cfb4;
    border: none;
    padding: 0px;
}

.modal p{
    font-style: normal;
}

.modal.sale{
    background-color: crimson;
    color: white;
}

.modal.sale h1{
    background-color: crimson;
    color: white;
}
</style>