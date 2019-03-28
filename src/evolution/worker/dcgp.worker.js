/* eslint-env worker */
import initializer from 'dcgp'
import dcgpUrl from 'dcgp/dcgp.wasm'
import configureStore from './store'
import { setDcgpInstance } from '../actions'

const store = configureStore(/* preloaded state */)

const main = async () => {
  const dcgp = await initializer(fetch(dcgpUrl))

  store.dispatch(setDcgpInstance(dcgp))

  onmessage = event => {
    store.dispatch(event.data)
  }
}

main()
