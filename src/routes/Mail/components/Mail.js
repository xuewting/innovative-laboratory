import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Scroll from './Scroll'
import Content from './Content'
import { POST } from '../../../components/commonModules/POST'
import moment from 'moment'
class Mail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      con:'',
      baseMess:[], // 基本消息
      message:[] // 申请消息
    }
  }

  changeContent(value,a){
    this.setState({ con:value })
    console.log(a)
  } 
  componentDidMount () {
    let data = ``
    POST('/user/getBaseMessgae', data, (re) => {
      if (re.state === 1) {
        this.setState({ baseMess:re.data })
      }
    })
    POST('/user/getMessgae', data, re => {
      if (re.state === 1) {
        console.log(re)
        this.setState({ message:re.data })
      }
    })
  }
  render () {
    return (
      <div>
        <Row>
          <Col span={10} style={{ paddingRight:5 }}>
            <Scroll changeContent={this.changeContent.bind(this)}
              baseMess={this.state.baseMess} message={this.state.message} />
          </Col>
          <Col span={14} style={{ paddingLeft:5 }}>
            <Content content={this.state.con} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Mail
