import React, { Component } from 'react'
import { Row, Col, message, Button } from 'antd'
import './Message.scss'
import { POST } from '../../../components/commonModules/POST'
import { browserHistory } from 'react-router'
class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[]
    }
  }

  componentWillMount () {
    // 获取数据
    POST('/QueryNotice', ``, re => {
      if (re.state == 1) {
        this.setState({ list: re.data })
      } else {
        message.error('服务器错误')
      }
    })
  }

  // 跳转到消息详情
  toDetail (id) {
    browserHistory.push({
      pathname:'/mdetail',
      query:{
        id:id
      }
    })
  }

  render () {
    return (
      <div>
        <Button type='primary' onClick={() => history.back()} style={{  marginLeft:30, marginBottom:20 }}>返回</Button>
        <Row>
          <div className='message'>
            <div className='mes_list'>
              <div className='mes_box'>
                {this.state.list.map((item, i) => {
                  return (
                    <Row key={i}>
                      <Col span={18}>
                        <div className='mes_con' onClick={() => this.toDetail(item.id)}>
                        <h2>{item.title}</h2>
                        <div className='contain'>
                          <span>{item.content ? item.content : ''}</span>
                        </div>
                      </div>
                      </Col>
                    </Row>
                  )
                })}
              </div>
            </div>
          </div>

        </Row>
      </div>
    )
  }
}

export default Message
