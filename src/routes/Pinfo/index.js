export default (store) => ({
  path: 'pinfo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Pinfo = require('./components/Pinfo').default
      cb(null, Pinfo)
    })
  }
})