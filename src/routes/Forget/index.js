export default (store) => ({
  path: 'forget',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Forget = require('./components/Forget').default
      cb(null, Forget)
    })
  }
})