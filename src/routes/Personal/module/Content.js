import React, { Component } from 'react'
import '../css/content.scss'
import { Row, Col } from 'antd'
import { browserHistory } from 'react-router'
import { POST } from '../../../components/commonModules/POST'
class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemlist: [],
      identity:'root'
    }
  }
  componentDidMount () {
    POST('/user/getOwnPro', ``, re => {
      if (re.state === 1) {
        console.log(re)
        this.setState({ itemlist:re.data })
      }
    })
  }
  goBack=() => history.back()

  goSet=() => browserHistory.push({
    pathname:'/setting'
  })

  goCharge=() => {
    if (this.state.identity == 'teacher') {
      browserHistory.push({
    pathname:'/labcharge/detail'
  })
    } else if (this.state.identity == 'root') {
  browserHistory.push({
    pathname: '/lablist'
  })
}
  }

  toItemDetail=()=>browserHistory.push({
    pathname:'/iteminfo'
  })

  render () {
    const introduce = this.props.introduce
    if (this.state.identity == 'root' || this.state.identity == 'teacher') {
      var span = 8
    } else {
      var span = 12
    }
    return (
      <div className='per_content'>
        <div className='per_con_intor'>
          <h2>个人简介</h2>
          <span>{introduce}</span>
        </div>
        <div className='per_con_item'>
          <div className='per_ii_hea'>
            <h2>参与的项目列表</h2>
          </div>
          {this.state.itemlist.length === 0
            ? <div className='per_noitem'>
              没有参与任何项目
        </div>
            : <div>
              {this.state.itemlist.map((item, i) => {
                return (
                  <div className='per_ii' key={i} onClick={(e)=>this.toItemDetail()}>
                    <span>{item.project.name}</span>
                    <span className="per_ii_detail">hhhhh</span>
                    <span className="per_ii_detail">hhhhh</span>
                    <div className='ii_con'>
                      {item.intor}
                    </div>
                  </div>
                )
              })
              }
            </div>}
        </div>
        <div className='per_but'>
          <Row>
            <Col span={span} style={{ paddingRight:5 }}>
              <div className='per_but_i' onClick={this.goBack.bind(this)}>返回</div>
            </Col>
            <Col span={span} style={{ paddingRight: 5, paddingLeft:5 }}>
              <div className='per_but_i' onClick={this.goSet.bind(this)}>修改基本信息</div>
            </Col>
            {this.state.identity == 'teacher'
              ? <Col span={span} style={{ paddingLeft: 5 }}>
                <div className='per_but_i' onClick={this.goCharge.bind(this)}>实验室管理</div>
              </Col> : ''}
            {this.state.identity == 'root'
            ? <Col span={span} style={{ paddingLeft: 10 }}>
              <div className='per_but_i' onClick={this.goCharge.bind(this)}>系统管理</div>
            </Col> : ''}
          </Row>
        </div>
      </div>
    )
  }
}

export default Content
