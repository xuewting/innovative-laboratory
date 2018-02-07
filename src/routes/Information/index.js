export default (store) => ({
  path: 'information',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Information = require('./components/Information').default
      cb(null, Information)
    })
  }
})