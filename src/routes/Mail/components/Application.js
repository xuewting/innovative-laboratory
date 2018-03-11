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
  
  render() {
    const {data}=this.state
    return (
      <div className='application'>
        <div className="app_title">
          <h2>{data.pname}</h2>
        </div>
        <div className="app_info">
          <span>发起人：{data.origin}</span>
        </div>
        <div className="app_info">
          <span>联系方式：{data.phone}</span>
        </div>
        <div className="app_info">
          <span>申请类型：{data.applyType==0?'申请立项':'结束项目'}</span>
        </div>
        <div className="app_info">
          <span>申请时间：{data.applyTime}</span>
        </div>
        <div className="app_info">
          <span>设备需求：{data.need}</span>
        </div>
        <div className="app_info">
          <span>项目计划：{data.intor}</span>
        </div>
        <Row>
          <Col span={4} offset={20}>
            <Button type='primary' onClick={(e)=>this.toDetail()}>前往查看详情</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Application;