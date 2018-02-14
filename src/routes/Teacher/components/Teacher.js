import React, { Component } from 'react'
import {
  Collapse, Pagination,
  Row,
  Col
} from 'antd'
import img1 from '../img/wallhaven-566551.jpg'
import './Teacher.scss'
import { browserHistory } from 'react-router'
import { BASE_URL, POST } from '../../../components/commonModules/POST'
const Panel = Collapse.Panel

class Teacher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      t_list: [],
      count: 0
    }
  }
  toInfo() {
    browserHistory.push({
      pathname: `/teacherinfo`
    })
  }
  componentDidMount() {
    this.getData(1)
  }
  /**
   * 分页获取数据
   */
  getData(currentPage) {
    let data = `pageCount=9&currentPage=${currentPage}`
    POST('/getTeacher', data, (re) => {
      console.log(re)
      if (re.state === 1) {
        this.setState({ t_list: re.data.rows })
        this.setState({ count: re.data.count })
      }
    })
  }
  /**
   * 分页的回掉函数
   */
  changePage(page, pageSize) {
    this.getData(page)
  }
  render() {
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
            return (
              <Col span={8} style={{ paddingRight: 5 }} key={i}>
                <Collapse bordered={false} style={{ background: 'transparent' }} >
                  <Panel header={
                    <div className='tea_head'>
                      <Row>
                        <Col span={3}>
                          <img src={BASE_URL + item.headImg} className='tea_pic' height='50px' />
                        </Col>
                        <Col span={9} offset={1}>
                          <span>姓名：</span>
                          <span>职称：</span>
                          <span>邮箱：</span>
                          <span>所在实验室：</span>
                        </Col>
                        <Col span={5}>
                          <span>{item.name}</span>
                          <span>{item.rank}</span>
                          <span>{item.email}</span>
                          <span>{item.lab.name}</span>
                        </Col>
                      </Row>
                    </div>} key='1' style={style}>
                    <div style={{ cursor: 'pointer' }} onClick={this.toInfo.bind(this)}>
                      <h2 className='title'>简介：</h2>
                      <p className='intr'>{text}</p>
                      <h2 className='title'>荣誉：</h2>
                      <p className='thelabhonor'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nemo incidunt, eaque repudiandae autem cupiditate facere
            sequi quasi quae, doloribus praesentium suscipit. Sed,
             maiores aut asperiores dicta quod, quo incidunt fuga.
            </p>
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
