<template>
  <div>
    <van-count-down :time="time" />
    <view class="content">
      {{content}}
    </view>
  </div>
    
</template>

<script>
import {getBookInfo} from '../../services/bookServices'
export default {
  data () {
    return {
      time: 30 * 60 * 60 * 1000,
      content: ''
    }
  },
  methods: {
  },
  async mounted () {
    const {key} = this.$route.query
    var obj = JSON.parse(key)
    await getBookInfo(obj.bookName).then(response => {
      console.log(response)
      this.content = response.data[0].content[obj.id]
      this.content = this.content.split(' ').join('\n')
    })
  }
}
</script>

<style>
.content{
  white-space: pre-wrap;
}
</style>