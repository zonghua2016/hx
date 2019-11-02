<template>
  <div>
    {{errData}}
    <ul>
      <li v-for="user of nodeData"
          :key="user._id">
        <span>{{user.title}}</span>
        <span>{{user.description}}</span>
        <span>{{user.url}}</span>
      </li>
    </ul>
    <!-- {{nodeData}} -->
    <span class="btn"
          @click="login">登录</span>
    <span class="btn"
          @click="getAllUsers">所有用户</span>
    <span class="btn"
          @click="loginout">退出登录</span>
  </div>
</template>
<script>
import axios from 'api/axios'
export default {
  data() {
    return {
      errData: '',
      nodeData: ''
    }
  },
  methods: {
    login() {
      axios.post('/login', { username: 'zs', password: '123' }).then(res => {
        this.$cookie.set('authorization', res.data.data, 30);
        alert('登录成功')
      })
    },
    loginout(){
      this.$cookie.delete('authorization')
    },
    getAllUsers() {
      axios.get('/users', {}, { 'authorization': this.$cookie.get('authorization') }).then(res => {
        if (res.data.code === 200) {
          this.nodeData = res.data.data.users;
        } else {
          this.errData = res.data.msg;
        }
      })
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss">
li {
  span {
    border-right: 1px solid #000;
  }
}
span.btn {
  display: inline-block;
  padding: 20px 60px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #000;
}
</style>