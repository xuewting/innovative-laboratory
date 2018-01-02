export default (store) => ({
  path: 'message',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Message = require('./components/Message').default
      cb(null, Message)
    })
  }
})