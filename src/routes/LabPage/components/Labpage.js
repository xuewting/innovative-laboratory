import React, { Component } from 'react';
import { Row, Col } from 'antd'
import LabShow from './LabShow'
import LabGoods from './LabGoods'
import LabTeacher from './LabTeacher'
import LabNews from './LabNews'
import LabItem from './LabItem'
import Detail from './Detail'
import '../css/LabPage.scss'

class LabPage extends Component {
  render() {
    return (
      <div>
        <div className="labpage">
          <Row>
            <Col span={14} style={{ paddingRight: 5 }}>
              <LabShow></LabShow>
            </Col>
            <Col span={10} style={{ paddingLeft: 5 }}>
              <Detail></Detail>
            </Col>
            <Col span={12} style={{paddingRight:5}}>
              <LabItem></LabItem>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LabPage;