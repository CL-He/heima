<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <hminput
          placeholder="请输入用户名/手机号"
          v-model="users.username"
          :rules="/^1\d{10}$/"
          msg_err="手机号输入不合法,请输入11位手机号"
        ></hminput>
        <hminput type="password" v-model="users.password"></hminput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <!-- 使用 -->
      <hmbutton text="登录" @click="login"></hmbutton>
    </div>
  </div>
</template>

<script>
// 引入按钮文件
import hmbutton from '@/components/hm-button.vue'
// 引入输入框文件
import hminput from '@/components/hm-input.vue'
// 引入登录api方法
import {userLogin} from '@/api/users.js'

export default {
  data () {
    return {
      users: {
        username: '',
        password: ''
      }
    }
  },
  // 注册
  components: {
    hmbutton,
    hminput
  },
  methods: {
    login (event) {
       userLogin(this.users)
       .then(err=>{
         console.log(res);
         if(res.data.message==='登录成功'){
          //  登录成功之后进行跳转

         }else{
           this.$toast.fail(res.data.message)
         }
       })
       .catch(err=>{
         console.log(err);
         this.$toast.fail('登录失败,请重试')
       })
    },
    handlerinput (data) {
      this.users.username = data
    }
  }
}
</script>

<style lang='less'>
.container {
  padding: 20px;
  height: 100vh;
  background-color: rgb(242, 242, 242);
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
