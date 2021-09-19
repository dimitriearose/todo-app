interface Time {
  time: Date
  year: number
  month: number
  formattedMonth: string
  day: number
  date: number
  formattedDay: string
  hours: number
  hoursForClock: number
  minutes: number | string
  seconds: number | string
  ampm: string
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const formatDay = (day: number): string => {
  return days[day]
}

const formatMonth = (month: number): string => {
  return months[month]
}

const getCurrentTime = (): Time => {
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth()
  const formattedMonth = formatMonth(month)
  const day = time.getDay()
  const date = time.getDate()
  const formattedDay = formatDay(day)
  const hours = time.getUTCHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
  const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  return { time, year, month, formattedMonth, day, date, formattedDay, hours, hoursForClock, minutes, seconds, ampm }
}

export { formatDay, formatMonth, getCurrentTime }
