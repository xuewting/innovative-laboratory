import React, { Component } from 'react'
import { POST } from '../../../components/commonModules/POST'
import MessageModel from '../../../components/Message/Message'
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

  render () {
    return (
      <div>
      <MessageModel data={this.state.list} type={'message'}></MessageModel>
      </div>
    )
  }
}

export default Message
