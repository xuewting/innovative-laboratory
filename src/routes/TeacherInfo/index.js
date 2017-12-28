export default (store) => ({
  path: 'teacherinfo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const TeacherInfo = require('./components/TeacherInfo').default
      cb(null, TeacherInfo)
    })
  }
})
