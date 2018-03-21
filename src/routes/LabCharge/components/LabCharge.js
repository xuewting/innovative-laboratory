import React, { Component } from 'react'
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
import Notice from '../module/Notice'
import Sgin from '../module/Sgin'

import { browserHistory } from 'react-router'

class LabCharge extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chargepage: this.props.location.pathname ,// detail
      labid:this.props.location.query.labid
    }
  }

  chargepage (value) {
    switch (value) {
      case 0:
        browserHistory.push({
          pathname: `/labcharge/detail`,
          query:{
            labid: this.props.location.query.labid
          }          
        })
        this.setState({ chargepage: '/labcharge/detail' })
        break
      case 1:
        browserHistory.push({
          pathname: `/labcharge/staff`,
          query: {
            labid: this.props.location.query.labid
          }
        })
        this.setState({ chargepage: '/labcharge/staff' })
        break
      case 2:
        browserHistory.push({
          pathname: `/labcharge/item`,
          query: {
            labid: this.props.location.query.labid
          }
        })
        this.setState({ chargepage: '/labcharge/item' })
        break
      case 3:
        browserHistory.push({
          pathname: `/labcharge/honor`,
          query:{
            labid: this.props.location.query.labid
          }
        })
        this.setState({ chargepage: '/labcharge/honor' })
        break
      case 4:
        browserHistory.push({
          pathname: `/labcharge/goods`,
          query: {
            labid: this.props.location.query.labid
          }
        })
        this.setState({ chargepage: '/labcharge/goods' })
        break
      case 5:
        browserHistory.push({
          pathname: `/labcharge/teacher`,
          query: {
            labid: this.props.location.query.labid
          }
        })
        this.setState({ chargepage: '/labcharge/teacher' })
        break
      case 6:
        browserHistory.push({
          pathname: `/labcharge/notice`,
          query: {
            labid: this.props.location.query.labid
          }
        })
        this.setState({ chargepage: '/labcharge/notice' })
        break     
      case 7:
        browserHistory.push({ 
          pathname: '/labcharge/sgin' ,
          query: {
            labid: this.props.location.query.labid
          }
        })
        this.setState({ chargepage: '/labcharge/sgin' })
        break
      case 8:
        browserHistory.push({
          pathname: `/personal`
        }); break
    }
  }

  render () {
    const { chargepage, labid } = this.state
    return (
      <div>
        <Row>
          <Col span={5} style={{ paddingRight: 5 }}>
            <Side chargepage={this.chargepage.bind(this)} />
          </Col>
          <Col span={19} style={{ paddingLeft: 5 }}>
            {chargepage == '/labcharge/detail'
              ? <Detail labid={labid}/> : chargepage == '/labcharge/staff'
                ? <Member labid={labid}/> : chargepage == '/labcharge/item'
                  ? <Item labid={labid}/> : chargepage == '/labcharge/honor'
                    ? <Honor labid={labid}/> : chargepage == '/labcharge/news'
                      ? <NewItem labid={labid}/> : chargepage == '/labcharge/goods'
                        ? <Goods labid={labid}/> : chargepage == '/labcharge/teacher'
                          ? <Teacher labid={labid}/> : chargepage == '/labcharge/notice'
                            ? <Notice labid={labid}/> : chargepage == '/labcharge/sgin'
                              ? <Sgin labid={labid}/> : ''
            }
          </Col>
        </Row>
      </div>
    )
  }
}

export default LabCharge
