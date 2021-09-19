const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const currentDate: any = {
  '0': 'January',
  '1': 'February',
  '2': 'March',
  '3': 'April',
  '4': 'May',
  '5': 'June',
  '6': 'July',
  '7': 'August',
  '8': 'September',
  '9': 'October',
  '10': 'November',
  '11': 'December',
}

const formatDate = (date: Date) => {
  const month = currentDate[date.getMonth()]
  const year = date.getFullYear()
  const day = date.getDate()
  const dateOfWeek = date.getDate()
  const formattedDay = days[dateOfWeek]
  const hour = date.getHours()
  const hoursForClock = hour % 12
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const time = `${hour}:${minutes}`

  return {
    month,
    year,
    day,
    hour,
    minutes,
    time,
    formattedDay,
    hoursForClock,
    ampm,
    seconds,
  }
}

export default formatDate
