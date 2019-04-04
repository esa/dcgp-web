/**
 * Creates a throttled version of the `func`.
 * `func` will only be executed with a minimal interval of `limit`.
 * Subsequent calls to the generated function faster then `limit` will have no effect.
 * @function throttle
 * @param {function} func - The function to be throttled.
 * @param {number} limit - The minimum interval in milliseconds `func` needs to wait before it can be called again.
 * @returns {function} The throtteled version of `func`.
 */
const throttle = (func, limit) => {
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

export default throttle
