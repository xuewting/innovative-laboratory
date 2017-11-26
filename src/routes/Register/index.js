import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'register',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Register = require('./containers/ElapseContainer').default
      const reducer = require('./modules/elapse').default
      injectReducer(store, { key: 'register', reducer })
      cb(null, Register)
    })
  }
})
