import React, { Component } from 'react';
import { Row, Col, Tooltip } from 'antd'

class Basic extends Component {
  render() {
    return (
      <div className='basic'>
        <div className='tit'>
          <h1 style={{ width: '70%' }}>基本信息</h1>
          <i style={{ float: 'right', marginRight: 10 }} className='fa fa-gears i'></i>
        </div>
        <div className="content">
          <Row className='box'>
            <Col className="what" span={4}>账号：</Col><Col span={15} className='con1'>11111</Col>
          </Row>
          <Row className='box'>
            <Col className="what" span={4}>手机号：</Col><Col className='con1' span={15}>111111</Col>
          </Row>
          <Row className='box'>
            <Col className="what" span={4}>Email：</Col><Col className='con1' span={15}>111111</Col>
          </Row>
          <Row className='box'>
            <Col className="what" span={4}>学号（教工号）：</Col><Col className='con1' span={15}>111111111</Col>
          </Row>
          <Row className='box'>
            <Col className="what" span={4}>所属实验室：</Col><Col className='con1' span={15}>111111</Col>
          </Row>
          <Row className='box'>
            <Col className="what" span={4}>个性签名：</Col><Col className='con1' span={15}>11111</Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Basic;