import React, { Component } from 'react';
import './Login.scss'
import {POST1} from '../../../components/commonModules/POST'
import { Input, Row, Col, Icon,message } from 'antd'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      account:'',
      passwd:''
    }
  }
  
  onchange(value,type) {
    if(type==1){
        this.setState({account:value})
    }else{
      this.setState({passwd:value})
    }
  } 

  Login() {
    let {account, passwd} = this.state
    if(account.length == 11){
      var data=`phone=${account}&password=${passwd}`
    }else if(account.length <= 6){
      var data=`name=${account}&password=${passwd}`
    }else{
      var data=`email=${account}&password=${passwd}`
    }
    
    console.log(data)

    POST1('/login',data,(re)=>{
      switch(re.State){
        case 1 :
          message.success('登陆成功')
          break;
        case 0:
          message.error('服务器错误')
          break;
        case -1:
          message.error('用户名不存在')
          break;
        case -2:
          message.error('密码错误')
          break;
      }
    })
    
  }
  
  render() {
    return (
      <div className='log'>
        <div className="loginbox">
          <h1 className="title">登录</h1>
            <Row style={{marginLeft:'auto',marginRight:'auto'}}>
              <Col span={4}><i className='fa fa-user-o fa-2x usri'></i></Col>
              <Col span={20}>
              <Input 
              className='account' 
              onChange={(e) => {this.onchange(e.target.value,1)}}
              placeholder='以用户名，手机或邮箱登陆'></Input>
              </Col>
            </Row>
            <Row>
              <Col span={4}><i className='fa fa-lock fa-2x pasi'></i></Col>
              <Col span={20}>
            <Input 
            className='passwd' 
            onChange={(e) => {this.onchange(e.target.value,2)}}
            type='password'></Input>
            </Col>
            </Row>
            <button className='logbtn' onClick={this.Login.bind(this)}>登录</button>
            <a href="/register" className='reg'>没有账户？注册</a>
        </div>
      </div>
    );
  }
}

export default Login;