import React, { Component } from 'react';
import './ResetPass.scss'
import { Row, Col, Button } from 'antd'

class ResetPass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPass: '',
      disabled: true,
      state: 0,
      idcode: ''
    }
  }

  onChange(value, type) {
    if (type == 1) {
      if (value.length < 6||value.length>10) {
        this.refs.new.style.display = 'inline'
      } else {
        this.setState({ newPass: value })
        this.refs.new.style.display = 'none'
      }
    } else if (type == 3) {
      this.setState({ idcode: value })
    } else {
      var pass = this.state.newPass
      if (value != pass) {
        this.refs.comfir.style.display = 'inline'
      } else {
        this.refs.comfir.style.display = 'none'
        this.setState({ disabled: false })
      }
    }
  }

  onClick() {
    this.setState({ state: 1 })
  }

  render() {
    const style1 = {
      color: '#f74f4f',
      display: 'none',
    }
    const { disabled, state } = this.state
    return (
      <div className='reset'>

        <h1 className="retitle">修改密码</h1>

        <Row style={{ paddingLeft: 45 }}>
          <Col span={4}><p>新密码</p></Col>
          <Col span={10}>
          <input 
          type="password" 
          className="re" 
          onChange={(e) => this.onChange(e.target.value, 1)} 
          placeholder='请输入新密码(6-10位数)'/>
          </Col>
          <Col span={2} offset={8} style={{ paddingTop: 30 }}>
          <i className='fa fa-times fa-1x' style={style1} ref='new'></i>
          </Col>
        </Row>

        <Row style={{ paddingLeft: 45 }}>
          <Col span={4}><p>确认密码</p></Col>
          <Col span={10}>
            <input type="password" className="re" onChange={(e) => this.onChange(e.target.value, 2)} />
          </Col>
          <Col span={2} offset={8} style={{ paddingTop: 30 }}>
          <i className='fa fa-times fa-1x' style={style1} ref='comfir'></i>
          </Col>
        </Row>

        {state == 1 ? <Row style={{ paddingLeft: 45 }}>
          <Col span={5}><p>输入验证码</p></Col>
          <Col span={9}>
          <input 
          type="text" 
          className="re" 
          onChange={(e) => this.onChange(e.target.value, 3)}
          placeholder='输入邮箱中收到的验证码' />
          </Col>
        </Row> : ''}
        
        <button disabled={disabled} style={{ cursor: 'url(stop.png)' }} onClick={this.onClick.bind(this)}>
          {state == 0 ? '发送验证码' : '提交'}</button>
      </div>
    );
  }
}

export default ResetPass;