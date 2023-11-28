const app = Vue.createApp({ //創建一個新的應用
    // data, function
    // template: 用於定義應用的 HTML 結構。可包含了 HTML 標籤、數據綁定和指令
    // template: '<h2>I am a template</h2>'   
    data() { // 變數定義
        return { // 動態填入文字，類似Laravel
            url: "https://google.com",
            books: [
                { title: "name of wind", author: "edward", img: "assets/1.jpg", isFav: true },
                { title: "name of wind", author: "edward", img: "assets/2.jpg", isFav: false },
                { title: "name of wind", author: "edward", img: "assets/3.jpg", isFav: true },
            ],
            showBooks: true,
            x: 0,
            y: 0,
        }
    },
    methods: { // methods內加入要觸發的事件
        changeTitle(title) {
            //this.title = "Words of Randiance"
            this.title = title
        },
        toggleShowBooks() { // 改變摺疊狀態
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX; // 獲取滑鼠事件 - 座標X偏移量
            this.y = e.offsetY;
        },
        changeFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }

})

app.mount('#app') //將創建的應用配置渲染在容器元素內