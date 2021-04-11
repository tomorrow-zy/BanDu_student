function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime
}

export function getWeekByDate (date) {
  // console.log('index.js', date)
  var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  var newdate = new Date(date)
  // newdate.setDate(newdate.getDate())
  let day = newdate.getDay()
  return week[day]
}
