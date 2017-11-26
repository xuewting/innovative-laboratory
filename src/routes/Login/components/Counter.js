import React, { Component } from 'react';
import './Login.scss'
import head from './0824ab18972bd40790e0d4b571899e510fb30956.jpg'
import off from './off.png'
import { Row, Col } from 'antd'
import user from './e用户.png'
import pass from './钥匙.png'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <div style={{ width: '100%', height: 120 }}></div>
        {/*用户头像*/}
        <div className='login_box'>
          <div className='user'>
            <img src={head} alt="" className="head" />
            <div className="change">
              <img src={off} alt="" style={{ width: '60%', marginTop: 15 }} />
            </div>
          </div>
        </div>


        <div className="content">
          {/*Login-input*/}
          <Row className="account">
            <Col className="icon" span={4}>
              <img src={user} alt="" className='i' />
            </Col>
            <Col className="inp" span={20}>
              <input type="text" className='text' placeholder='login' />
            </Col>
          </Row>

          <Row className="passwd">
            <Col className="icon" span={4}>
              <img src={pass} alt="" className='i' />
            </Col>
            <Col className="inp" span={20}>
              <input type="password" className='text' placeholder='password' />
            </Col>
          </Row>

          {/*button*/}
          <Row className="login_but">
            <Col span={12} style={{paddingLeft:10,paddingRight:10}}>
              <div className="but">
                <span>注册</span>
              </div>
            </Col>
            <Col span={12} style={{paddingLeft:10,paddingRight:10}}>
              <div className="but">
                <span>登录</span>
              </div>
            </Col>
          </Row>

        {/*foreget*/}
        <div className="forget">
        <p>忘记密码？</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
