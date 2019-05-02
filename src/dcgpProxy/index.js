// eslint-disable-next-line import/default
import DcgpWorker from './worker/dcgp.worker'
import { Observable } from 'rxjs'
import * as constants from './constants'
const nanoid = require('nanoid/non-secure')

const _15FPS = Math.round(1000 / 15)

const backend = new DcgpWorker()

const singleRequestAnswer = event => {
  const promiseId = nanoid()

  return new Promise((resolve, reject) => {
    const handleBackendMessages = message => {
      const { data } = message
      const messagePromiseId = data.meta && data.meta.id

      if (messagePromiseId !== promiseId) return

      backend.removeEventListener('message', handleBackendMessages)

      if (data.meta && data.meta.isError) {
        reject(data.payload)
      } else {
        resolve(data.payload)
      }
    }

    backend.addEventListener('message', handleBackendMessages)

    if ('meta' in event) {
      event.meta.id = promiseId
    } else {
      event.meta = { id: promiseId }
    }

    backend.postMessage(event)
  })
}

/**
 * @async
 * @param {any} payload data used in the backend
 */
export const doStep = payload =>
  singleRequestAnswer({
    type: constants.STEP,
    payload,
  })

/**
 * @async
 * @param {any} payload data used in the backend
 */
export const getEquations = payload =>
  singleRequestAnswer({
    type: constants.EQUATION,
    payload,
  })

/**
 * @async
 * @param {any} payload data used in the backend
 */
export const getLoss = payload =>
  singleRequestAnswer({
    type: constants.LOSS,
    payload,
  })

/**
 * @async
 * @param {any} payload data used in the backend
 * @returns {Promise}
 */
export const getPredictions = payload =>
  singleRequestAnswer({
    type: constants.PREDICTION,
    payload,
  })

const evolutionId = nanoid()

export const evolution = {
  pause() {
    backend.postMessage({
      type: constants.PAUSE,
      meta: {
        id: evolutionId,
      },
    })
  },

  resume() {
    backend.postMessage({
      type: constants.RESUME,
      meta: {
        id: evolutionId,
      },
    })
  },

  /**
   * @async
   * @param {any} payload data used in the backend
   * @returns {Observable} progress stream
   */
  start(payload, progressInterval = _15FPS) {
    return new Observable(function subscribe(observer) {
      const handleBackendMessages = message => {
        const { data } = message
        const messageEvolutionId = data.meta && data.meta.id

        if (messageEvolutionId !== evolutionId) return

        if (data.meta.isError) {
          observer.error(data.payload)
          return
        }

        observer.next(data.payload)

        if (data.payload.done) {
          observer.complete()
        }
      }

      backend.addEventListener('message', handleBackendMessages)

      backend.postMessage({
        type: constants.START,
        payload,
        meta: {
          progressInterval,
          id: evolutionId,
        },
      })

      return function unsubscribe() {
        backend.removeEventListener('message', handleBackendMessages)

        backend.postMessage({
          type: constants.STOP,
          meta: {
            id: evolutionId,
          },
        })
      }
    })
  },
}
