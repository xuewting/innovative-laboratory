export default (store) => ({
  path: 'mdetail',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const MDetail = require('./components/MDetail').default
      cb(null, MDetail)
    })
  }
})
