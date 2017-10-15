export default (store) => ({
  path:'register',
  getComponent (nextState,cb){
    require.ensure([],(require)=>{
      const Register = require('./component/Register').default
      cb(null,Register)
    })
  }
})