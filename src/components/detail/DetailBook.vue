<template>
  <div class="detail-info">
    <div class="detail-info-l">
      <div class="book-img">
        <BookCard :src="book && book.src"></BookCard>
      </div>
    </div>
    <div class="detail-info-r">
      <div class="1st">
        <div class="book-title">{{booktitle}}</div>
        <button class="add-shelf">加入书架</button>
      </div>
      <div class="2nd">
        <div class="book-author">作者：{{book.author}}</div>
      </div>
      <div class="book-labels">
        <span v-for="(label,i) in book.labels" :key="i" >{{label}}</span>
      </div>
      <div class="4th">
        <div class="detail-stat-rate-wrapper">
          <van-rate
          value="9.5"
          :size="14"
          color="#FF9900"
          void-color="#DEE0E2"
          void-icon="star"
          >
          </van-rate>
          <span class="detail-stat-rate">9.5分</span>
        </div>
        <div class="reading-practice">
          <img class="practice-label" src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/detail/u187.png">
          <div class="practice-text">阅读练习</div>
        </div>
      </div> 
    </div>

  </div> 
</template>

<script>
  import BookCard from './BookCardInDetail'
  export default {
    components: {
      BookCard
    },
    props: {
      book: Object,
      booktitle: String
    },
    data () {
      return {
      }
    },
    methods: {
      getBookLabels () {
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
.detail-info {
  display: flex;
  padding: 15px 20px 10px 20px; 

}
.detail-info-l {
 padding-right: 10px;
}
.detail-info-r {
  flex-direction: column;
}
.detail-info-r div{
  display: flex;
}
.add-shelf{
  padding: 0;
  width: 85px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  background-color: rgb(116,187,243);
}
.book-title {
  font-size: 16px;
  height: 22px;
  width: 150px;
  line-height: 22px;
  font-weight: 500;
  overflow: hidden;
  color: #000;
  text-overflow: clip;
}
.book-author {
  margin: 0 100px 0 0;
  font-size: 12px;
  overflow: hidden;
  color: rgb(146, 145, 145);
  text-overflow: clip;
}
.book-labels span{
  border-radius:5px;
  width: 35px;
  height: 16px;
  display: inline-block;
  margin: 30px 10px 5px 0;
  font-size: 10px;
  line-height:16px;
  text-align: center;
  overflow: hidden;
  color: #666;
  text-overflow: clip;
  background-color: skyblue;
}
.detail-stat-rate-wrapper{
  display: flex;
}
.detail-stat-rate{
  margin: 2px 30px 0 5px;
  font-size: 15px;
  font-weight: 500;
}
.practice-label{
  width: 18px;
  height: 18px;
}
.practice-text{
  margin: 5px 0 0 5px;
  font-size: 10px;
}
</style>