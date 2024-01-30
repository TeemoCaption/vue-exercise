<template>
    <!-- 新增的顯示區塊 -->
    <div class="info-preview">
        <p>Email: {{ email }}</p>
        <p>Password: {{ password.replace(/./g, '*') }}</p>
        <p>Role: {{ role }}</p>
        <p>Skills: {{ skills.join(', ') }}</p>
        <p>Terms accepted: {{ terms ? 'Yes' : 'No' }}</p>
    </div>
    <!--當表單提交時，加上.prevent會阻止表單的默認提交行為（即不會導致頁面重新加載）-->
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email">
        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label>Role:</label>
        <!--v-model="role"表示<select>元素的選中值將與Vue實例的role屬性進行雙向綁定，當用戶從下拉選單中選擇一個選項時，role屬性的值會更新為對應選項的value值-->
        <select v-model="role">
            <option value="developer">developer</option>
            <option value="designer">designer</option>
        </select>
        <label>Skills (press alt + comma to add):</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>我同意使用者隱私權政策和使用條款</label>
        </div>
        <div class="submit">
            <button>Create an Account</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: 'developer',
            terms: false,
            tempSkill: "",
            skills: [],
            passwordError: "",
        }
    },
    methods: {
        addSkill($event) {
            if ($event.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            // 從技能列表中移除指定的技能
            this.skills = this.skills.filter((item) => {
                // 只保留不等於要刪除的技能的元素
                return skill != item;
            });
        },
        handleSubmit() {
            // validate password
            this.passwordError = this.password.length > 5 ?
                "" : "Password must be at least 6 chars long.";
            console.log("Form submitted");
            if (!this.passwordError) {
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms accepted: ', this.terms)
            }
        }
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

button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

.info-preview {
    margin-top: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #eaeaea;
    border-radius: 5px;
}

.info-preview p {
    color: #333;
    font-size: 16px;
    margin: 10px 0;
}
</style>