import React, { Component } from 'react';
import Head from './Head'
import { Row, Col } from 'antd'
import './Setting.scss'
import Content from './Content'

class Setting extends Component {
  render() {
    return (
      <Row>
        <Col span={4} offset={2} style={{paddingLeft:5,paddingRight:5}}>
          <Head></Head>
        </Col>
        <Col span={16} style={{paddingLeft:5,paddingRight:5}}>
          <Content></Content>
        </Col>
      </Row>
    );
  }
}

export default Setting;