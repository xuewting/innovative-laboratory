import React, { Component } from 'react';
import Head from './Head'
import { Row, Col } from 'antd'
import './Setting.scss'
import Content from './Content'
import Passwd from './Passwd'
import LabCharge from './LabCharge'



class Setting extends Component {

  goback(){
  history.back()
}

  render() {
    return (
      <Row style={{ width: '80%', minWidth: 1500, marginLeft: 'auto', marginRight: 'auto' }}>
        <Col span={5} style={{ paddingLeft: 5, paddingRight: 5 }}>
          <Head></Head>          
          <Passwd></Passwd>
          <div className="back">
            <div className="bac_but" onClick={this.goback.bind(this)}>
              <span>返&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回</span>
            </div>
          </div>
        </Col>
        <Col span={19} style={{ paddingLeft: 5, paddingRight: 5 }}>
          <Content></Content>
        </Col>
      </Row>
    );
  }
}

export default Setting;