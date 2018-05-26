export default (store) => ({
  path: 'news',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const News = require('./components/News').default
      cb(null, News)
    })
  }
})