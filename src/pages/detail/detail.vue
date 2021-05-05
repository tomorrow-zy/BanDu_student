<template>
  <div class="background">
    <div class="book-detail">
      <DetailBook 
        v-if="book" 
        :is-in-shelf="isInShelf" 
        :book="book" 
        :rateValue="rank"
        @handleShelf="onHandleShelf(book)"
        @onRateChange="onRateChange"
      />
      <div class="capacity">
        <div class="range">适合阅读能力范围：{{book.apply_to}}</div>
      </div>
    </div>
    <DetailContents :book="book"/>
    <DetailComments :comments="comments"/>
    <DetailBottom :is-in-shelf="isInShelf" :file="bookname" @handleShelf="onHandleShelf(book)"/>
  </div>
</template>

<script>
import DetailBook from '../../components/detail/DetailBook'
import DetailContents from '../../components/detail/DetailContents'
import DetailBottom from '../../components/detail/DetailBottom'
import DetailComments from '../../components/detail/DetailComments'
import {getBookInfo} from '../../services/bookServices'
import {getStorageSync} from '../../services/wechat'
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
      bookshelf: [],
      isInShelf: false,
      rank: 0
    }
  },
  methods: {
    onRateChange (value) {
      getBookInfo(this.bookname).then(response => {
      // console.log(response)
        var rankNum = response.data[0].data.rankNum
        // this.rank = response.data[0].data.rank
        this.rank = Number(((this.rank * rankNum + value) / (rankNum + 1)).toFixed(1))
        wx.cloud.callFunction({
          name: 'updateRank',
          data: {
            title: this.bookname,
            rank: this.rank
          }
        }).then(res => {
          console.log(res)
        })
      })
    },
    isInBookshelf (book) {
      const op = getStorageSync('openid')
      const _ = wx.cloud.database().command
      wx.cloud.database().collection('usersInfo').where({
        _openid: op,
        bookshelf: _.elemMatch({
          title: book.title
        })
      }).get().then(res => {
        if (res.data.length === 0) {
          this.isInShelf = false
        } else {
          this.isInShelf = true
        }
      }).catch(err => {
        console.log('请求书籍信息失败', err)
      })
    },
    onHandleShelf (book) {
      var bookInShelf = {
        'applyto': book.apply_to,
        'src': book.src,
        'title': book.title,
        'type': book.catagory
      }
      if (this.isInShelf === false) {
        wx.cloud.callFunction({
          name: 'addBook',
          data: {
            addbook: bookInShelf
          }
        }).then(res => {
          this.isInShelf = true
          // console.log('书籍添加成功！', res)
        }).catch(err => {
          console.log(err)
        })
      } else {
        wx.showModal({
          title: '移出书架',
          content: '确定将《' + book.title + '》移出书架？'
        }).then(res => {
          // console.log(res)
          if (res.confirm) {
            wx.cloud.callFunction({
              name: 'removeBook',
              data: {
                removebook: bookInShelf
              }
            }).then(res => {
              this.isInShelf = false
              // console.log('书籍移除成功！', res)
            }).catch(err => {
              console.log(err)
            })
          }
        })
      }
    }
  },
  async mounted () {
    const {fileName} = this.$route.query
    this.bookname = fileName
    await getBookInfo(this.bookname).then(response => {
      // console.log(response)
      this.book = response.data[0].data
      this.comments = response.data[0].comments
      this.rank = response.data[0].data.rank
    })
    this.isInBookshelf(this.book)
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
