
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
export function getBookCatagory () {
  return wx.cloud.database().collection('catagory').doc('b00064a760658e090cdc9d754ca08647').get()
}
