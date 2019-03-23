import { useContext, useState, useEffect, useMemo } from 'react'
import { ReactReduxContext } from 'react-redux'

export const useRedux = () => {
  const redux = useContext(ReactReduxContext)
  // console.log(redux);
  return redux.store
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
