<!-- src/components/AppSidebar.vue -->
<template>
  <div class="appsidebar">
    <button class="mypage-button">マイページ</button>
    <ul>
      <li><router-link to="/">ホーム</router-link></li>
      <li><router-link to="/about">アバウト</router-link></li>
      <li><router-link to="/services">サービス</router-link></li>
      <li><router-link to="/contact">お問い合わせ</router-link></li>
      <li v-for="content in userContent" :key="content">
        <router-link :to="{ name: 'NewItem', params: { pageTitle: content } }">{{ content }}</router-link>
      </li>
    </ul>
    <div class="add-content">
      <input v-model="newContent" placeholder="新しい項目名を入力" />
    <button @click="addContent">登録</button>
    </div>
    <button class="setting-button">設定</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContent: "",
      userContent: JSON.parse(localStorage.getItem('userContent')) || [], // ローカルストレージから読み込み
    };
  },
  methods: {
    addContent() {
      if (this.newContent.trim() !== "") {
        this.userContent.push(this.newContent.trim());
        this.newContent = ""; // 入力フィールドをクリア
        localStorage.setItem('userContent', JSON.stringify(this.userContent)); // ローカルストレージに保存
      }
    }
  }
};
</script>



<style scoped>
.appsidebar {
  height: 100%;
  background-color: #f4f4f4;
  padding: 0;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  width: 200px;
  position: relative;
}

.setting-button {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: #9f9c9c;
  color: #fff;
  text-align: center;
}

.mypage-button{
  width: 100%;
  background-color: #9f9c9c;
  color: #fff;
  height: 60px;
  border: none;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: underline;
}

.add-content {
  padding: 10px;
}

.add-content input {
  width: calc(100% - 80px);
  padding: 5px;
  margin-right: 5px;
}

.add-content button {
  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

.add-content button:hover {
  background-color: #555;
}
</style>
