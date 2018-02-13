import React, { Component } from 'react'
import Side from '../../LabCharge/components/Side'
import { browserHistory } from 'react-router'
import { Row, Col, Button, Input, DatePicker } from 'antd'
import './IEdit.scss'

const { TextArea } = Input

class IEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      endTime:'',
      name:'',
      origin:'',
      origonxh:'',
      teacher:'',
      mumber:'',
      intor:''
    }
  }

  // 修改相应值
  changevalue = (type, value) => {
    switch (type) {
      case 1:
        this.setState({ name:value })
        break
      case 2:
        this.setState({ origin:value })
        break
      case 3:
        this.setState({ origonxh:value })
        break
      case 4:
        this.setState({ teacher:value })
        break
      case 5:
        this.setState({ mumber:value })
        break
      case 6:
        this.setState({ intor:value })
        break

      default:
        break
    }
  }

  // 目预期结束时间
  changeTime = (date, dateString) => {
    console.log(date, dateString)
    this.setState({ endTime: dateString })
  }

  // 边框页面跳转
  chargepage (value) {
    switch (value) {
      case 0:
        browserHistory.push({
          pathname: `/labcharge/detail`
        })
        this.setState({ chargepage: '/labcharge/detail' })
        break
      case 1:
        browserHistory.push({
          pathname: `/labcharge/staff`
        })
        this.setState({ chargepage: '/labcharge/staff' })
        break
      case 2:
        browserHistory.push({
          pathname: `/labcharge/item`
        })
        this.setState({ chargepage: '/labcharge/item' })
        break
      case 3:
        browserHistory.push({
          pathname: `/labcharge/honor`
        })
        this.setState({ chargepage: '/labcharge/honor' })
        break
      case 4:
        browserHistory.push({
          pathname: `/labcharge/goods`
        })
        this.setState({ chargepage: '/labcharge/goods' })
        break
      case 5:
        browserHistory.push({
          pathname: `/labcharge/teacher`
        })
        this.setState({ chargepage: '/labcharge/teacher' })
        break
      case 6:
        browserHistory.push({
          pathname: `/labcharge/notice`
        })
        this.setState({ chargepage: '/labcharge/notice' })
        break
      case 7:
        browserHistory.push({
          pathname: `/labcharge/news`
        })
        this.setState({ chargepage: '/labcharge/news' })
        break
      case 8:
        browserHistory.push({
          pathname: `/setting`
        }); break
    }
  }

  // 返回
  goBack = () => history.go(-1)

  render () {
    return (
      <div>
        <Row>
          <Col span={5} style={{ paddingRight: 5 }}>
            <Side chargepage={this.chargepage.bind(this)} />
          </Col>
          <Col span={19} style={{ paddingLeft: 5, paddingTop: 20, paddingRight: 15 }}>
            <div className='ed_item'>
              <div className='ed_i_hea'>
                <h2>编辑项目基本信息</h2>
              </div>

              <div className='ed_i_con'>
                <Row style={{ width:'70%', fontSize:16, marginBottom:15 }}>
                  <Col span={4} style={{ color:'#fff' }}>项目名称:</Col>
                  <Col span={20}>
                    <Input placeholder='请输入项目的名称' className='in' onChange={(e) => this.changevalue(1, e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ width: '70%', fontSize: 16, marginBottom: 15 }}>
                  <Col span={4} style={{ color: '#fff' }}>发起人:</Col>
                  <Col span={20}>
                    <Input placeholder='请输入发起人姓名' className='in' onChange={(e) => this.changevalue(2, e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ width: '70%', fontSize: 16, marginBottom: 15 }}>
                  <Col span={4} style={{ color: '#fff' }}>发起人学号:</Col>
                  <Col span={20}>
                    <Input placeholder='请输入发起人学号' className='in' onChange={(e) => this.changevalue(3, e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ width: '70%', fontSize: 16, marginBottom: 15 }}>
                  <Col span={4} style={{ color: '#fff' }}>指导老师:</Col>
                  <Col span={20}>
                    <Input placeholder='请输入指导老师姓名' className='in' onChange={(e) => this.changevalue(4, e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ width: '70%', fontSize: 16, marginBottom: 35 }}>
                  <Col span={4} style={{ color: '#fff' }}>预计结束时间:</Col>
                  <Col span={20}>
                    <DatePicker onChange={this.changeTime.bind(this)} />
                  </Col>
                </Row>
                <div style={{ width: '50%', fontSize: 16, marginBottom: 35 }}>
                  <div style={{ color: '#fff', marginBottom:10 }}>参与学生:</div>
                  <div>
                    <TextArea
                      autosize={{ minRows:3, maxRows:3 }}
                      style={{ fontSize: 16, padding:10 }}
                      placeholder='输入项目参与成员学号，用逗号隔开'
                      onChange={(e) => this.changevalue(5, e.target.value)} />
                  </div>
                  <div style={{ fontSize:13, color:'#fff' }}>
                    输入项目参与成员学号，用逗号隔开
                  </div>
                </div>
                <div style={{ width:'50%', fontSize:16, marginBottom: 35 }}>
                  <div style={{ color: '#fff', marginBottom: 10 }}>项目简介:</div>
                  <TextArea
                    autosize={{ minRows:10, maxRows:10 }}
                    style={{ fontSize:16, padding:10 }}
                    placeholder='请输入项目的简介'
                    onChange={(e) => this.changevalue(6, e.target.value)} />
                </div>

              </div>

              <div className='ed_i_foot'>
                <Row>
                  <Col span={18} />
                  <Col span={3} style={{ padding:10 }}><Button onClick={this.goBack.bind(this)} style={{ fontSize: 16, width: '100%' }}>返回</Button></Col>
                  <Col span={3} style={{ padding:10 }}><Button style={{ fontSize: 16, width: '100%' }}>提交</Button></Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default IEdit
