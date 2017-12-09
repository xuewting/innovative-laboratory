export default (store) => ({
  path: 'setting',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Setting = require('./components/Setting').default
      cb(null, Setting)
    })
  }
})
