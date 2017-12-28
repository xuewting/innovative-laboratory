import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './Lab.scss'
import img1 from '../img/wallhaven-566551.jpg'

class Lab extends Component {
  render() {
    return (
      <div className='Lab'>
        <div className="list_box">
        <Row>
        <Col span={5}>
          <div className="img">
            <img src={img1} alt="" />
          </div>
          </Col>
          <Col span={18} offset={1}>
          <div className="contain">
            <span>name</span>
            <span>position</span>
            <span>introduce : 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             At rerum consequuntur obcaecati et dolore eligendi. Dolorum,
              officiis! Deserunt voluptate voluptatum perspiciatis doloremque 
              unde, dolorem pariatur aspernatur consequatur corrupti saepe ad.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             At rerum consequuntur obcaecati et dolore eligendi. Dolorum,
              officiis! Deserunt voluptate voluptatum perspiciatis doloremque 
              unde, dolorem pariatur aspernatur consequatur corrupti saepe ad.</p></span>
          </div>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Lab;