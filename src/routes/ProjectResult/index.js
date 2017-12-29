export default (store) => ({
  path: 'projectresult',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ProjectResult = require('./components/ProjectResult').default
      cb(null, ProjectResult)
    })
  }
})
