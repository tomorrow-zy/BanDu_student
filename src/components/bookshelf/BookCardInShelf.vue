<template>
  <div class="bookcard" @click="isClick">
    <img 
    class="bookcard-picture" 
    src="/static/index/u107.png" 
    :lazy-load="lazyLoad"
    v-show="isLoading || error"
    />
    <img 
    class="bookcard-picture" 
    :src="src"
    :lazy-load="lazyLoad"
    @load="onLoad"
    @error="onError"
    v-show="! isLoading && !error"
    />
    <img class="edited" v-if="editing" src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/bookshelf/u1615.png"/>
    <img class="edited" id="selected" v-if="editing&&isSelected" src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/bookshelf/u1619.png"/>
  </div>
</template>

<script>
export default {
  props: {
    lazyLoad: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: ''
    },
    editing: {
      type: Boolean,
      default: false
    },
    shelflist: {
      type: Array,
      default: []
    },
    beSelected: Boolean
  },
  data () {
    return {
      isLoading: true,
      error: false,
      isSelected: false
    }
  },
  watch: {
    src (newValue, preValue) {
      if (newValue && newValue.length > 0 && newValue !== preValue) {
        this.$nextTick(() => {
          this.isLoading = true
          this.error = false
        })
      }
    },
    shelflist () {
      this.isSelected = false
    },
    beSelected (newValue) {
      this.isSelected = newValue
    }
  },
  methods: {
    onLoad () {
      this.isLoading = false
      this.error = false
    },
    onError () {
      this.isLoading = false
      this.error = true
    },
    isClick () {
      this.isSelected = !this.isSelected
    }
  }
}
</script>

<style scoped>
.bookcard{
  position: relative;
  margin-top: 5px;
  margin-right: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bookcard-picture{
  width: 84px;
  height: 120px;
  border: 0.5px solid black;
  border-radius: 5px;
}
.edited{
  height: 20px;
  width: 20px;
  position: absolute;
  bottom: 4px;
  right: 2px;
  opacity: 0.5;
}
#selected{
  opacity: 1;
}
</style>