<template>
    <div>
      <span v-for="(item, index) in catalog" :key="index" @click="chooseCatalog(fileName,index)">
        <div>{{item}}</div>
      </span>
    </div>
</template>

<script>
import {getBookInfo} from '../../services/bookServices'
export default {
  data () {
    return {
      catalog: [],
      fileName: ''
    }
  },
  methods: {
    chooseCatalog (fileName, index) {
      var obj = {bookName: fileName, id: index}
      this.$router.push({
        path: '/pages/read/main',
        query: {
          key: JSON.stringify(obj)
        }
      })
    }
  },
  async mounted () {
    const {fileName} = this.$route.query
    this.fileName = fileName
    await getBookInfo(this.fileName).then(response => {
      console.log(response)
      this.catalog = response.data[0].catalog
    })
  }
}
</script>

<style>
</style>