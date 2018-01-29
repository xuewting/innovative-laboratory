export default (store) => ({
  path: 'labpage',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const LabPage = require('./components/Labpage').default
      cb(null, LabPage)
    })
  }
})