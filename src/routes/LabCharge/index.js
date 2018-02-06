export default (store) => ({
  path: 'labcharge/:chargename',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const LabCharge = require('./components/LabCharge').default
      cb(null, LabCharge)
    })
  }
})