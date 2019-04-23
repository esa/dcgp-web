import { useState, useRef, useEffect, useMemo } from 'react'
import { createSelector } from 'reselect'
import configureStore from './store'
import ResizeObserver from 'resize-observer-polyfill'

export const store = configureStore(/* provide initial state if any */)

const getPropsSelector = mapStateToProps => {
  const selectors = Object.values(mapStateToProps)
  const keys = Object.keys(mapStateToProps)

  const propsSelector = createSelector(
    ...selectors,
    (...args) =>
      args.reduce((prev, cur, i) => ({ ...prev, [keys[i]]: cur }), {})
  )

  return propsSelector
}

/**
 * Hook to use values gathered from the Redux store.
 *
 * @function useRedux
 * @param {object} mapStateToProps Object whos values are functions that can calculate a value based on the Redux store.
 * @return {object} Object whos keys are the same as those of `mapStateToProps` with the addition of `dispatch` and whos values are the computed values from the Redux store.
 * @example
 * const { foo, bar, dispatch } = useRedux({
 *  foo: store => store.foo,
 *  bar: store => store.foo.bar,
 * })
 */
export const useRedux = mapStateToProps => {
  const propsSelector = useMemo(() => getPropsSelector(mapStateToProps), [
    mapStateToProps,
  ])
  const [props, setProps] = useState(() => propsSelector(store.getState()))

  useEffect(() => {
    const handleChange = () => {
      const state = store.getState()
      const newProps = propsSelector(state)

      setProps(newProps)
    }

    const unsubsribe = store.subscribe(handleChange)
    return unsubsribe
  }, [propsSelector])

  return Object.assign(props, { dispatch: store.dispatch })
}

/**
 * Hook to remember and provide the previous value.
 *
 * @param {any} value Value to remember.
 * @returns {any} The previous value of `value` starting with `undifined`.
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

      return ro.disconnect
    }
  })

  return [ref, bounds]
}

/**
 * Hook to see if a media query matches the current environment.
 *
 * @function useMediaQuery
 * @param {string} query The CSS media query to evaluate.
 * @returns {boolean} Wheater the media query matches the current environment.
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
