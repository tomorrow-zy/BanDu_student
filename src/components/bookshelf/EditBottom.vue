<template>
  <div class="detail-bottom">
    <div class="detail-btn-wrapper">
      <button
        :class="haveChooseAll ? 'cancleChooseAll' : 'chooseAll'"
        @click="handleShelf"
      >
        {{haveChooseAll ? '取消全选' : '全选'}}
      </button>
    </div>
    <div class="detail-btn-wrapper">
      <button
        class="detail-btn-delete"
        @click="() => deleteBook()"
      >
        删除
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      shelflist: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        haveChooseAll: false
      }
    },
    watch: {
      shelflist () {
        this.haveChooseAll = false
      }
    },
    methods: {
      handleShelf () {
        this.haveChooseAll = !this.haveChooseAll
        this.$emit('handleChoose', this.haveChooseAll)
      },
      deleteBook () {
        this.$emit('deleteBook')
      }
    }
  }
</script>

<style scoped>
.detail-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 4px 0 rgba(0,0,0,.1);
}
.detail-btn-wrapper {
    flex: 1;
  }
.detail-btn-delete {
    width: 140px;
    height: 40px;
    border: none;
    color: #fff;
    background: #1EA3F5;
    border-radius: 22.5px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    text-align: center;
  }
.chooseAll {
    width: 140px;
    height: 40px;
    color: #1EA3F5;
    background: #fff;
    border: 1px solid #1EA3F5;
    border-radius: 22.5px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    text-align: center;
  }
.cancleChooseAll {
    width: 160px;
    height: 40px;
    color: #F96128;
    background: rgba(255, 175, 155, .3);
    border: 1px solid #FFAF9B;
    margin-right: 7.5px;
    border-radius: 22.5px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    text-align: center;
  }
</style>