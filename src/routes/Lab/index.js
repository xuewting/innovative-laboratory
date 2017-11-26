export default (store) => ({
  path: 'lab',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Lab = require('./components/Route').default
      cb(null, Lab)
    })
  }
})
