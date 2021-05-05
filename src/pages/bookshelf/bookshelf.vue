<template>
  <div>
    <div class="head">
      <SearchBar
      :hotSearch="hotSearch" 
      :focus="searchFocus"
      @onClear="onClear"
      ref="searchBar"
      />
      <div class="collection">我的收藏</div>
    </div>
    <div class="selection">
      <div class="screen" @click="screenClick">
        <img src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/bookshelf/u1612.png" class="screen-picture"/>
        <div class="screen-text">筛选</div>
      </div> 
    </div>
    <ShelfList 
      :shelflist="shelfList" 
    />
    <div class="bottom">
      <Bottom/>
    </div>
    <div v-if="screened" class="all-kinds-of-catagory">
      <div class="catagory-selection">
        <div class="selection-button" v-for="(item,index) in catagoryArray" :key="index" @click="isSelect(index,item)">
          <div :class="{'active':index===mark}">{{item}}</div>                                 
        </div>
      </div>
      <div class="catagoryConfirm">
        <div class="cancle" @click="cancleSelect">取消</div>
        <div class="confirm" @click="confirmSelect">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../../components/bookshelf/SearchBar'
import ShelfList from '../../components/bookshelf/ShelfList'
import Bottom from '../../components/home/bottom'
import {getBookCatagory} from '../../services/bookServices'
import {getUserInfo, getStorageSync} from '../../services/wechat'
export default {
  components: {
    SearchBar,
    ShelfList,
    Bottom
  },
  data () {
    return {
      screened: false,
      catagoryArray: [],
      mark: 0,
      shelfList: [],
      selectedItem: ''
    }
  },
  methods: {
    isSelect (i, item) {
      this.mark = i
      this.selectedItem = item
    },
    screenClick () {
      this.screened = true
      getBookCatagory().then(res => {
        this.catagoryArray = res.data.type
        this.catagoryArray.unshift('全部类型')
      }).catch(err => {
        console.log('请求书籍信息失败', err)
      })
    },
    confirmSelect () {
      const op = getStorageSync('openid')
      if (this.selectedItem === '全部类型') {
        getUserInfo().then(res => {
          this.shelfList = res.result.data[0].bookshelf
          if ((JSON.stringify(this.shelfList[this.shelfList.length - 1]) !== '{}')) {
            this.shelfList.push({})
          }
        }).catch(err => {
          console.log('请求书籍信息失败', err)
        })
      } else {
        var temp = []
        wx.cloud.database().collection('usersInfo').where({
          _openid: op
        }).get().then(res => {
          for (var i = 0; i < res.data[0].bookshelf.length; i++) {
            if (res.data[0].bookshelf[i].type.includes(this.selectedItem)) {
              temp.push(res.data[0].bookshelf[i])
            }
          }
          this.shelfList = temp
          if ((JSON.stringify(this.shelfList[this.shelfList.length - 1]) !== '{}')) {
            this.shelfList.push({})
          }
        }).catch(err => {
          console.log('请求书籍信息失败', err)
        })
      }
      this.screened = false
    },
    cancleSelect () {
      this.screened = false
    }
  },
  onShow () {
    getUserInfo().then(res => {
      this.shelfList = res.result.data[0].bookshelf
      if ((JSON.stringify(this.shelfList[this.shelfList.length - 1]) !== '{}')) {
        this.shelfList.push({})
      }
    }).catch(err => {
      console.log('请求书籍信息失败', err)
    })
  }
}
</script>

<style scoped>
.head{
  display: flex;
  margin: 0 10px;
}
.collection{
  padding: 10px 0 10px 5px;
  font-size: 13px;
  align-items: center;
  line-height: 37px;
  color: rgb(122, 120, 120);
}
.completeEdit{
  margin: 5px 0 16.5px 270px;
  width: 80px;
  height: 35px;
  color: #1EA3F5;
  background: #fff;
  border: 1px solid #1EA3F5;
  border-radius: 22.5px;
  font-family: PingFangSC-Regular;
  font-size: 15px;
  text-align: center;
  line-height: 35px;
}
.isClick{
  border-bottom: 2.5px inset #0da0f5 !important;
}
.active{
  background-color: #87cce4 !important;
  color: white !important;
}
.selection{
  margin: 10px 26.5px;
  display: flex;
  justify-content: space-between;
}
.screen{
  margin-top: 7px;
  display: flex;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
}
.screen-picture{
  height: 20px;
  width: 20px;
}
.all-kinds-of-catagory{
  padding: 15px 0 15px 0;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  box-shadow: 0 -2px 4px 0 rgba(0,0,0,.1);
}
.catagory-selection{
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.selection-button{
  display: inline-block;
}
.selection-button div{
  height: 53px;
  width: 53px;
  margin: 7.5px;
  border-radius: 12px;
  background-color: #d1d4d4;
  font-size: 11px;
  font-weight: 700;
  line-height: 55px;
  text-align: center;
}
.catagory-selection::after {
  content: '';
  flex: auto;
}
.active{
  background-color: #87cce4 !important;
  color: white !important;
}
.catagoryConfirm{
  padding: 10px 95px 15px 95px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cancle{
  color: #c5c1c1;
}
.confirm{
  color: #87cce4;
}
</style>