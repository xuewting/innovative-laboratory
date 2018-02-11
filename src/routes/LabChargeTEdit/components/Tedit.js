import React, { Component } from 'react';
import Side from '../../LabCharge/components/Side'
import {Row, Col} from 'antd'

class Tedit extends Component {

  chargepage(){

  }
  render() {
    return (
      <div>
        <Row>
          <Col span={5} style={{paddingRight:5}}>
            <Side chargepage={this.chargepage.bind(this)}></Side>
          </Col>
          <Col span={19} style={{paddingLeft:5,paddingTop: 20, paddingRight: 15}}>
            <div></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tedit;