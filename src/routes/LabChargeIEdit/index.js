export default (store) => ({
  path: 'labcharge/item/edit',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Iedit = require('./components/IEdit').default
      cb(null, Iedit)
    })
  }
})