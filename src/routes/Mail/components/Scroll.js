import React, { Component } from 'react'
import FreeScrollBar from 'react-free-scrollbar'
import { Row, Col } from 'antd'
import '../css/scroll.scss'
import mark from '../img/star.png'
import { POST } from '../../../components/commonModules/POST'
import moment from 'moment'
class Scroll extends Component {
  constructor (props) {
    super(props)
    this.state = {
      baseMess:[], // 基本消息
      message:[], // 申请消息
      active:-1,
      type:''
    }
  }
  

  active=(num, item, a) => {
    this.setState({ active:num,
      type:a })
    this.props.changeContent(item, a)
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.changeContent(nextProps.message[this.state.active], this.state.type)
  // }
  

  render () {
    const style1 = {
      background:'rgba(255,255,255,0.1)'
    }
    const style2 = {
      color:'#fff'
    }
    const mark1 = {
      display:'inline-block',
      width:'80%',
      padding:5
    }
    const mark2 = {
      display: 'none'
    }

    return (
      <div style={{ marginBottom:20 }}>
        <FreeScrollBar style={{ height:625, padding:10 }}>
          {/* 遍历基本信息 */}
          {this.props.baseMess.map((item, i) => {
            var time = moment(item.time).format('YYYY-MM-DD')
            return (
              <div className='mail_scroll_item' key={i} style={this.state.active == i ? style1 : style2} onClick={this.active.bind(this, i, item, 0)}>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1}>
                    <img src={mark} alt='' style={this.state.active == i && this.state.type == 0 ? mark1 : mark2} />
                  </Col>
                  <Col span={19}><div className='mail_item_from'>{item.title}</div></Col>
                  <Col span={4}><div className='mail_item_time'>{time}</div></Col>
                </Row>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1} />
                  <Col span={19}><div className='mail_item_to'>发送人: {}</div></Col>
                </Row>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1} />
                  <Col span={22}><div className='mail_item_intor'>{item.user.name}</div></Col>
                </Row>
              </div>
            )
          })}
          {/* 遍历申请消息 */}
          {this.props.message.map((item, i) => {
            return (
              <div className='mail_scroll_item' key={i} style={this.state.active == i ? style1 : style2} onClick={this.active.bind(this, i, item, 1)}>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1}>
                    <img src={mark} alt='' style={this.state.active == i && this.state.type == 1 ? mark1 : mark2} />
                  </Col>
                  <Col span={19}><div className='mail_item_from'>{item.pname}</div></Col>
                  <Col span={4}><div className='mail_item_time'>{item.applyTime}</div></Col>
                </Row>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1} />
                  <Col span={19}><div className='mail_item_to'>From: {}</div></Col>
                </Row>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1} />
                  <Col span={22}><div className='mail_item_intor'>{item.user.name}</div></Col>
                </Row>
              </div>
            )
          })}
        </FreeScrollBar>
      </div>
    )
  }
}

export default Scroll
