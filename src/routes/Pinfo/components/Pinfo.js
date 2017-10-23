import React, { Component } from 'react';
import './Pinfo.scss'
import ResetPass from './ResetPass'
import { Input, Row, Col, Radio, Upload,Icon,message } from 'antd'

const RadioGroup = Radio.Group;

class Pinfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sex: 1,
      disabled: true,
      sid: 1111111111,
      name: 'haha',
      phone: 11111111111,
      mail: '541006240@qq.com',
      disabled2:false,
      imageUrl:'',
      resetPass:0,
    }
  }

  changeValue(value, type) {
    let len = value.length
    switch (type) {
      case 1:
        {
          this.setState({ name: value });

          if (len > 6 || len == 0) {
            this.refs.name.style.display = 'inline'
            this.setState({disabled2:true})
            this.refs.submit.style.background='#f74f4f'
            this.refs.submit.style.borderColor='#c02f2f'
          } else {
            this.refs.name.style.display = 'none'
            this.setState({disabled2:false})
            this.refs.submit.style.background='#13918a'
            this.refs.submit.style.borderColor='#106b65'
          }
          break;
        }
      case 2:
        {
          this.setState({ phone: value });

          if (len != 11) {
            this.refs.phone.style.display = 'inline'
            this.setState({disabled2:true})
            this.refs.submit.style.background='#f74f4f'
            this.refs.submit.style.borderColor='#c02f2f'
          } else {
            this.refs.phone.style.display = 'none'
            this.setState({disabled2:false})
            this.refs.submit.style.background='#13918a'
            this.refs.submit.style.borderColor='#106b65'
          }
          break;
        }
      case 3:
        {
          this.setState({ mail: value });
          break;
        }
      case 4:
        {
          this.setState({ sid: value });
          if (len != 10) {
            this.refs.sid.style.display = 'inline'
            this.setState({disabled2:true})
            this.refs.submit.style.background='#f74f4f'
            this.refs.submit.style.borderColor='#c02f2f'
          } else {
            this.refs.sid.style.display = 'none'
            this.setState({disabled2:false})
            this.refs.submit.style.background='#13918a'
            this.refs.submit.style.borderColor='#106b65'
          }
          break;
        }
    }
  }

  changeState(type) {
    if(type==1){
    this.setState({ disabled: !this.state.disabled })
  }else{
    this.setState({resetPass:1})
  }
  }

  onChange(e) {
    this.setState({ sex: e.target.value })
  }
  render() {
    const style = {
      color: '#f74f4f',
      display: 'none',
    }
    const { disabled, disabled2, name, mail, sid, phone, imageUrl,resetPass } = this.state

    return (
      <div className='Pinfo'>
      {resetPass==0?
      <div>
        <h1 className="pintitle">个人信息</h1>

        <Row className="inbox">
          <Col span={3}><p>姓名：</p></Col>
          <Col span={10}>
            <Input
              className={disabled==false?'in2':'in'}            
              disabled={disabled}
              onChange={(e) => this.changeValue(e.target.value, 1)}
              placeholder={name}
              value={name}>
            </Input></Col>
          <Col span={2}><i className='fa fa-times fa-1x' style={style} ref='name'></i></Col>
        </Row>

        <Row className="inbox">
          <Col span={3}><p>邮箱：</p></Col>
          <Col span={10}>
            <Input
              className={disabled==false?'in2':'in'}              
              disabled={disabled}
              onChange={(e) => this.changeValue(e.target.value, 3)}
              placeholder={mail}
              value={mail}>
            </Input></Col>
          <Col span={2}><i className='fa fa-times fa-1x' style={style} ref='mail'></i></Col>
        </Row>

        <Row className="inbox">
          <Col span={3}><p>手机号：</p></Col>
          <Col span={10}>
            <Input
              className={disabled==false?'in2':'in'}
              disabled={disabled}
              onChange={(e) => this.changeValue(e.target.value, 2)}
              placeholder={phone}
              value={phone}>
            </Input></Col>
          <Col span={2}><i className='fa fa-times fa-1x' style={style} ref='phone'></i></Col>
        </Row>

        <Row className="inbox">
          <Col span={3}><p>性别：</p></Col>
          <Col span={10}>
            <RadioGroup onChange={this.onChange.bind(this)} value={this.state.sex} disabled={disabled}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </RadioGroup>
          </Col>
        </Row>

        <Row className="inbox">
          <Col span={3}><p>身份：</p></Col>
          <Col span={10}><p>学生</p></Col>
        </Row>

        <Row className="inbox">
          <Col span={3}><p>学号：</p></Col>
          <Col span={10}>
            <Input
              className={disabled==false?'in2':'in'}             
              disabled={disabled}
              onChange={(e) => this.changeValue(e.target.value, 4)}
              placeholder={sid}
              value={sid}>
            </Input></Col>
          <Col span={2}><i className='fa fa-times fa-1x' style={style} ref='sid'></i></Col>
        </Row>
        <Row style={{width:'30%',marginLeft:'auto',marginRight:'auto'}}>
        <Col span={12}>
        <button onClick={this.changeState.bind(this,1)} disabled={disabled2} ref='submit'>
          {disabled == true ? '修改信息' : '保存'}
        </button>
        </Col>
        <Col span={12}>
        <button  onClick={this.changeState.bind(this,2)}>
          修改密码
        </button>
        </Col>
        </Row>
        </div>:<ResetPass></ResetPass>}
      </div>
    );
  }
}

export default Pinfo;