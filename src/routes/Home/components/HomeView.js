import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Side from '../../../components/Sidebar/Sidebar'
import {Row, Col} from 'antd'

class HomeView extends React.Component {
  render() {
    return (
      <div>
      <Row>
      <Col span={4} style={{paddingRight:10}}>
          <Side></Side>
        </Col>
        </Row>
      </div>
    );
  }
}

export default HomeView;