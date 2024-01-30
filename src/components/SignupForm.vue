<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email">
        <label>Password:</label>
        <input type="password" required v-model="password">
        <label>Role:</label>
        <!--v-model="role"表示<select>元素的選中值將與Vue實例的role屬性進行雙向綁定，當用戶從下拉選單中選擇一個選項時，role屬性的值會更新為對應選項的value值-->
        <select v-model="role">
            <option value="dveloper">web dveloper</option>
            <option value="designer">web designer</option>
        </select>
        <label>Skills:</label>
        <input type="text" v-model="tempSkill" @keyup.enter="addSkills">
        <!-- :key是一個特殊的屬性，用於給列表中每個項目指定一個唯一的識別鍵（key）。-->
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span> 
        </div>


        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>我同意使用者隱私權政策和使用條款</label>
        </div>
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms accepted: {{ terms }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: "edwardbbbxxx@gmail.com",
            password: "",
            role: "",
            terms: false,
            tempSkill: "",
            skills: [],
        }
    },
    methods: {
        addSkills(e) {
            console.log(e);
            // 檢查是否按下了Enter鍵
            if (e.key === "Enter" && this.tempSkill) {
                // 防止表單提交
                e.preventDefault();
                // 檢查技能是否已經存在於列表中
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill); // 添加技能到列表
                }
                this.tempSkill = ''; // 清空臨時技能輸入
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item) => {
                return skill != item;
            });
        },
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
</style>