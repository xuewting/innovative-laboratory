export default (store) => ({
  path: 'search',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Search = require('./components/Search').default
      cb(null, Search)
    })
  }
})
