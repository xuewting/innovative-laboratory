import React, { Component } from 'react';
import './Envir.scss'
import { Row, Col} from 'antd'

class Envir extends Component {
  render() {
    return (

      <div className="envir">
      <h1 className="title">环境展示</h1>
      <Row>
      <Col className='photo' span={8}>
        <img src="wallhaven-461216.jpg" alt="" />
        </Col>
        <Col className='photo' span={8}>
        <img src="wallhaven-135639.jpg" alt="" />
        </Col>
        <Col className='photo' span={8}>
        <img src="wallhaven-7835.png" alt="" />
        </Col>
        </Row>
      </div>
    );
  }
}

export default Envir;