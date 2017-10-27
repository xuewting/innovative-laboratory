import React, { Component } from 'react';
import { Row, Col } from 'antd'

class Honor extends Component {
  render() {
    return (

      <div className="honor">
        <Row>
          <Col span={12}>
            <div className="achievement">
              <img src="achievement.png" alt="" />
            </div>
          </Col>
          <Col span={12}>
            
            <div className="reward">
              <img src="honor.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Honor;