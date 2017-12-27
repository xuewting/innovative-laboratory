export default (store) => ({
  path: 'teacher',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Teacher = require('./components/Teacher').default
      cb(null, Teacher)
    })
  }
})
