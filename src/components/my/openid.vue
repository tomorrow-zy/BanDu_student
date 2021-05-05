<template>
  <div class="background" v-show="!IsLogin">
    <div class="logincard">
      <div class="title">学生ID</div>
      <button type='primary' @click="getUserProfile" class="loginbutton">授权登录</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openid: String
  },
  data () {
    return {
    }
  },
  methods: {
    getUserProfile () {
      this.$emit('getUserProfile')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.background{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0,0.7);
  z-index: 10;
}
.logincard{
  border-radius: 15px;
  margin: 170px 80px 0 80px; /*上右下左*/
  padding: 15px 15px 15px 15px;
  background: #fff;
  height: 130px;
}
.title{
  margin: 0 0 50px 0; /*上右下左*/
  text-align: center;
  font-size: 20px;
}
</style>
