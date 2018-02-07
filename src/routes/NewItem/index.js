export default (store) => ({
  path: 'newitem',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const NewItem = require('./components/NewItem').default
      cb(null, NewItem)
    })
  }
})