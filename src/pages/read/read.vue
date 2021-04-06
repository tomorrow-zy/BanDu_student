<template>
    <div>
      {{content}}
    </div>
</template>

<script>
import {getBookInfo} from '../../services/bookServices'
export default {
  data () {
    return {
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
    })
  }
}
</script>

<style>
</style>