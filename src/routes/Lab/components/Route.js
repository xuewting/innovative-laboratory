import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './Lab.scss'
import img1 from '../img/wallhaven-566551.jpg'
import {browserHistory} from 'react-router'

class Lab extends Component {
  toDetail(){
    browserHistory.push({
      pathname:`/labpage`
    })
  }
  render() {
    return (
      <div className='Lab'>
        <div className="list_box" onClick={this.toDetail.bind(this)}>
        <Row>
        <Col span={5} >
          <div className="img">
            <img src={img1} alt="" />
          </div>
          </Col>
          <Col span={18} offset={1}>
          <div className="contain">
            <span>名称：</span>
            <span>位置：</span>
            <span>介绍： 
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             At rerum consequuntur obcaecati et dolore eligendi. Dolorum,
              officiis! Deserunt voluptate voluptatum perspiciatis doloremque 
              </p></span>
          </div>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Lab;