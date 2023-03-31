export function formatDate (dateString) {
  const date = new Date(dateString)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const day = date.getDate()
  const month = monthNames[date.getMonth()]
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const hour12 = hours % 12 || 12
  const ampm = hours < 12 ? 'AM' : 'PM'

  return `${hour12} ${month} at ${String(minutes).padStart(2, '0')}.${String(day).padStart(2, '0')} ${ampm}`
}
