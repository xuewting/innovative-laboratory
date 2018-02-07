export default (store) => ({
  path: 'mail',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Mail = require('./components/Mail').default
      cb(null, Mail)
    })
  }
})