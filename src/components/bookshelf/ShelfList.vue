<template>
  <div class="shelf-list-wrapper">
    <div class="shelf-list-inner">
      <div
        class="shelf-book"
        v-for="(book,index) in shelflist"
        :key="index"
      >
        <BookCard 
          v-if="book && book.img" 
          :src="book.img" 
          :editing="editing" 
          :shelflist="shelflist"
          :beSelected="beSelected"
        />
        <div class="shelf-book-title" v-if="book && book.title">{{book.title}}</div>
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
  import BookCard from './BookCardInShelf'
  export default {
    components: { BookCard },
    props: {
      shelflist: Array,
      editing: Boolean,
      beSelected: Boolean
    },
    methods: {
      // gotoHome () {
      //   this.$router.push('/pages/index/main')
      // },
      // gotoBookDetail (book) {
      //   this.$router.push({ path: '/pages/detail/main', query: { fileName: book.fileName } })
      // }
    }
  }
</script>

<style scoped>
.shelf-list-wrapper {
  padding: 0px 10px 20px 15px;
}
.shelf-list-inner {
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
  padding: 5px 12px 0 12px;
  box-sizing: border-box;
}
.shelf-book-title {
  margin-top: 10px;
  height: 28px;
  width: 85px;
  font-size: 12px;
  color: #333;
  overflow: hidden;
  text-overflow: clip;
  text-align: center;
  line-height: 14px;
}
.shelf-book-add {
  margin-top: 5px;
  width: 85px;
  height: 121px;
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