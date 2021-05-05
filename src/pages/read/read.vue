<template>
  <div class="content">
      {{content}}
  </div>
    
</template>

<script>
import {getBookInfo} from '../../services/bookServices'
import {getUserInfo, getStorageSync} from '../../services/wechat'
export default {
  data () {
    return {
      content: '',
      startime: 0,
      viewtime: 0
    }
  },
  methods: {
    updateReadTime () {
      var finishread = new Date().getTime()
      var viewtime = Number(((finishread - this.startime) / 1000 / 60 * 1.0).toFixed(1))
      const d = new Date().getDay()
      getUserInfo().then(res => {
        var weeklyreport = res.result.data[0].weekly_report
        weeklyreport[d] = parseInt(weeklyreport[d] + viewtime)
        wx.cloud.callFunction({
          name: 'updateWeeklyReport',
          data: {
            incTime: Number(viewtime),
            weeklyArray: weeklyreport
          }
        }).then(res => {
          // console.log('wekkly更新成功', res)
        }).catch(err => {
          console.log(err)
        })
      })
      // console.log(viewtime)
    }
  },
  onShow () {
    this.startime = new Date().getTime()
    setInterval(this.updateReadTime, 10 * 60 * 1000)
  },
  onUnload () {
    this.updateReadTime()
  },
  async mounted () {
    const {key} = this.$route.query
    var obj = JSON.parse(key)
    await getBookInfo(obj.bookName).then(response => {
      // console.log(response)
      this.content = response.data[0].content[obj.id]
      this.content = this.content.split(' ').join('\n')
    })
    var op = getStorageSync('openid')
    getUserInfo().then(res => {
      var weeklyReadBook = res.result.data[0].weekly_readBook
      if (!weeklyReadBook.includes(obj.bookName)) {
        wx.cloud.database().collection('usersInfo').where({
          _openid: op
        }).update({
          data: {
            weekly_readBook: wx.cloud.database().command.push(obj.bookName)
          }
        })
      }
    })
  }
}
</script>

<style>
page{
  background-color: rgb(227, 237, 205);
}
.content{
  padding: 0 20px 20px 20px;
  white-space: pre-wrap;
}
</style>