import React, { Component } from 'react'
import { Collapse, Pagination, Row, Col } from 'antd'
import img1 from '../img/wallhaven-566551.jpg'
import './Teacher.scss'
import { browserHistory } from 'react-router'
import { BASE_URL, POST } from '../../../components/commonModules/POST'
const Panel = Collapse.Panel

class Teacher extends Component {
  constructor (props) {
    super(props)
    this.state = {
      t_list: [{
        lab:{
          name:''
        }
      }],
      count: 0
    }
  }
  toInfo (id) {
    browserHistory.push({
      pathname: `/teacherinfo`,
      query:{
        id:id
      }
    })
  }
  componentWillMount () {
    this.getData(1)
  }
  /**
   * 分页获取数据
   */
  getData (currentPage) {
    let data = `pageCount=9&currentPage=${currentPage}`
    POST('/getTeacher', data, (re) => {
      console.log(re)
      if (re.state == 1) {
        this.setState({ t_list: re.data.rows })
        this.setState({ count: re.data.count })
      }
    })
  }
  /**
   * 分页的回掉函数
   */
  changePage (page, pageSize) {
    this.getData(page)
  }
  render () {
    const style = {
      background: 'rgba(0,0,0,0.3)',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden',
      hover: {
        background: 'rgba(0,0,0,0.2)'
      }
    }
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
    return (

      <div style={{ paddingTop: 10 }}>
        <Row>
          {this.state.t_list.map((item, i) => {
            console.log(item)
            return (
              <Col span={8} style={{ paddingRight: 5, maxHeight:180,minHeight:180 }} key={i}>
                <Collapse bordered={false} style={{ background: 'transparent' }} >
                  <Panel header={
                    <div className='tea_head'>
                      <Row>
                        <Col span={3}>
                          <img src={BASE_URL + item.headImg} className='tea_pic' height='50px' />
                        </Col>
                        <Col span={15} offset={1}>
                          <span>姓名：{item.name}</span>
                          <span>职称：{item.rank}</span>
                          <span>邮箱：{item.email}</span>
                          <span>所在实验室：{item.lab.name == null ? '' : item.lab.name}</span>
                        </Col>                        
                      </Row>
                    </div>} key='1' style={style}>
                    <div style={{ cursor: 'pointer' }} onClick={this.toInfo.bind(this,item.id)}>
                      <h2 className='title'>简介：</h2>
                      <p className='intr'>{item.introduce == null ? '' : item.introduce}</p>                      
                    </div>
                  </Panel>
                </Collapse>
              </Col>
            )
          })}
        </Row>
        {this.state.count < 9 ? '' : <div className='pagination'>
          <Pagination defaultCurrent={1} total={this.state.count}
            onChange={(page, pageSize) => this.changePage(page, pageSize)} style={{ margin: '0 auto' }} />
        </div>}

      </div>
    )
  }
}

export default Teacher
