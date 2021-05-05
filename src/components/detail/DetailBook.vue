<template>
  <div class="detail-info">
    <div class="detail-info-l">
      <div class="book-img">
        <BookCard :src="book && book.src"></BookCard>
      </div>
    </div>
    <div class="detail-info-r">
      <div class="1st">
        <div class="book-title">{{book.title}}</div>
        <button
          :class="isInShelf ? 'detail-btn-remove' : 'detail-btn-shelf'"
          round
          @click="handleShelf"
        >
          {{isInShelf ? '移出书架' : '加入书架'}}
        </button>
      </div>
      <div class="2nd">
        <div class="book-author">作者：{{book.author}}</div>
      </div>
      <div class="book-labels">
        <span v-for="(label,i) in book.label" :key="i" >{{label}}</span>
      </div>
      <div class="4th">
        <div class="detail-stat-rate-wrapper">
          <span class="detail-stat-rate">轻点评分：</span>
          <van-rate
          :value="rateValue"
          :size="14"
          color="#FF9900"
          void-color="#DEE0E2"
          void-icon="star"
          @change="onRateChange"
          >
          </van-rate>
          <span class="detail-stat-rate">{{rateValue}}分</span>
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
      isInShelf: Boolean,
      book: Object,
      rateValue: Number
    },
    methods: {
      handleShelf () {
        this.$emit('handleShelf')
      },
      onRateChange (e) {
        this.$emit('onRateChange', e.mp.detail)
      }
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
.detail-btn-shelf {
  padding: 0;
  width: 85px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  background-color: rgb(116,187,243);
}
.detail-btn-remove {
  padding: 0;
  width: 85px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  color: #F96128;
  background: rgba(255, 175, 155, .3);
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
  width: 40px;
  height: 20px;
  display: inline-block;
  margin: 25px 10px 10px 0;
  font-size: 10px;
  line-height:20px;
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
  margin: 2px 5px 0 2px;
  font-size: 15px;
  font-weight: 500;
}
</style>