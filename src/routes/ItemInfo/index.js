export default (store) => ({
  path: 'iteminfo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ItemInfo = require('./components/ItemInfo').default
      cb(null, ItemInfo)
    })
  }
})