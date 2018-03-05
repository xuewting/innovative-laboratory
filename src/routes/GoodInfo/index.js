export default (store) => ({
  path: 'goodinfo/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const GoodInfo = require('./components/Goodinfo').default
      cb(null, GoodInfo)
    })
  }
})