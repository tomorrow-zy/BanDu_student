<template>
  <div class="shelf-list-wrapper">
    <div class="shelf-list-inner">
      <div class="shelf-book" v-for="(book,index) in shelflist" :key="index">
        <div v-if="book.title" @click="onBookClick(book)">
          <BookCard :src="book.src" :text="book.title"/>
        </div>
        <div class="shelf-book-add" v-if="!book.title" @click="gotoHome">
          <div class="shelf-book-add-wrapper">
            <div class="shelf-book-add-x"></div>
            <div class="shelf-book-add-y"></div>
          </div>
        </div>
        <div class="shelf-book-title" v-if="!book.title">添加书籍</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BookCard from '../../components/home/bookcard'
  export default {
    components: { BookCard },
    props: {
      shelflist: Array
    },
    methods: {
      gotoHome () {
        this.$router.push('/pages/index/main')
      },
      onBookClick (book) {
        this.$router.push({
          path: '/pages/detail/main',
          query: {
            fileName: book.title
          }
        })
      }
    }
  }
</script>

<style scoped>
.shelf-list-wrapper {
  padding: 0px 10px 20px 15px;
}
.shelf-list-inner {
  margin-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  /*justify-content: space-between;*/
}
.shelf-book{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 33.33%;
  width: 33.33%;
  padding: 5px 12px 5px 12px;
  box-sizing: border-box;
}
.shelf-book-title {
  margin-top: 13px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  font-size: 15px;
  font-weight: 30;
  overflow:hidden;
}
.shelf-book-add {
  /* margin-top: 5px; */
  width: 84px;
  height: 120px;
  background: #e9e8e8;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shelf-book-add-wrapper {
  position: relative;
  width: 30px;
  height: 30px;
}
.shelf-book-add-x {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 2px;
  margin-top: -1px;
  background: #afaeae;
}
.shelf-book-add-y {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 30px;
  background: #afaeae;
}
</style>