export default (store) => ({
  path: 'item',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item = require('./components/Item').default
      cb(null, Item)
    })
  }
})