export default (store) => ({
  path: 'labcharge/teacher/edit',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Tedit = require('./components/Tedit').default
      cb(null, Tedit)
    })
  }
})