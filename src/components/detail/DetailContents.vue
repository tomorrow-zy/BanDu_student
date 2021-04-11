<template>
  <div class="detail-contents-wrapper"> 
    <div class="detail-contents-title">
      书籍简介
      <img src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/detail/u103.png" class="under-line">
      </div>
    <div class="detail-contents">
      <div class="brief-intro">{{book.shortIntro}}</div>
      <div class="infor">
        <div>分类：{{book.catagory}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      book: Object
    },
    methods: {
    }
  }
</script>

<style scope>
  .detail-contents-wrapper {
    padding:20px;
  }
  .detail-contents-title {
    position: relative;
    padding: 5px 8px 8px;
    font-size: 20px;
    color: #333333;
    width: 80px;
    height: 30px;
    font-family: KaiTi;
    border-radius: 10px;
    background-color: rgba(255,255,255, 0.5);
  }
  .under-line{
    position: absolute;
    top: 28px;
    left: 10.5px;
    height: 10px;
    width: 75px;
  }
  .detail-contents {
    margin-top: -10px;
    padding: 15px 12px;
    border-radius: 10px;
    background-color: #fff; 
  }
  .brief-intro{
    text-indent: 2em;
    font-family: KaiTi;
    font-size: 16px;
    line-height: 25px;
  }
  .infor{
    padding: 20px 0 0 30px;
    font-family: SimHei;
    font-size: 14px;
    font-weight: 1000;
    margin-bottom: 5px;
  }
</style>