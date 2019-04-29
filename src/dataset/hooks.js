// import { useEffect } from 'react'
// import { useRedux } from '../hooks'
// import { addPredictionSubscriber, removePredictionSubscriber } from './actions'
// import { predictionPointsSelector, predictionKeysSelector } from './selectors'

// const mapStateToProps = {
//   predictions: predictionPointsSelector,
//   keys: predictionKeysSelector,
// }

// export const usePredictions = () => {
//   const { dispatch, predictions, keys } = useRedux(mapStateToProps)

//   useEffect(() => {
//     dispatch(addPredictionSubscriber())
//     return () => {
//       dispatch(removePredictionSubscriber())
//     }
//   }, [dispatch])

//   return { predictions, keys }
// }
