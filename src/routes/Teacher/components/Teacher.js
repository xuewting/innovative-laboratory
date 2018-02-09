import React, { Component } from 'react';
import {
  Collapse,
  Row,
  Col,
} from 'antd'
import img1 from '../img/wallhaven-566551.jpg'
import img2 from '../img/wallhaven-581929.jpg'
import './Teacher.scss'
import { browserHistory } from 'react-router'
const Panel = Collapse.Panel

class Teacher extends Component {

  toInfo() {
    browserHistory.push({
      pathname: `/teacherinfo`
    })
  }
  render() {
    const style = {
      background: 'rgba(0,0,0,0.3)',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden',
      hover: {
        background: 'rgba(0,0,0,0.2)'
      }
    }
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    return (
      <div style={{ paddingTop: 10 }}>
        <Row>
          <Col span={12} style={{ paddingRight: 5 }}>
            <Collapse bordered={false} style={{ background: 'transparent' }} >
              <Panel header={
                <div className='tea_head'>
                  <Row>
                    <Col span={8}>
                      <img src={img1} alt="" className="tea_pic" />
                    </Col>
                    <Col span={15} offset={1}>
                      <span>姓名：</span>
                      <span>职称：</span>
                      <span>联系方式：</span>
                      <span>所在实验室：</span>
                    </Col>
                  </Row>
                </div>} key="1" style={style}>
                <div style={{ cursor: 'pointer' }} onClick={this.toInfo.bind(this)}>
                  <h2 className='title'>简介：</h2>
                  <p className='intr'>{text}</p>
                  <h2 className='title'>荣誉：</h2>
                  <p className='thelabhonor'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nemo incidunt, eaque repudiandae autem cupiditate facere
            sequi quasi quae, doloribus praesentium suscipit. Sed,
             maiores aut asperiores dicta quod, quo incidunt fuga.
            </p>
                </div>
              </Panel>
            </Collapse>
          </Col>
          <Col span={12} style={{ paddingLeft: 5 }}>
            <Collapse bordered={false} style={{ background: 'transparent' }} >
              <Panel header={
                <div className='tea_head'>
                  <Row>
                    <Col span={8}>
                      <img src={img1} alt="" className="tea_pic" />
                    </Col>
                    <Col span={15} offset={1}>
                      <span>姓名：</span>
                      <span>职称：</span>
                      <span>联系方式：</span>
                      <span>所在实验室：</span>
                    </Col>
                  </Row>
                </div>} key="1" style={style}>
                <div style={{ cursor: 'pointer' }} onClick={this.toInfo.bind(this)}>
                  <h2 className='title'>简介：</h2>
                  <p className='intr'>{text}</p>
                  <h2 className='title'>荣誉：</h2>
                  <p className='thelabhonor'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nemo incidunt, eaque repudiandae autem cupiditate facere
            sequi quasi quae, doloribus praesentium suscipit. Sed,
             maiores aut asperiores dicta quod, quo incidunt fuga.
            </p>
                </div>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Teacher;
