export default (store) => ({
  path: 'lablist',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const LabList = require('./components/LabList').default
      cb(null, LabList)
    })
  }
})