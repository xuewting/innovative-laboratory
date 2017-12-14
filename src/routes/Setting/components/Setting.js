import React, { Component } from 'react';
import Head from './Head'
import { Row, Col } from 'antd'
import './Setting.scss'
import Content from './Content'
import Passwd from './Passwd'
import LabCharge from './LabCharge'

class Setting extends Component {
  render() {
    return (
      <Row style={{width:'80%',minWidth:1500,marginLeft:'auto',marginRight:'auto'}}>
        <Col span={5}  style={{paddingLeft:5,paddingRight:5}}>
          <Head></Head>
          <LabCharge></LabCharge>
          <Passwd></Passwd>
          
        </Col>
        <Col span={19} style={{paddingLeft:5,paddingRight:5}}>
          <Content></Content>
        </Col>
      </Row>
    );
  }
}

export default Setting;