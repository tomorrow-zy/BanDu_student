<template>
  <div>
    <SearchBar
      :hotSearch="hotSearch" 
      :focus="searchFocus"
      @onClear="onClear"
      ref="searchBar"
    />
    <div class="selection">
      <div class="difficulty" @click="clickChange1()">
        <div class="difficulty-text">{{selection1}}</div>
        <img src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/allbooks/u1477.png" class="arrow">
      </div>
      <div class="catagory" @click="clickChange2()">
        <div class="catagory-text">{{selection2}}</div>
        <img src="cloud://ban-du-1gingis66641beca.6261-ban-du-1gingis66641beca-1304714186/static/allbooks/u1477.png" class="arrow">
      </div>
    </div>
    <div class="allbooks-content">
      <ListDetail :data="contentArray"/>
    </div>
    <div v-if="isClick1" class="all-kinds-of-difficulty" @click.stop="isClick1=false">
      <div class="difficuty-selection">
        <div class="selection-button" v-for="(sel,index) in difficultyArray" :key="index" @click="isSelect1(sel,index)">
          <div :class="{'active':index===mark1}">{{sel}}</div>
        </div>
      </div>
      <div class="hide"></div>
    </div>
    <div v-if="isClick2" class="all-kinds-of-difficulty" @click.stop="isClick2=false">
      <div class="difficuty-selection">
        <div class="selection-button" v-for="(item,index) in catagoryArray" :key="index" @click="isSelect2(item.catalog,index,item.id)">
          <div :class="{'active':index===mark2}">{{item.catalog}}</div>                                 
        </div>
      </div>
      <div class="hide"></div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../../components/booklist/SearchBar'
import ListDetail from '../../components/booklist/ListDetail'
import {getBookCatagory, getBookContent} from '../../services/bookServices'

export default {
  components: {
    SearchBar,
    ListDetail
  },
  data () {
    return {
      hotSearchKeyword: '',
      searchList: {},
      searchFocus: true,
      mark1: 0,
      mark2: 0,
      selection1: '全部难度',
      selection2: '全部类型',
      difficultyArray: [
        '全部难度', '1~2年级', '3~4年级', '5~6年级'
      ],
      catagoryArray: [],
      isClick1: false,
      isClick2: false,
      contentArray: []
    }
  },
  async mounted () {
    await getBookCatagory().then(response => {
      this.catagoryArray = response.data.result
      this.catagoryArray.unshift({
        catalog: '全部类型',
        id: 111
      })
    })
    await getBookContent().then(response => {
      console.log(response.data.result.data)
      this.contentArray = response.data.result.data
    })
  },
  methods: {
    onClear () {
      this.searchList = {}
    },
    isSelect1 (s, i) {
      this.mark1 = i
      this.selection1 = s
    },
    isSelect2 (s, i, id) {
      this.mark2 = i
      this.selection2 = s
      getBookContent(id).then(response => {
        console.log(response.data.result.data)
        this.contentArray = response.data.result.data
        this.contentId = id
      })
    },
    clickChange1 () {
      this.isClick2 = false
      if (this.isClick1 === true) {
        this.isClick1 = false
      } else {
        this.isClick1 = true
      }
    },
    clickChange2 () {
      this.isClick1 = false
      if (this.isClick2 === true) {
        this.isClick2 = false
      } else {
        this.isClick2 = true
      }
    }
  }
}
</script>

<style scoped>
.selection{
  margin-top: 5px;
  display: flex;
  padding: 10px 20px;
  border:2px solid #edf0f1;
  border-left: none;
  border-right: none;
}
.difficulty{
  width: 50%;
  margin-right: 20px;
  text-align: center;
}
.catagory{
  width: 50%;
  text-align: center;
}
.arrow{
  width: 9px;
  height: 9px;
}
.difficulty-text{
  display: inline-block;
  margin-right: 5px;
  font-size: 16px;
}
.catagory-text{
  display: inline-block;
  margin-right: 5px;
  font-size: 16px;
}
.difficuty-selection{
  background-color: rgba(255, 255, 255, 1);
  padding: 10px 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.selection-button{
  display: inline-block;
  margin-bottom: 10px;
}
.selection-button div{
  height: 32px;
  width: 80px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #edf0f1;
  font-size: 13px;
  line-height: 35px;
  text-align: center;
}
.active{
  background-color: #87cce4 !important;
  color: white !important;
}
.all-kinds-of-difficulty{
  position: absolute;
  left: 0;
  top: 120px;
  z-index: 1;
}
.hide{
  width: 100%;
  height: 1080px;
  background-color: rgba(19, 17, 17, 0.3);
}
</style>