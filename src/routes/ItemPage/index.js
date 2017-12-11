export default (store) => ({
  path: 'itempage',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ItemPage = require('./components/ItemPage').default
      cb(null, ItemPage)
    })
  }
})