/* eslint-env worker */
import { initialise } from 'dcgp'
import dcgpUrl from 'dcgp/dcgp.wasm'
import configureStore from './store'
import { setDcgpInstance } from '../actions'

const store = configureStore(/* preloaded state */)

const main = async () => {
  const dcgpModule = await initialise(fetch(dcgpUrl))

  store.dispatch(setDcgpInstance(dcgpModule))

  onmessage = event => {
    store.dispatch(event.data)
  }
}

main()
