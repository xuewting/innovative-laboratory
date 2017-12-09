import React, { Component } from 'react';
import logo from './海鲜.png'
import './register.scss'
import { Row, Col } from 'antd'
import FormItem from './From'
import email from './邮箱.png'
import phone from './手机.png'
import pass from './钥匙.png'
import check from './确认.png'
import college from './学校 (2).png'
import account from './e用户.png'
import {browserHistory} from 'React-router'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        img: account,
        placeholder: '用户名',
        type: 'text'
      }, {
        img: phone,
        placeholder: '手机号码',
        type: 'text'
      }, {
        img: email,
        placeholder: '常用邮箱',
        type: 'text'
      }, {
        img: college,
        placeholder: '所在学院',
        type: 'text'
      }, {
        img: pass,
        placeholder: '密码',
        type: 'password'
      }, {
        img: check,
        placeholder: '确认密码',
        type: 'password'
      }]
    }
  }


  render() {
    return (
      <div className='register'>
        <div className="reg_con">
          {/*logo*/}
          <div className="head_logo">
            <img src={logo} alt="" />
          </div>

          {/*from*/}
          <div className="con_from">
            <Row>
              {this.state.list.map((item, i) => {
                return (
                  <Col span={12} key={i}>
                    <FormItem img={item.img} placeholder={item.placeholder} type={item.type} />
                  </Col>
                )
              })}
            </Row>

            {/*submit*/}
            <div className="sub_but">
              提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交
        </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Register;