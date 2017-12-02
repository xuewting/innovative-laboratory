import React from 'react'
import './HomeView.scss'
import Side from '../../../components/Sidebar/Sidebar'
import LabList from './LabList'
import {Row, Col} from 'antd'
import Public from './Public'
import Item from './Item'
import Teacher from './Teacher'

class HomeView extends React.Component {
  render() {
    return (
      <div >
      <Row>
      <Col span={4} style={{paddingRight:10}}>
          <Side></Side>
        </Col>
        <Col span={10} style={{paddingLeft:10,paddingRight:10}}>
          <LabList></LabList>
          <Item></Item>
        </Col>
        <Col span={10} style={{paddingLeft:10}}>
          <Public></Public>
          <Teacher></Teacher>
        </Col>
        </Row>
      </div>
    );
  }
}

export default HomeView;