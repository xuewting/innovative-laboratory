export default (store) => ({
  path: 'personal',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Personal = require('./components/Personal').default
      cb(null, Personal)
    })
  }
})