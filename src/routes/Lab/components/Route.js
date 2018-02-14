import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './Lab.scss'
import img1 from '../img/wallhaven-566551.jpg'
import { browserHistory } from 'react-router'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
class Lab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      p_list: [],
      count: 0,
      offset:1
    }
  }
  toDetail () {
    browserHistory.push({
      pathname: `/labpage`
    })
  }
  componentDidMount () {
    this.getData(1)
  }
  getData (currentPage) {
    let data = `pageCount=5&currentPage=${currentPage}`
    POST('/getLab', data, re => {
      if (re.state === 1) {
        console.log(re)
        let plist1 = this.state.p_list
        let plist = plist1.concat(re.data.rows)
        console.log(plist)
        this.setState({ p_list: plist })
      }
    })
  }
  changePage (page, pageSize) {

  }
  /**
   * 点击加载更多的回掉函数
   */
  getmore (currentPage) {
    let offset = this.state.offset + 1
    this.setState({ offset:offset },()=>{
      this.getData(this.state.offset)
    })
  }
  render () {
    return (
      <div className='Lab'>
        {this.state.p_list.map((item, i) => {
          return (
            <div className='list_box' onClick={() => this.toDetail} key={i}>
              <Row>
                <Col span={4} >
                  <div className='img'>
                    <img src={BASE_URL + item.photo} alt='' />
                  </div>
                </Col>
                <Col span={6} offset={1}>
                  <div className='contain'>
                    <span>名称：</span>
                    <span>位置：</span>
                    <span>介绍：
             </span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className='contain'>
                    <span>{item.name}</span>
                    <span>{item.position}</span>
                    <span>{item.introduction}</span>
                  </div>
                </Col>
              </Row>
            </div>
          )
        })}
        <div className='load_page'><span onClick={() => { this.getmore() }}>加载更多</span></div>
      </div>
    )
  }
}

export default Lab
