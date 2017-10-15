import React, { Component } from 'react';
import './Register.scss'

class Register extends Component {
  render() {
    return (
      <div className='register'>
        <div className="regbox">

        <h1 className="title">注册</h1>

       <div className='inpbox'><p>昵称：</p><input type="text" className="inp"/></div>

        <div className='inpbox'><p>手机号：</p><input type="text" className="inp"/></div>

        <div className='inpbox'><p>邮箱：</p><input type="text" className="inp"/></div>

        <div className='inpbox'><p>密码：</p><input type="text" className="inp"/></div>

        <div className='inpbox'><p>确认密码：</p><input type="text" className="inp"/></div>

        <button className='regbtn'>注册</button>
        </div>
      </div>
    );
  }
}

export default Register;