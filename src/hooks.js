import { useState, useRef, useEffect, useMemo } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

/**
 * Hook to remember and provide the previous value.
 *
 * @param {any} value Value to remember.
 * @returns {any} The previous value of `value` starting with `undefined`.
 */
export function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

/**
 * Hook to get the size and position of a DOM element.
 *
 * @typedef bounds
 * @type {object}
 * @property {number} left The x position of the left side of the element.
 * @property {number} top The y position of the top side of the element.
 * @property {number} width The width of the element.
 * @property {number} height The height of the element.
 *
 * @typedef ref
 * @type React.MutableRefObject<any>
 *
 * @returns {[ref, bounds]}
 */
export function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      const ro = new ResizeObserver(([entry]) => set(entry.contentRect))

      ro.observe(ref.current)

      return () => {
        ro.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])

  return [{ ref }, bounds]
}

/**
 * Hook to see if a media query matches the current environment.
 *
 * @function useMediaQuery
 * @param {string} query The CSS media query to evaluate.
 * @returns {boolean} Whether the media query matches the current environment.
 */
export const useMediaQuery = query => {
  const queryList = useMemo(() => window.matchMedia(query), [query])

  const [matches, setMatches] = useState(queryList.matches)

  useEffect(() => {
    const handleMatchesChange = event => {
      setMatches(event.matches)
    }

    queryList.addListener(handleMatchesChange)
    return () => {
      queryList.removeListener(handleMatchesChange)
    }
  }, [queryList])

  return matches
}
