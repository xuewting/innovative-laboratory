import React, { Component } from 'react'
import Side from '../../LabCharge/components/Side'
import { browserHistory } from 'react-router'
import { message, Row, Col, Button, Input, DatePicker } from 'antd'
import './IEdit.scss'
import Plan from '../../NewItem/components/Plan'
import { POST } from '../../../components/commonModules/POST'
import moment from 'moment'

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
      intor:'',
      need:'',
      tid:''
    }
  }

  // 获取项目信息

  componentWillMount () {
    POST('/getProjectById', `id=${this.props.location.query.id}`, re => {
      if (re.state == 1) {
        this.setState({ name:re.data.name })
        this.setState({ endTime: re.data.expectTime })
      } else {
        message.error('服务器错误')
      }
    })
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
      case 7:
        this.setState({ need: value })
        break
      case 8:
        this.setState({ need: value })
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
          pathname: `/labcharge/detail`,
          query: {
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
          query: {
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
          pathname: '/labcharge/sgin',
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

  // 返回
  goBack = () => history.go(-1)

  render () {
    const { name, endTime } = this.state
    console.log(endTime)
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
                <Row style={{ width:'40%', fontSize:16, marginBottom:15 }}>
                  <Col span={4} style={{ color:'#fff' }}>项目名称:</Col>
                  <Col span={20}>
                    <Input placeholder='请输入项目的名称' className='in' value={name} onChange={(e) => this.changevalue(1, e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ width: '40%', fontSize: 16, marginBottom: 15 }}>
                  <Col span={4} style={{ color: '#fff' }}>发起人:</Col>
                </Row>
                <Row style={{ width: '40%', fontSize: 16, marginBottom: 15 }}>
                  <Col span={4} style={{ color: '#fff' }}>发起人学号:</Col>
                </Row>
                <Row style={{ width: '40%', fontSize: 16, marginBottom: 15 }}>
                  <Col span={4} style={{ color: '#fff' }}>指导老师:</Col>
                </Row>
                <Row style={{ width: '40%', fontSize: 16, marginBottom: 15 }}>
                  <Col span={4} style={{ color: '#fff' }}>教工号:</Col>
                </Row>
                <Row style={{ width: '40%', fontSize: 16, marginBottom: 35 }}>
                  <Col span={4} style={{ color: '#fff' }}>预计结束时间:</Col>
                  <Col span={20}>
                    <DatePicker onChange={this.changeTime.bind(this)} defaultValue={moment(endTime, 'YYYY-MM-DD')} />
                  </Col>
                </Row>
                <div style={{ width: '50%', fontSize: 16, marginBottom: 35 }}>
                  <div style={{ color: '#fff', marginBottom:10 }}>参与学生:</div>

                </div>
                <div style={{ width: '50%', fontSize: 16, marginBottom: 35 }}>
                  <div style={{ color: '#fff', marginBottom: 10 }}>设备需求:</div>
                  <TextArea
                    autosize={{ minRows: 10, maxRows: 10 }}
                    style={{ fontSize: 16, padding: 10 }}
                    placeholder='请输入设备需求'
                    onChange={(e) => this.changevalue(7, e.target.value)} />
                </div>
                <div style={{ width: '50%', fontSize: 16, marginBottom: 35 }}>
                  <div style={{ color: '#fff', marginBottom: 10 }}>项目计划:</div>
                  <Plan />
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
