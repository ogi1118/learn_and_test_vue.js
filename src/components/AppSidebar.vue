<!-- components/AppSidebar.vue -->
<template>
  <div class="appsidebar">
    <button class="mypage-button">マイページ</button>
    <ul>
      <li><a href="#">ホーム</a></li>
      <li><a href="#">アバウト</a></li>
      <li><a href="#">サービス</a></li>
      <li><a href="#">お問い合わせ</a></li>
      <li v-for="(item, index) in userContent" :key="index">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
    <div class="add-content">
      <input type="text" v-model="newContent" placeholder="新しい項目を追加" @keyup.enter="addContent" />
      <button @click="addContent">追加</button>
    </div>
    <button class="setting-button">設定</button>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  data() {
    return {
      newContent: "",
      userContent: []
    };
  },
  methods: {
    addContent() {
      if (this.newContent.trim() !== "") {
        this.userContent.push(this.newContent.trim());
        this.newContent = ""; // 入力フィールドをクリア
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
