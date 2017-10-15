import React, { Component } from 'react';
import './Login.scss'
import { Input, Row, Col, Icon } from 'antd'

class Login extends Component {
  render() {
    return (
      <div className='log'>
        <div className="loginbox">
          <h1 className="title">登录</h1>
            <Row>
              <Col span={4}><i className='fa fa-user-o fa-2x usri'></i></Col>
              <Col span={20}><Input className='account' ></Input></Col>
            </Row>
            <Row>
              <Col span={4}><i className='fa fa-lock fa-2x pasi'></i></Col>
              <Col span={20}>
            <Input className='passwd'></Input></Col>
            </Row>
            <button className='logbtn'>登录</button>
            <a href="/register" className='reg'>没有账户？注册</a>
        </div>
      </div>
    );
  }
}

export default Login;