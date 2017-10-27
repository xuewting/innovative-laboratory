import React, { Component } from 'react';
import './Lab.scss'
import { Col, Row } from 'antd'
import Honor from './Honor'
import Labitem from './Labitem'
import Envir from './Envir'
import Things from './Things'

class Lab extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    const src2 = ['cirus2 (1).png', 'cirus2 (3).png', 'cirus2 (4).png', 'cirus2 (5).png']
    const i2 = Math.round(Math.random() * 3)

    return (
      <div>

        <div className="labhead">
          <h1 className="title">Lab Name</h1>
          <p className="position">位置：D506</p>
          <p className="isopen">开放：否</p>
        </div>

        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="labintr">
          <img src={src2[i2]} alt="" style={{ width: 200, height: 200 }} />
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima saepe nulla sed omnis animi distinctio autem earum praesentium delectus, atque perspiciatis veritatis culpa, libero officia magnam ratione ea, sit.</h2>
        </div>

        <Labitem></Labitem>

        <Envir></Envir>

        <Things></Things>

        <div className="labfooter">
          <Row style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}>
            <Col span={12} style={{marginTop:40}}>
            <p className="teacher">常驻老师：teacher</p>
              <p className="charge">负责人：student</p>
              <p className="member"><a href="" style={{color:'white'}}>现有人数：12</a></p>
            </Col>
            <Col span={12}>
            <img src="science.png" alt=""/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Lab;