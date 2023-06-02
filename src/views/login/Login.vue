<template>
  <div class="login">
    <div class="title">
      StarBucks 登录
    </div>
    <el-form :v-model="loginForm" label-width="80">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-button @click="login" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const loginForm = reactive({
  userName: '',
  password: ''
})

function login() {
  router.push({ path: '/main'})
}
</script>

<style lang="scss">
root {
  --starbucks-bg-color: lightcyan;
  --starbucks-color: rgb(81, 216, 150);
}

.login {
  background-color: var(--starbucks-bg-color);
  color: var(--starbucks-color);
  height: 400px;
  width: 350px;
  left: 20%;
  border: 1px solid lightcyan;
  padding: 5px;

  .title {
    font-size: 18px;
    font-weight: bold;
    color: var(--starbucks-color);
    text-align: center;
    padding: 15px 0;
  }

  .el-button {
    width: calc(100% - 80px);
    float: right;
  }
}
</style>
