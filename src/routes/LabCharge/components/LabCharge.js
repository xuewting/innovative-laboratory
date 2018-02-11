import React, { Component } from 'react';
import './LabCharge.scss'
import { Row, Col } from 'antd'
import Member from '../module/Member'
import Item from '../module/Item'
import Honor from '../module/Honor'
import Detail from '../module/Detail'
import NewItem from '../module/News'
import Goods from '../module/Goods'
import Teacher from '../module/Teacher'
import Side from './Side'

import { browserHistory } from 'react-router'

class LabCharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chargepage: this.props.location.pathname, //detail
     
    }
  }

  chargepage(value){
    switch (value) {
      case 0:
        browserHistory.push({
          pathname: `/labcharge/detail`
        })
        this.setState({ chargepage: '/labcharge/detail' }); 
        break;
      case 1:
        browserHistory.push({
          pathname: `/labcharge/staff`
        })
        this.setState({ chargepage: '/labcharge/staff' }); 
        break;
      case 2:
        browserHistory.push({
          pathname: `/labcharge/item`
        })
        this.setState({ chargepage: '/labcharge/item' });
         break;
      case 3:
        browserHistory.push({
          pathname: `/labcharge/honor`
        })
        this.setState({ chargepage: '/labcharge/honor' }); 
        break;
      case 4:
        browserHistory.push({
          pathname: `/labcharge/goods`
        })
        this.setState({ chargepage: '/labcharge/goods' });
         break;
      case 5:
        browserHistory.push({
          pathname: `/labcharge/teacher`
        })
        this.setState({ chargepage: '/labcharge/teacher' }); 
        break;
      case 6:
        browserHistory.push({
          pathname: `/labcharge/notice`
        })
        this.setState({ chargepage: '/labcharge/notice' }); 
        break;
      case 7:
        browserHistory.push({
          pathname: `/labcharge/news`
        })
        this.setState({ chargepage: '/labcharge/news' });
         break;
      case 8:
        browserHistory.push({
          pathname: `/setting`
        }); break;
    }
  }


  render() {
    const { chargepage, choise } = this.state
    return (
      <div>
        <Row>
          <Col span={5} style={{ paddingRight: 5 }}>
            <Side chargepage={this.chargepage.bind(this)}></Side>
          </Col>
          <Col span={19} style={{ paddingLeft: 5 }}>
            {chargepage == '/labcharge/detail' ?
              <Detail></Detail> : chargepage == '/labcharge/staff' ?
                <Member></Member> : chargepage == '/labcharge/item' ?
                  <Item></Item> : chargepage == '/labcharge/honor' ?
                    <Honor></Honor> : chargepage == '/labcharge/news' ?
                    <NewItem></NewItem>:chargepage == '/labcharge/goods' ?
                    <Goods></Goods>:chargepage == '/labcharge/teacher' ?
                    <Teacher></Teacher>:''
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default LabCharge;