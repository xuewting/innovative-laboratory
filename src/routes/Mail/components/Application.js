import React, { Component } from 'react'
import '../css/application.scss'
import { Button, Row, Col } from 'antd'
import {browserHistory} from 'react-router'

class Application extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:{
        title: 'Lorem ipsum dolor sit',
        origin:'banaan',
        phone:'1234567',
        teacher:'apple',
        endtime:'2019-1-1',
        need:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium officia at laboriosam minus ipsam consequatur illum modi hic expedita consectetur a fugit velit, ad, magnam totam qui, dignissimos error.',
        intor:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ab, inventore magnam commodi ipsam vero quibusdam aliquid laudantium facilis. Delectus ipsa necessitatibus odit modi. Perspiciatis illum adipisci tenetur ipsam odit!'
      }
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
          <h2>{data.title}</h2>
        </div>
        <div className="app_info">
          <span>发起人：{data.origin}</span>
        </div>
        <div className="app_info">
          <span>联系方式：{data.phone}</span>
        </div>
        <div className="app_info">
          <span>指导老师：{data.teacher}</span>
        </div>
        <div className="app_info">
          <span>预计结束时间：{data.endtime}</span>
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