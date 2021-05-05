<template>
  <div>
    <div class="content">
      <div class="content-wrapper">
        <div class="background">
        </div>
        <div class="user-head">
          <img class="user" src="/static/user/user-pic.png"/>
          <div class="user-name">{{username}}</div>
          <div class="user-saying">书山有路勤为径，学海无涯苦作舟。</div>
        </div>
        <div class="message">
          <div class="message-wrapper">
            <div class="message-content-head">
              <div :class="{'isClick':SystemMessage}" @click="SystemMessageClick">系统消息</div>
              <div :class="{'isClick':ChildMessage}" @click="ChildMessageClick">家长留言</div>
            </div>
            <div class="message-content">
              <MessageList :messageList="messageList"
              />
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
import MessageList from '../../components/message/MessageList'
import Bottom from '../../components/home/bottom'
import { getUserInfo, getStorageSync } from '../../services/wechat'
import {formatTime} from '../../utils/index'
export default {
  components: {
    MessageList,
    Bottom
  },
  data () {
    return {
      username: '',
      SystemMessage: true,
      ChildMessage: false,
      SystemMessageList: [],
      ChildMessageList: [],
      messageList: []
    }
  },
  methods: {
    SystemMessageClick () {
      this.SystemMessage = true
      this.ChildMessage = false
      this.messageList = this.SystemMessageList
    },
    ChildMessageClick () {
      this.SystemMessage = false
      this.ChildMessage = true
      this.messageList = this.ChildMessageList
    }
  },
  mounted () {
    var userInfo = getStorageSync('userInfo')
    this.username = userInfo.nickName
    getUserInfo().then(res => {
      this.SystemMessageList = res.result.data[0].system_message
      for (var i = 0; i < this.SystemMessageList.length; i++) {
        this.SystemMessageList[i].messageTime = formatTime(new Date(this.SystemMessageList[i].messageTime))
      }
      this.ChildMessageList = res.result.data[0].p_parent_message
      for (i = 0; i < this.ChildMessageList.length; i++) {
        this.ChildMessageList[i].messageTime = formatTime(new Date(this.ChildMessageList[i].messageTime))
      }
    })
  },
  watch: {
    SystemMessageList (newValue, preValue) {
      if (newValue !== preValue) {
        this.messageList = this.SystemMessageList
      }
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
.message {
  margin: 15px 15px 20px 15px; /*上右下左*/
  padding-bottom: 50px;
  border-radius: 15px;
  background-color: #fff;
}
.message-content-head {
  margin: 0 20px;
  padding: 0 20px 8px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
}
.message-content-head div {
  margin: 15px 1px 0px 1px;
  padding-bottom: 3px;
}
.isClick {
  border-bottom: 2.5px inset #0da0f5 !important;
}
.active {
  background-color: #87cce4 !important;
  color: white !important;
}
.content-head div:active {
  /*关键代码*/
  border-bottom: 3px solid rgb(72, 208, 241);
}
</style>