export default function throttle(func, limit) {
  let inThrottle

  return (...args) => {
    if (!inThrottle) {
      inThrottle = true

      func(...args)

      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}
