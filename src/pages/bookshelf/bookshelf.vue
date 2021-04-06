<template>
  <div>
    <div class="head" v-if="!isEdit">
      <SearchBar
      :hotSearch="hotSearch" 
      :focus="searchFocus"
      @onClear="onClear"
      ref="searchBar"
      />
      <div class="collection">我的收藏</div>
    </div>
    <button 
      v-else class="completeEdit" 
      @click="completedEdit" 
    >
      完成
    </button>
    <div class="content-head">
      <div :class="{'isClick':currentRead}" @click="currentReadClick">当前阅读</div>
      <div :class="{'isClick':completeRead}" @click="completeReadClick">完成阅读</div>
    </div>
    <div class="selection">
      <div class="screen" @click="screenClick">
        <img src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/bookshelf/u1612.png" class="screen-picture"/>
        <div class="screen-text">筛选</div>
      </div> 
      <div class="bought">已购买</div>
      <div class="bought">未购买</div>
      <div v-show="!isEdit" class="edit" @click="editing">编辑</div>
    </div>
    <ShelfList 
      :shelflist="shelfList" 
      :editing="isEdit" 
      :beSelected="shouldBeSelectedAll"
    />
    <div class="bottom" v-if="!isEdit">
      <Bottom/>
    </div>
    <div class="editBottom" v-else>
      <EditBottom @handleChoose="handleChoose" :shelflist="shelfList"/>
    </div>
    <div v-if="screened" class="all-kinds-of-catagory">
      <div class="catagory-selection">
        <div class="selection-button" v-for="(item,index) in catagoryArray" :key="index" @click="isSelect(index,item.id)">
          <div :class="{'active':index===mark}">{{item.catalog}}</div>                                 
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
import EditBottom from '../../components/bookshelf/EditBottom'
import {getShelfData} from '../../services/bookServices'
export default {
  components: {
    SearchBar,
    ShelfList,
    Bottom,
    EditBottom
  },
  data () {
    return {
      currentRead: true,
      completeRead: false,
      screened: false,
      confirmedId: 0,
      isEdit: false,
      shouldBeSelectedAll: false,
      catagoryArray: [
        {
          id: 1,
          catalog: '童话寓言'
        },
        {
          id: 2,
          catalog: '校园成长'
        },
        {
          id: 3,
          catalog: '诗歌散文'
        },
        {
          id: 4,
          catalog: '科普百科'
        },
        {
          id: 5,
          catalog: '名人励志'
        },
        {
          id: 6,
          catalog: '历史传记'
        },
        {
          id: 7,
          catalog: '科幻世界'
        }
      ],
      mark: 0,
      currentReadList: [],
      completeReadList: [],
      shelfList: []
    }
  },
  // async created () {
  //   await getBookCatagory().then(response => {
  //     this.catagoryArray = response.data.result
  //   })
  // },
  methods: {
    isSelect (i, id) {
      this.mark = i
      this.confirmedId = id
      // getBookContent(id).then(response => {
      //   console.log(response.data.result.data)
      //   this.contentArray = response.data.result.data
      // })
    },
    editing () {
      this.isEdit = true
      this.shouldBeSelectedAll = false
    },
    completedEdit () {
      this.isEdit = false
      this.shouldBeSelectedAll = true
    },
    screenClick () {
      this.screened = true
    },
    confirmSelect () {
      // 执行确定之后的操作；
      console.log('确定', this.confirmedId)
      this.screened = false
    },
    cancleSelect () {
      console.log('取消')
      this.screened = false
    },
    currentReadClick () {
      this.currentRead = true
      this.completeRead = false
      this.shelfList = this.currentReadList
    },
    completeReadClick () {
      this.currentRead = false
      this.completeRead = true
      this.shelfList = this.completeReadList
    },
    handleChoose (haveChooseAll) {
      console.log('hi..')
      this.shouldBeSelectedAll = haveChooseAll
    }
  },
  mounted () {
    getShelfData().then(response => {
      this.completeReadList = response.data.data.completeReadList
      this.currentReadList = response.data.data.currentReadList
      console.log(this.completeReadList, this.currentReadList)
      this.shelfList = this.currentReadList
      if ((JSON.stringify(this.currentReadList[this.currentReadList.length - 1]) !== '{}')) {
        this.shelfList.push({})
      }
      this.currentReadList = this.shelfList
    })
  },
  onShow () {

  }
}
</script>

<style>
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
.content-head{
  margin: 0 20px;
  padding: 0 70px 8px 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 2.2px solid #eeeeee;
}
.content-head div{
  padding-bottom: 3px;
}
.isClick{
  border-bottom: 2.5px inset #0da0f5 !important;
}
.active{
  background-color: #87cce4 !important;
  color: white !important;
}
.content-head div:active{
  /*关键代码*/

  border-bottom:  3px solid rgb(72, 208, 241);
}
.selection{
  margin: 10px 26.5px;
  display: flex;
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
.bought{
  margin: 3px 0px 0 18px;
  height: 25px;
  width: 60px;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  border-radius: 5px;
  background-color: #e4dede;
}
.edit{
  margin: 3px 0px 0 75px;
  height: 25px;
  width: 50px;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  border-radius: 5px;
  background-color: #e4dede;
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