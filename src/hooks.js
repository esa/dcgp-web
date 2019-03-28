import { useState, useEffect, useMemo } from 'react'
import { createSelector } from 'reselect'
import configureStore from './store'

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
  }, [query])

  return matches
}
