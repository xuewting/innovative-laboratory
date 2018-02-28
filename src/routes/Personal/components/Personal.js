import React, { Component } from 'react'
import '../css/personal.scss'
import { Row, Col } from 'antd'
import Head from '../module/Head'
import Content from '../module/Content'
import Calendar from '../module/Calendar'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
class Personal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInfo:[],
      lab:{}
    }
  }
  componentDidMount () {
    let data = ``
    POST('/user/getUserInfo', data, re => {
      if (re.state === 1) {
        this.setState({ userInfo:re.data })
        this.setState({ lab:re.data.lab })
      }
    })
  }
  render () {
    return (
      <div className='personal'>
        <Row>
          <Col span={4} style={{ paddingRight:5 }}>
            <Head userInfo={this.state.userInfo}lab={this.state.lab} />           
          </Col>
          <Col span={20} style={{ paddingLeft:5 }}>
            <Content introduce={this.state.userInfo.introduce}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Personal
