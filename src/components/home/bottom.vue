<template>
  <div class="bottom">
      <div class="bottom-wrapper">
        <div class="home" @click="onHomeClick">
          <img class="home-image" src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/index/u14.png"/>
          <div class="home-text" >首页</div>
        </div>
        <div class="shelf" @click="onShelfClick">
          <img class="home-image" src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/index/u17.png"/>
          <div class="home-text">书架</div>
        </div>
        <div class="my" @click="onInfoClick">
          <img class="home-image" src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/index/u9.png"/>
          <div class="home-text">我的</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    onHomeClick () {
      this.$router.replace('/pages/index/main')
    },
    onShelfClick () {
      this.$emit('onGetSetting')
      this.$router.replace('/pages/bookshelf/main')
    },
    onInfoClick () {
      this.$emit('onGetSetting')
      this.$router.replace('/pages/my/main')
    }
  }
}
</script>

<style>
.bottom-wrapper{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px 5px 20px;
  display: flex;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 4px 0 rgba(0,0,0,.1);
}
.home{
  display: flex;
  flex-direction: column;
  margin-right: 123px;
}
.home-image {
  width: 30px;
  height: 30px;
}
.home-text{
  font-size: 13px;
  font-weight: 50;
  text-align: center;
}
.shelf{
  display: flex;
  flex-direction: column;
  margin-right: 123px;
}
.my{
  display: flex;
  flex-direction: column;
}
</style>