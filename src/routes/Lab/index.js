export default (store) => ({
  path: 'lab',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Lab = require('./component/Lab').default
      cb(null, Lab)
    })
  }
})