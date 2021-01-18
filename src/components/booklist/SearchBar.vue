<template>
  <div class="search-bar">
      <div class="search-bar-wrapper" @click="onSearchBarClick">
          <van-icon 
          class="search" 
          name="search" 
          size="15px" 
          color="#858C96">
          </van-icon>
          <input class="searchbarinput" 
          :focus="focus"
          :disabled="disabled"
          :maxlength="limit"
          :placeholder="hotSearch"
          v-model="searchWord"
          @input="onChange"
          confirm-type="search"
          @confirm="onConfirm"
          placeholder-style="color: #ADB4BE;font-size:13px "
          />
          <van-icon
          class="clear" 
          name="clear" 
          size="15px" 
          color="#ccc" 
          @click="onClearClick"
          v-if="searchWord.length > 0">
          </van-icon>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: '输入书名'
    }
  },
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick () {
      this.$emit('onClick')
    },
    onClearClick () {
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange (e) {
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm (e) {
      const { value } = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue (v) {
      this.searchWord = v
    },
    getValue () {
      return this.searchWord
    }
  }
}
</script>

<style scoped>
.search-bar {
  padding: 14px 15.5px;
}
.search-bar-wrapper {
  display: flex;
  align-items: center;
  height: 37px;
  box-sizing: border-box;
  background: #f5f7f9;
  border-radius: 40px;
  padding: 10px 17px;
  width: 100%;
}
.searchbarinput {
  flex: 1;
  margin: 0 8px;
  color: #333;
  font-size: 13px;
}
.search {
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: -2px;
}
.clear {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
