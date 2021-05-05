<template>
  <div class="message-wrapper">
    <div class="message-list-inner">
      <div
        class="message-one"
        v-for="(message,index) in messageList"
        :key="index"
      >
        <div class="message-nt-wrapper">
          <div class="message-name" v-if="message && message.messageName">{{message.messageName}}</div>
          <div class="message-time" v-if="message && message.messageTime">{{message.messageTime}}</div>
        </div>
        <div class="message-content" v-if="message && message.messageContent">{{message.messageContent}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    messageList: Array
  }
}
</script>

<style scoped>
.message-wrapper {
  padding: 0px 15px 0 15px;
}
.message-one {
  margin: 8px 8px 13px 8px; /*上右下左*/
  border-bottom: 2.2px solid #cccccc;
}
.message-nt-wrapper {
  display: flex;
  padding: 0 1px 4px 1px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.message-name {
  font-size: 15px;
}
.message-time {
  font-size: 13px;
  color: #999999;
}
.message-content {
  padding: 10px;
  font-size: 15px;
  color: #666666;
  text-indent: 2em;
}
</style>