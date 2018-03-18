import React, { Component } from 'react'
import '../css/application.scss'
import { Button, Row, Col } from 'antd'
import {browserHistory} from 'react-router'

class Application extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:this.props.content
    }
  }

  //to detail
  toDetail(){
    browserHistory.push({
      pathname:'/labcharge/news/newitemdetail'
    })
  }


  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      data: nextProps.content,
     
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  
  render() {
    const {data}=this.state
    return (
      <div className='application'>
        <div className="app_title">
          <h2>{data.pname}</h2>
        </div>
        <div className="app_info">
          <span>发起人：{data.user.name}</span>
        </div>
        <div className="app_info">
          <span>联系方式：{data.contactWay}</span>
        </div>
        <div className="app_info">
          <span>申请类型：{data.applyType==0?'申请立项':'结束项目'}</span>
        </div>
        <div className="app_info">
          <span>申请时间：{data.applyTime}</span>
        </div>
        <div className="app_info">
          <span>预期结束时间：{data.expertTime}</span>
        </div>
        <div className="app_info">
          <span>设备需求：{data.devDemand}</span>
        </div>
        <div className="app_info">
          <span className='download'>项目计划：点击下载</span>
        </div>
        <Row>
          <Col span={3} offset={16}>
            <Button style={{width:'100%'}} type='primary' onClick={(e)=>this.toDetail()}>通过</Button>
          </Col>
          <Col span={3} offset={1}>
            <Button type='danger' style={{ width: '100%' }} onClick={(e) => this.toDetail()}>拒绝</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Application;