export default (store) => ({
  path: 'goods',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Goods = require('./components/Goods').default
      cb(null, Goods)
    })
  }
})