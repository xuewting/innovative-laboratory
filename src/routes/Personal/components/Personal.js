import React, { Component } from 'react'
import '../css/personal.scss'
import { Row, Col } from "antd"
import Head from '../module/Head'
import Content from '../module/Content'
import Calendar from '../module/Calendar'

class Personal extends Component {
  render () {
    return (
      <div className='personal'>
        <Row>
          <Col span={4} style={{paddingRight:5}}>
            <Head></Head>
            <Calendar></Calendar>
          </Col>
          <Col span={20} style={{paddingLeft:5}}>
            <Content></Content>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Personal
