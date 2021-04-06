// 远程获取图书和图书类别
// import {APPCODE} from './config'
import {get} from '@/utils/request'
// 获取图书类别

export function getShelfData () {
  return get('http://mock.51y.cc:81/mock/5ff9bb0f151bfc02d3ba697e/student/bookshelf')
}
export function getBookInfo (fileName) {
  return wx.cloud.database().collection('book')
    .where({
      data: {
        title: fileName
      }
    }).get()
}

export function getBookIndex () {
  return wx.cloud.database().collection('book_index').get()
}
