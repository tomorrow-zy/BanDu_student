// 远程获取图书和图书类别
import {APPCODE} from './config'
import {get} from '@/utils/request'
// 获取图书类别
export function getBookCatagory () {
  return get('http://apis.juhe.cn/goodbook/catalog?dtype=&key=' + APPCODE)
}
export function getBookContent (catagoryId, limit = 10) {
  return get('http://apis.juhe.cn/goodbook/query?catalog_id=' + catagoryId + '&pn=&rn=' + limit + '&dtype=&key=' + APPCODE)
}
export function getBookDetail (fileName) {
  return get('http://mock.51y.cc:81/mock/5ff9bb0f151bfc02d3ba697e/student/bookdetail?fileName=' + fileName)
}
export function getHomeData () {
  return get('http://mock.51y.cc:81/mock/5ff9bb0f151bfc02d3ba697e/student/homedata')
}
