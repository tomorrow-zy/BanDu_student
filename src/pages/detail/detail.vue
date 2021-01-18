<template>
  <div class="background">
    <div class="book-detail">
      <DetailBook :book="book" :booktitle="bookname"/>
      <div class="capacity">
        <div class="diff">难度系数：327</div>
        <div class="range">适合阅读能力范围：xxx-xxx</div>
      </div>
    </div>
    <DetailContents :book="book"/>
    <DetailComments :book="book"/>
    <DetailBottom/>
  </div>
</template>

<script>
import DetailBook from '../../components/detail/DetailBook'
import DetailContents from '../../components/detail/DetailContents'
import DetailBottom from '../../components/detail/DetailBottom'
import DetailComments from '../../components/detail/DetailComments'
import {getBookDetail} from '../../services/bookServices'
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
      contents: [],
      isInShelf: false
    }
  },
  methods: {
    getBookDetail () {
      const {fileName} = this.$route.query
      this.bookname = fileName
      getBookDetail(fileName).then(response => {
        this.book = response.data.data
      })
    }
  },
  mounted () {
    this.getBookDetail()
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
