<template>
  <div class="banner-container">
    <ul >
      <li v-for="(img,index) in imgArray" v-show="index===mark" :key="index">
        <img class="picture" v-bind:src="img">
      </li>
    </ul>
    <div class="bar">
      <span v-for="(item,index) in imgArray" :class="{'active':index===mark}" :key="index"></span>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      mark: 0, // 指示器位置标识
      imgArray: [
        require('@/assets/u108.png'),
        require('@/assets/u109.png'),
        require('@/assets/u110.png')
      ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 3) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 2000)
    }
  },
  created () {
    this.play()
  }
}
</script>

<style>
.banner-container{
  width: 100%;
  height:100px;
  position: relative;
  overflow: hidden;
}
.picture{
  width: 100%;
  height:100px;
}
.bar{
  position: absolute;
  width: 100%;
  bottom: 5px;
  z-index: 10;
  text-align: center;
}
.bar span{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid;
  background: rgba(0,0,0,0);
  border-color: gray;
  display: inline-block;
  margin-right: 10px;
}
.active{
  background: white !important;
}
</style>