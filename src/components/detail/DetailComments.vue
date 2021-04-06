<template>
  <div class="comments-wrapper">
    <div class="comments-title">
      名家点评
      <img src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/detail/u103.png" class="under-line">
    </div>
    <CommentList :list="comments"/>
  </div>
</template>

<script>
import CommentList from './CommentList'
export default {
  components: {
    CommentList
  },
  props: {
    comments: Array
  }
}
</script>

<style>
.comments-wrapper{
  padding: 20px 20px 50px 20px;
  background-color: white;
}
.comments-corner{
  display: flex;
  float: right;
}
.comments-text{
  font-size: 15px;
  font-weight:1000;
  margin-right: 10px;
  margin-top: 10px;
}
.comments-label{
  height: 30px;
  width: 30px;
}
.comments-title {
  margin-top: 20px;
  position: relative;
  font-size: 20px;
  color: #333333;
  width: 80px;
  height: 30px;
  font-family: KaiTi;
}
.under-line{
  position: absolute;
  top: 23px;
  left: 1px;
  height: 10px;
  width: 75px;
}
</style>