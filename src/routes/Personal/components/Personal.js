import React, { Component } from 'react';
import '../scss/Personal.scss'
import Lab from './Lab'
import Item from './Item'
import Pinfo from './Pinfo'
import { Row, Col } from 'antd'

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    }
  }

  changePage(value) {
    this.setState({ page: value })
  }

  render() {
    return (
      <div style={{ marginTop: 150 }}>

        <Row className='personal'>
          <Col span={5}>
            <div className='pnav'>
              <p onClick={this.changePage.bind(this,0)}>个人信息</p>
              <p onClick={this.changePage.bind(this,1)}>所属实验室</p>
              <p onClick={this.changePage.bind(this,2)}>我的项目</p>
            </div>
          </Col>

          <Col span={17} offset={1}>

            <div className="pcontent">

              {this.state.page == 0 ?
                <Pinfo></Pinfo>
                : this.state.page == 1 ?
                  <Lab></Lab> :
                  <Item></Item>}

            </div>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Personal;