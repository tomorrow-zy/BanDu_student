<template>
  <div class="background">
    <div class="book-detail">
      <DetailBook v-if="book" :book="book"/>
      <div class="capacity">
        <div class="range">适合阅读能力范围：{{book.apply_to}}</div>
      </div>
    </div>
    <DetailContents :book="book"/>
    <DetailComments :comments="comments"/>
    <DetailBottom :file="bookname"/>
  </div>
</template>

<script>
import DetailBook from '../../components/detail/DetailBook'
import DetailContents from '../../components/detail/DetailContents'
import DetailBottom from '../../components/detail/DetailBottom'
import DetailComments from '../../components/detail/DetailComments'
import {getBookInfo} from '../../services/bookServices'
export default {
  components: {
    DetailBook,
    DetailContents,
    DetailBottom,
    DetailComments
  },
  data () {
    return {
      book: {},
      bookname: '',
      comments: [],
      isInShelf: false
    }
  },
  async mounted () {
    const {fileName} = this.$route.query
    this.bookname = fileName
    await getBookInfo(this.bookname).then(response => {
      console.log(response)
      this.book = response.data[0].data
      this.comments = response.data[0].comments
    })
  }
}
</script>

<style scoped>
.background{
  padding: 15px 0 0 0;
  background-color: rgb(116,187,243);
}
.book-detail{
  padding-bottom: 10px;
  background-color: rgba(255, 255,255, 0.9);
}
.capacity{
  margin: 10px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: rgb(121, 120, 120);
  font-family: SimSun, Helvetica, sans-serif;
  font-weight: 900;
}
</style>
