import React, { Component } from 'react'
import '../css/personal.scss'
import { Row, Col } from 'antd'
import Head from '../module/Head'
import Content from '../module/Content'
import Calendar from '../module/Calendar'
import { browserHistory } from 'react-router'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: [],
      lab: {},
      labId: 0,
      identity: 'root'
    }
  }
  componentWillMount() {
    let data = ``
    POST('/user/getUserInfo', data, re => {
      if (re.state == 1) {
        this.setState({ userInfo: re.data })
        this.setState({ lab: re.data.lab })
        this.setState({ labId: re.data.own_lab })
        
      }
    })
  }
  goBack = () => history.back()
  goSet = () => browserHistory.push({
    pathname: '/setting',
    query:{
      labid: this.state.labId
    }
    
  })
  goCharge = () => {
    if (this.state.identity == 'teacher') {
      // console.log(this.state.labId)
      browserHistory.push({
        pathname: '/labcharge/detail',
        query:{
          labid:this.state.labId
        }
      })
    } else if (this.state.identity == 'root') {
      browserHistory.push({
        pathname: '/lablist'
      })
    }
  }
  render() {
    if (this.state.identity == 'root' || this.state.identity == 'teacher') {
      var span = 8
    } else {
      var span = 12
    }
    return (
      <div className='personal'>
        <Row>
          <Col span={4} style={{ paddingRight: 5 }}>
            <Head userInfo={this.state.userInfo} lab={this.state.lab} />
          </Col>
          <Col span={20} style={{ paddingLeft: 5 }}>
            <Content introduce={this.state.userInfo.introduce} />
            <div className='per_but'>
              <Row>
                <Col span={span} style={{ paddingRight: 5 }}>
                  <div className='per_but_i' onClick={this.goBack.bind(this)}>返回</div>
                </Col>
                <Col span={span} style={{ paddingRight: 5, paddingLeft: 5 }}>
                  <div className='per_but_i' onClick={this.goSet.bind(this)}>修改基本信息</div>
                </Col>
                {this.state.identity == 'teacher' ?
                  <Col span={span} style={{ paddingLeft: 5 }}>
                    <div className='per_but_i' onClick={this.goCharge.bind(this)}>实验室管理</div>
                  </Col> : this.state.identity == 'root' ?
                    <Col span={span} style={{ paddingLeft: 5 }}>
                      <div className='per_but_i' onClick={this.goCharge.bind(this)}>系统管理</div>
                    </Col> : ''}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Personal
