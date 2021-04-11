<template>
  <div>
    <div class="content">
      <div class="content-wrapper">
        <div class="user-head">
          <img class="user" src="/static/user/user-pic.png"/>
          <div class="user-name">{{username}}</div>
          <div class="user-saying">{{signature}}</div>
        </div>
        <div class="functions">
          <div class="functions-wrapper">
            <div class="border">
              <div>我的信息</div>
              <div @click="showOpenId">家长绑定</div>
              <div>家长约定</div>
            </div>
            <div class="non-border">
              <div>意见反馈</div>
            </div>
          </div>
        </div>
        <div class="others">
          <div class="functions-wrapper">
            <div class="border">
              <div>设置</div>
            </div>
            <div class="non-border">
              <div>关于我们</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <Bottom/>
    </div>
  </div>
</template>

<script>
import Bottom from '../../components/home/bottom'
import { getStorageSync } from '../../services/wechat'
export default {
  components: {
    Bottom
  },
  data () {
    return {
      money: 0,
      username: '',
      signature: '',
      stoptime: Date
    }
  },
  methods: {
    showOpenId () {
      var op = getStorageSync('openid')
      wx.showModal({
        title: '提示',
        content: op,
        success (res) {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  background: inherit;
  background-color: #65a4d5;
  box-sizing: border-box;
}
.content-wrapper {
  margin: 10px 35px 0 35px;
}
.user-head {
  width: 100%;
  text-align: center;
}
.user {
  margin-top: 18px;
  width: 50px;
  height: 50px;
}
.user-name {
  margin-top: 5px;
  font-size: 16px;
  color: #fff;
}
.user-saying {
  margin-top: 7px;
  font-size: 16px;
  color: #fff;
}
.functions {
  margin: 15px 15px 0 15px; /*上右下左*/
  /* height: 200px; */
  border-radius: 15px;
  background-color: #fff;
}
.functions-wrapper{
  padding:3px 20px 10px 20px; /*上右下左*/
}
.functions-wrapper div{
  font-size:17px;
}
.border div{
  border-bottom: 2.2px solid #cccccc;
  padding:8px 10px 8px 15px;
}
.non-border div{
  padding:8px 10px 6px 15px;
}
.others{
  margin: 15px 15px 0 15px; /*上右下左*/
  height: 80px;
  border-radius: 15px;
  background-color: #fff;
}
</style>