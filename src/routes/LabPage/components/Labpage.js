import React, { Component } from 'react';
import { Row, Col } from 'antd'
import LabShow from './LabShow'
import LabGoods from './LabGoods'
import LabTeacher from './LabTeacher'
import LabNews from './LabNews'
import LabItem from './LabItem'
import Detail from './Detail'
import Honor from './Labhonor'
import '../css/LabPage.scss'

class LabPage extends Component {
  render() {
    return (
      <div>
        <div className="labpage">
          <Row>
            <Col span={12} style={{ paddingRight: 5 }}>
              <Detail></Detail>
              <LabGoods></LabGoods>
              <Honor></Honor>
              <LabItem></LabItem>
              
            </Col>
            <Col span={12} style={{ paddingLeft: 5 }}>
              <LabShow></LabShow>     
              <LabNews></LabNews>
              <LabTeacher></LabTeacher>
              
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LabPage;