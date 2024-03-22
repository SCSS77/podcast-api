export function getDurationFormat (duration: string) {
  // if duration is undefined show message
  if (duration === undefined) return 'No available'
  let seconds = Math.floor(Number(duration) / 1000)
  const hours = Math.floor(seconds / 3600)
  seconds %= 3600
  const minutes = Math.floor(seconds / 60)
  seconds %= 60

  const formatHours = hours !== 0 ? `${hours}:` : ''
  return `${formatHours}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
