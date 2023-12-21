<template>
    <!--@click.self 只有當事件是直接在該元素上觸發（而不是其子元素上）時，事件才會被執行。-->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }"> <!--條件表達式-->
            <!--使用「插槽」-->
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {  // export 導出物件
    // prop 是一種允許從父組件向子組件傳遞資料的機制，當父組件使用這個子組件時，它可以通過屬性的方式向這三個 prop 傳遞數據。
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal() {  // 關閉模態框
            this.$emit('close');  // $emit 用於觸發（emit）一個事件。這個方法主要用於子組件，以便通知其父組件某件事情已經發生。
        },
    },
}

</script>

<style> /* scoped 設置css樣式作用域*/
 .modal {
     width: 400px;
     padding: 20px;
     margin: 200px auto;
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

 .modal h1 {
     color: #03cfb4;
     border: none;
     padding: 0;
 }

 .modal p {
     font-style: normal;
 }

 .modal .actions {
     text-align: center;
     margin: 30px 0 10px 0;
     color: #333;
 }

 .modal .actions a {
     color: #333;
     padding: 8px;
     border: 1px solid #eee;
     border-radius: 4px;
     text-decoration: none;
     margin: 10px;
 }

 /* sale styles */
 .modal.sale {
     background: crimson;
     color: white;
 }

 .modal.sale h1 {
     color: white;
 }

 .modal.sale .actions {
     color: white;
 }

 .modal.sale .actions a {
     color: white;
 }</style>