<template>
    <div>
      <span v-for="(item, index) in catalog" :key="index" @click="chooseCatalog(fileName,index)">
        <div class="itemstyle">{{item}}</div>
      </span>
    </div>
</template>

<script>
import {getBookInfo} from '../../services/bookServices'
import { getUserInfo } from '../../services/wechat'
export default {
  data () {
    return {
      catalog: [],
      fileName: ''
    }
  },
  methods: {
    chooseCatalog (fileName, index) {
      getUserInfo().then(res => {
        var startTime = res.result.data[0].p_read_fromto[0]
        var endTime = res.result.data[0].p_read_fromto[1]
        var total = res.result.data[0].p_read_totaltime
        if (total < res.result.data[0].weekly_report[new Date().getDay()]) {
          wx.showToast({
            title: '今日读书时长已达上限',
            icon: 'none',
            duration: 3000
          })
        } else if (new Date(startTime).getHours() > new Date().getHours() || new Date(endTime).getHours() < new Date().getHours() ||
        (new Date(startTime).getHours() === new Date().getHours() && new Date(startTime).getMinutes() > new Date().getMinutes()) ||
        (new Date(endTime).getHours() === new Date().getHours() && new Date(endTime).getMinutes() < new Date().getMinutes())) {
          wx.showToast({
            title: '当前时段不允许读书',
            icon: 'none',
            duration: 3000
          })
        } else {
          var obj = {bookName: fileName, id: index}
          this.$router.push({
            path: '/pages/read/main',
            query: {
              key: JSON.stringify(obj)
            }
          })
        }
      })
    }
  },
  async mounted () {
    const {fileName} = this.$route.query
    this.fileName = fileName
    await getBookInfo(this.fileName).then(response => {
      this.catalog = response.data[0].catalog
    })
    await wx.cloud.callFunction({
      name: 'updateHotRate',
      data: {
        title: this.fileName
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.itemstyle{
  display: block;
  margin: 20px 80px 20px 40px;
  padding: 10px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid rgb(214, 214, 214);
  color: rgb(0,0,0,0.7);
  overflow: hidden;
}
</style>
