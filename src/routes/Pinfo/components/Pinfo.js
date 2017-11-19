import React, { Component } from 'react';
import './Pinfo.scss'
import ResetPass from './ResetPass'
import head from './0824ab18972bd40790e0d4b571899e510fb30956.jpg'
import { Input, Row, Col, Radio, Upload, Icon, message } from 'antd'
import Basic from './Basic'

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
      disabled2: false,
      imageUrl: '',
      resetPass: 0,
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
            this.setState({ disabled2: true })
            this.refs.submit.style.background = '#f74f4f'
            this.refs.submit.style.borderColor = '#c02f2f'
          } else {
            this.refs.name.style.display = 'none'
            this.setState({ disabled2: false })
            this.refs.submit.style.background = '#13918a'
            this.refs.submit.style.borderColor = '#106b65'
          }
          break;
        }
      case 2:
        {
          this.setState({ phone: value });

          if (len != 11) {
            this.refs.phone.style.display = 'inline'
            this.setState({ disabled2: true })
            this.refs.submit.style.background = '#f74f4f'
            this.refs.submit.style.borderColor = '#c02f2f'
          } else {
            this.refs.phone.style.display = 'none'
            this.setState({ disabled2: false })
            this.refs.submit.style.background = '#13918a'
            this.refs.submit.style.borderColor = '#106b65'
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
            this.setState({ disabled2: true })
            this.refs.submit.style.background = '#f74f4f'
            this.refs.submit.style.borderColor = '#c02f2f'
          } else {
            this.refs.sid.style.display = 'none'
            this.setState({ disabled2: false })
            this.refs.submit.style.background = '#13918a'
            this.refs.submit.style.borderColor = '#106b65'
          }
          break;
        }
    }
  }

  changeState(type) {
    if (type == 1) {
      this.setState({ disabled: !this.state.disabled })
    } else {
      this.setState({ resetPass: 1 })
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
    const { disabled, disabled2, name, mail, sid, phone, imageUrl, resetPass } = this.state

    return (
      <div className='Pinfo'>
        <Row style={{ width: '100%' }} className='con'>
          <Col span={4} className='lef'>
            <div className="sidebar">
              <div className='touxiang'>
                <img src={head} alt="" className='img' />
              </div>
              <div className="select">
                <span><i className='fa fa-id-card-o'></i> </span>
                <span> 基本信息</span><span className='i'><i className=' fa fa-angle-right'></i></span>
              </div>
              <div className="select">
                <span><i className='fa fa-suitcase'></i> </span>
                <span> 所有项目</span><span className='i'><i className=' fa fa-angle-right'></i></span>
              </div>
              <div className="select">
                <span><i className='fa fa-home'></i> </span>
                <span> 实验室</span><span className='i'><i className=' fa fa-angle-right'></i></span>
              </div>
              <div className="select" style={{ border: 'none' }}>
                <span><i className='fa fa-envelope-o'></i> </span>
                <span> 消息</span><span className='i'><i className=' fa fa-angle-right'></i></span>
              </div>
            </div>
          </Col>
          <Col span={18} offset={1}>
            <Basic></Basic>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pinfo;