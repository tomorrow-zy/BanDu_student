<template>
  <div>
    <div class="list-wrapper" v-for="(item,index) in data" :key="index">
        <div class="list-content" @click="gotoBookDetail(item)">
          <BookCardList :src="item.img"/>
          <div class="detail">
            <div class="row">
              <div class="bookname">{{item.title}}</div>
              <div class="price">340书币</div>
            </div>
            <div class="row">
              <div class="author">作者：xxx</div>
            </div>
            <div class="row">
              <div class="grade">评分：{{item.reading}}</div>
              <div class="grade">适合：xx</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import BookCardList from '../../components/booklist/BookCardInList'

export default {
  components: {
    BookCardList
  },
  props: {
    data: Array
  },
  methods: {
    gotoBookDetail (item) {
      this.$router.push({
        path: '/pages/detail/main',
        query: {
          fileName: item.title
        }
      })
    }
  }
}
</script>

<style>
.list-wrapper{
  padding: 15px 25px;
}
.list-content{
  display: flex;
  padding-bottom: 15px;
  border-bottom: 2px solid #edf0f1;
}
.detail{
  padding-top: 2px;
  width: 220px;
  height: 120px;
}
.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bookname{
  width: 123px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
}
.price{
  font-size: 15px;
}
.author{
  font-size: 14px;
  margin:7px 0 36px 0;
}
.grade{
  font-size: 15px;
}
</style>