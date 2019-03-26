// For example on Redux middleware see:
// https://github.com/demo-projects/redux-patterns-demo/tree/finish/src/redux/middleware
// and the corresponding talk by Nir Kaufman: https://www.youtube.com/watch?v=JUuic7mEs-s
import evolution from './evolution/middleware'
import settings from './settings/middleware'
import dataset from './dataset/middleware'

export default [...evolution, ...settings, ...dataset]
