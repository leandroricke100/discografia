function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}`
}

export default formatTime
