import React, { Component } from 'react';
import { Row, Col } from 'antd'
import LabShow from './LabShow'
import LabGoods from './LabGoods'
import LabTeacher from './LabTeacher'
import LabNews from './LabNews'
import LabItem from './LabItem'
import '../css/LabPage.scss'

class LabPage extends Component {
  render() {
    return (
      <div>
        <div className="labpage">
          <Row>
            <Col span={12} style={{ paddingRight: 5 }}>
              <LabShow></LabShow>
            </Col>
            <Col span={12} style={{ paddingLeft: 5 }}>
              <div className="labintor">
                <h2>简介：</h2><span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores a minus error magni officia, fugiat ducimus!
              Dignissimos accusamus quo molestias animi, dolorum qui
              perspiciatis odio quam optio quos, quis corporis.
              </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LabPage;