import React, { Component } from 'react'
import logo from './海鲜.png'
import './register.scss'
import { Row, Col, message } from 'antd'
import FormItem from './From'
import email from './邮箱.png'
import phone from './手机.png'
import pass from './钥匙.png'
import check from './确认.png'
import college from './学校 (2).png'
import account from './e用户.png'
import { browserHistory } from 'React-router'
import { POST } from '../../../components/commonModules/POST'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{
        img: account,
        placeholder: '用户名(不小于3个字且小于15个字符)',
        type: 'text'
      }, {
        img: email,
        placeholder: '常用邮箱',
        type: 'text'
      }, {
        img: pass,
        placeholder: '密码（大于5个字符且小于15个字符）',
        type: 'password'
      }, {
        img: check,
        placeholder: '确认密码',
        type: 'password'
      }],
      uname:'',
      mail:'',
      pass:'',
      repass:''
    }
  }

  onChange (value, type) {
    console.log(value)
    switch (type) {
      case 1:
        this.setState({ uname:value }); break
      case 2:
        this.setState({ mail:value }); break
      case 3:
        this.setState({ pass:value }); break
      case 4:
        this.setState({ repass:value }); break
    }
  }

  commit () {
    var { uname, mail, pass, repass } = this.state
    var data = `name=${uname}&email=${mail}&password=${pass}`
    if (!uname | !mail | !pass) {
      message.error('所有信息不能为空，请确认您的输入')
    }    else if (uname.length < 3) {
      message.error('用户名应大于或等于三个字符')
    } else if (!mail.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
      message.error('请输入正确的邮箱地址')
    } else if (pass.length <= 5) {
      message.error('请输入大于六位数的密码')
    } else if (pass != repass) {
      message.error('两次密码输入不一致，请重新确认密码')
    } else{
      POST('/register', data, (re) => {
        if (re.state == 1) {
          message.success('注册成功！')
          browserHistory.push({
            pathname: '/login'
          })
        } else if (re.state == 0) {
          message.error('服务器错误')
        } else if (re.state == -2) {
          message.error('邮箱已被占用，请更换邮箱')
        } else if (re.state == -1) {
          message.error('昵称已被占用')
        }
      })
    }
  }

  render () {
    return (
      <div className='register'>
        <div className='reg_con'>
          {/* logo*/}
          <div className='head_logo'>
            <img src={logo} alt='' />
          </div>

          {/*from */}
          <div className='con_from'>
            <Row>
              {this.state.list.map((item, i) => {
                return (
                  <Col span={12} key={i}>
                    <FormItem
                      img={item.img}
                      placeholder={item.placeholder}
                      type={item.type}
                      num={i + 1}
                      changevalue={this.onChange.bind(this)} />
                  </Col>
                )
              })}
            </Row>

            {/*submit */}
            <div className='sub_but' onClick={this.commit.bind(this)} style={{ display:'block' }}>
              注&nbsp;&nbsp;&nbsp;册
        </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Register
