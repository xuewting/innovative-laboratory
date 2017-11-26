import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './from.scss'

class From extends Component {
  render() {
    console.log(this.props.img)
    return (
      <div>
        <Row className="form_con" style={{width:'95%'}}>
          <Col className="icon" span={4}>
            <img src={this.props.img} alt="" className='i' />
          </Col>
          <Col className="inp" span={20}>
            <input type={this.props.type} className='text' placeholder={this.props.placeholder} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default From;