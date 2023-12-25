<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return {
            showBlock: false,
            timer: null,
            recationTime: 0,
        }
    },
    // 當組件完成了所有的初始化工作，並把處理好的 HTML 插入到頁面上相應的位置後，mounted() 生命週期鉤子就會被調用，mounted() 常常用來執行那些需要訪問或操作 DOM 的任務，只有在這個階段，組件的 DOM 結構才已經形成
    mounted(){  
        console.log('component mounted');
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
            //console.log(this.delay);
        },this.delay);
    },  
    methods: {
        startTimer(){
            this.timer = setInterval(() =>{  // 設定每10毫秒執行一次
                this.recationTime += 10;
            }, 10);
        },
        stopTimer(){
            clearInterval(this.timer);  // 清除計時器
            //console.log(this.recationTime);
            // $emit 用於觸發（emit）一個事件。這個方法主要用於子組件，以便通知其父組件某件事情已經發生。第二個參數是要傳遞的數據
            this.$emit('end',this.recationTime);  
        }
    },  
    // updated() 是一個生命週期鉤子，當組件的數據發生變更，並且重新渲染 DOM 之後被調用。
    updated(){
        console.log('component updated');
    },
    unmounted(){  // unmounted() 是生命週期鉤子之一，在組件被從 DOM 中移除後調用，確保在組件消失時，與之相關的所有資源都能被適當地清理，以避免內存不足。
        console.log('unmounted');
    },
}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    background:  #0faf87;;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>