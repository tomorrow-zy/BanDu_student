<template>
  <div>
    <div class="commentlist-wrapper" v-for="(label,i) in list" :key="i" >
      <div class="header">
        <van-icon 
          class="comment-author"
          name="https://b.yzcdn.cn/vant/icon-demo-1126.png" 
          size="28px"
        />
        <div class="nickname">{{label.nickname}}</div>
      </div>
      <div class="comment-content">
        <span >{{label.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style scoped>
.commentlist-wrapper{
  padding: 5px;
}
.header{
  display: flex;
  margin: 10px 0 6px 0;
  height: 28px;
}
.nickname{
  font-size: 16px;
  line-height:28px;
}
.comment-author{
  margin-right: 5px;
}
.comment-content{
  margin-left: 30px;
  text-indent: 2em;
  font-family: KaiTi;
  font-size: 15px;
  line-height: 20px;
  padding-bottom: 20px;
  border-bottom:3px solid rgb(221, 220, 220);
}
</style>