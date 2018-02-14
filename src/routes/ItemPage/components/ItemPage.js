import React, { Component } from 'react'
import { Row, Col, DatePicker, Tooltip } from 'antd'
import '../css/ItemPage.scss'
import sea from '../img/search.png'
import rili from '../img/日历.png'
import up from '../img/升序 (1).png'
import down from '../img/降序.png'
import time from '../img/im-time.png'
import { browserHistory } from 'React-router'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
class ItemPage extends Component {
  constructor () {
    super()
    this.state = {
      list: 0,
      p_list:[],
      count:0,
      tname:''
    }
  }

  onChange (date, dateString) {
    console.log(date, dateString)
  }

  changeStyle (value) {
    if (value.target.value == 'grid') {
      this.setState({ list: 0 })
    } else {
      this.setState({ list: 1 })
    }
  }

  toDetail () {
    browserHistory.push({
      pathname: `/iteminfo`
    })
  }
  componentDidMount () {
    this.getData(1)
  }
  /**
   * 获取项目的基本信息
   * @param {*} currentPage
   */
  getData (currentPage) {
    let data = `pageCount=9&currentPage=${currentPage}`
    POST('/getProject', data, (re) => {
      if (re.state === 1) {
        this.setState({ p_list:re.data.rows })
        this.setState({ count:re.data.count })
        console.log(re)
      }
    })
  }
  /**
   * 通过项目的基本信息获取指导老师的id
   * 在通过老师id查询老师姓名
   */
  async getteacher (id) {
    let data = `id=${id}`
    let tname = ''
    await POST('/user/queryUname', data, async (re) => {
      if (re.state === 1) {
        tname = re.data.name
        return re.data.name
      }
    })
    return tname
  }
  render () {
    console.log(this.getteacher(1))
    return (
      <div>
        {/* search_group */}
        <div className='item_search'>
          <div className='sea_con'>
            <Row style={{ marginBottom: 0, marginTop: 10, width: '100%', float: 'left' }}>
              <Col span={6} style={{ position: 'relative', paddingLeft: 10, paddingRight: 10 }}>
                <select name='' id='' className='list_control' onChange={this.changeStyle.bind(this)}>
                  <option value='grid'>Grid</option>
                  <option value='list'>List</option>
                </select>
              </Col>
              <Col span={12} style={{ paddingLeft: 10, paddingRight: 10 }}>
                <div className='sea_group'>
                  <div className='sea_icon'>
                    <img src={sea} alt='' />
                  </div>
                  <input className='sea_input' />
                </div>
              </Col>
              <Col span={6} style={{ paddingLeft: 10, paddingRight: 10 }}>
                <div style={{ display: 'table', width: '100%', position: 'relative' }}>
                  <div className='date_icon'>
                    <img src={rili} alt='' />
                  </div>
                  <DatePicker
                    className='sea_date'
                    onChange={this.onChange.bind(this)}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* head */}
        <div className='item_head'>
          <h2>项目列表</h2>
          <div className='head_right'>
            <div className='but_ul'>
              <Tooltip title='升序'>
                <div className='sort'>
                  <img src={up} alt='' />
                </div>
              </Tooltip>
              <Tooltip title='降序'>
                <div className='sort'>
                  <img src={down} alt='' />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        {/* list_content */}
        <div className='list_con'>
          {this.state.list == 0
            ? <Row gutter={16}>
              {this.state.p_list.map((item, i) => {
                return (
                  <Col span={7} key={i} ><div className='list_item_box' onClick={this.toDetail.bind(this)} style={{ cursor: 'pointer' }}>
                    <div className='list_item_con'>
                      <div className='list_item_head'>{item.name}</div>
                      <div className='list_item_subhead'>发起人：{item.user.name}</div>
                      <div className='list_item_subhead'>实验室：{item.lab.name}</div>
                      <div className='list_item_subhead'>是否结束：{item.actualTime ? '是' : '否'}</div>
                      <div className='list_item_date'>
                        <Tooltip title='开始时间'>
                          <img src={rili} alt='' />
                          {item.applyTime}
                        </Tooltip>
                        <Tooltip title='预期结束时间'>
                          <img src={time} alt='' />
                          {item.expectTime}
                        </Tooltip>
                        {item.actualTime ? <Tooltip title='实际结束时间'>
                          <img src={time} alt='' />
                          {item.actualTime}
                        </Tooltip> : ''}
                      </div>
                    </div>
                  </div>
                  </Col>
                )
              })}

            </Row>
            : <div className='style_list' onClick={this.toDetail.bind(this)} style={{ cursor: 'pointer' }}>
              <div className='task_list'>
                <div className='task_con'>
                  <div className='task_head'>Lorem ipsum dolor sit amet</div>
                  <div className='task_date'>
                    <Tooltip title='开始时间'>
                      <img src={rili} alt='' />
                      &nbsp;15 oct 2013 &nbsp;
            </Tooltip>
                    <Tooltip title='结束时间'>
                      <img src={time} alt='' />
                      &nbsp;oct 2014 &nbsp;
            </Tooltip>
                  </div>
                </div>

              </div>
            </div>}
        </div>
      </div>
    )
  }
}

export default ItemPage
