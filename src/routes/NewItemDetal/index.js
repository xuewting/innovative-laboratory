export default (store) => ({
  path: '/labcharge/news/newitemdetail',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const NewItemDetail = require('./components/NewItemDetail').default
      cb(null, NewItemDetail)
    })
  }
})