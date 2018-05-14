import React, { Component } from 'react'
import '../css/application.scss'
import {message, Input, Button, Row, Col, Modal } from 'antd'
import {browserHistory} from 'react-router'
import { BASE_URL, POST } from '../../../components/commonModules/POST'
import moment from 'moment'

class Application extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:this.props.content,
      visible:false,
      tName:'',
      sid:''
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      data: nextProps.content,
     
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  //下载申请文件
  Download(){
    if(this.state.data.scheme==null){
      message.warn('该项目没有上传文件')
    }else{
      window.open(BASE_URL + this.state.data.scheme)  
    }
    
  }

  //修改指导老师信息
  changeTValue=(value,type)=>{
    switch(type){
    case 1:this.setState({tName:value});break
    case 2:this.setState({sid:value});break
  }}
  //确认指导教师
  showModal = () => {
    this.setState({
      visible: true,
    });    
  }
  handleOk = (e) => {
    this.allow(this.props.content.id,this.state.sid)
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  //拒绝申请
  refuse(pid){
    let data = `id=${pid}`
    POST('/labt/rejectProApply', data, re => {
      if (re.state == 1) {
        this.props.getMessage()
        location.reload()
      } else {
        message.error('服务器错误')
      }
    })
  }
  
  //通过申请
  allow(pid,sid){
    let data = `id=${pid}&sid=${sid}`
    POST('/labt/agreeProApply',data, re=>{
      if(re.state==1){
        this.props.getMessage()        
        location.reload()
      }else if(re.state==-2){
        message.error('指导老师信息错误')
      }else{
        message.error('服务器错误')
      }
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
          <span>发起人：{data.user.name}</span>
        </div>
        <div className="app_info">
          <span>联系方式：{data.contactWay}</span>
        </div>
        <div className="app_info">
          <span>申请类型：{data.applyType==0?'申请立项':'结束项目'}</span>
        </div>
        <div className="app_info">
          <span>申请时间：{moment(data.applyTime).format("YYYY-MM-DD")}</span>
        </div>
        <div className="app_info">
          <span>预期结束时间：{data.expertTime}</span>
        </div>
        <div className="app_info">
          <span>设备需求：{data.devDemand}</span>
        </div>
        <div className="app_info">
          <span className='download' onClick={this.Download.bind(this)}>项目计划：点击下载</span>
        </div>
        <Row>
          <Col span={3} offset={16}>
            <Button style={{width:'100%'}} type='primary' onClick={this.showModal.bind(this)}>通过</Button>
          </Col>
          <Col span={3} offset={1}>
            <Button type='danger' style={{ width: '100%' }} onClick={(e) => this.refuse(this.props.content.id)}>拒绝</Button>
          </Col>
        </Row>
        <Modal
          title='请确认指导老师信息'
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>姓名：</Col>
            <Col span={15}>
              <Input onChange={(e)=>this.changeTValue(e.target.value,1)}></Input>
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>教工号：</Col>
            <Col span={15}>
              <Input onChange={(e) => this.changeTValue(e.target.value, 2)}></Input>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default Application;