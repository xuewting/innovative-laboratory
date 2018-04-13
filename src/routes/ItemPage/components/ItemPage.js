import React, { Component } from 'react'
import { Row, Col, DatePicker, Tooltip, message, Pagination } from 'antd'
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
      p_list: [],
      count: 0,
      tname: '',
      svalue: '',
      n_list: [],
      total:'',
      currentPage:1
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
changePage(page){
  this.getData(page)
}
  toDetail (id) {
    browserHistory.push({
      pathname: `/iteminfo`,
      query:{
        id:id
      }
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
    this.setState({currentPage:currentPage});
    let data = `pageCount=9&currentPage=${currentPage}`
    POST('/getProject', data, (re) => {
      if (re.state === 1) {
        this.setState({
          p_list: re.data.rows,
          n_list: re.data.rows,
          total:re.data.count
        })
        this.setState({ count: re.data.count })
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

  // 根据项目名搜索项目
  search (value) {
    this.setState({ svalue: value })
    var list = []
    for (let i = 0; i < this.state.n_list.length; i++) {
      let data = this.state.n_list[i]
      if (value == data.name) {
        list.push(data)
      }
    }
    if (list.length > 0) {
      this.setState({ p_list: list })
    } else {
      this.setState({ p_list:this.state.n_list })
    }
  }

  render () {
    return (
      <div>
        {/* search_group */}
        <div className='item_search'>
          <div className='sea_con'>
            <Row style={{ marginBottom: 0, marginTop: 10, width: '100%', float: 'left' }}>
              <Col span={6} offset={3} style={{ position: 'relative', paddingLeft: 10, paddingRight: 10 }}>
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
                  <input className='sea_input' placeholder='输入项目名称' onChange={(e) => this.search(e.target.value)} />
                </div>
              </Col>

            </Row>
          </div>
        </div>
        {/* head */}
        <div className='item_head'>
          <h2>项目列表</h2>
        </div>
        {/* list_content */}
        <div className='list_con'>
          {this.state.list == 0
            ? <Row >
              {this.state.p_list.map((item, i) => {
                return (
                  <Col span={8} key={i} ><div className='list_item_box' onClick={this.toDetail.bind(this,item.id)} style={{ cursor: 'pointer' }} >
                    <div className='list_item_con'>
                      <div className='list_item_head'>{item.name}</div>
                      <div className='list_item_subhead'>发起人：{/* item.user.name */}</div>
                      <div className='list_item_subhead'>实验室：{/* item.lab.name */}</div>
                      <div className='list_item_subhead'>是否结束：{/* item.actualTime ? '是' : '否' */}</div>
                      <div className='list_item_date'>
                        <Tooltip title='开始时间'>
                          <img src={rili} alt='' />
                          {/* item.applyTime */}
                        </Tooltip>
                        <Tooltip title='预期结束时间'>
                          <img src={time} alt='' />
                          {/* item.expectTime */}
                        </Tooltip>
                        {/* item.actualTime ? <Tooltip title='实际结束时间'>
                          <img src={time} alt='' />
                          {item.actualTime}
                        </Tooltip> : '' */}
                      </div>
                    </div>
                  </div>
                  </Col>
                )
              })}

            </Row>
            : <div className='style_list' onClick={this.toDetail.bind(this)} style={{ cursor: 'pointer' }}>
              {this.state.p_list.map((item, i) => {
                return (
                  <div className='task_list'>
                    <div className='task_con'>
                      <Row>
                        <Col span={4}>
                          <div className='task_head'>{/* item.name */}</div>
                        </Col>
                        <Col span={4}>
                          <div className='task_head'>发起人：{/* item.user.name */}</div>
                        </Col>
                        <Col span={8} offset={8} className='task_date'>

                          <Tooltip title='开始时间'>
                            <img src={rili} alt='' />
                            {/* item.applyTime */}
                          </Tooltip>
                          <Tooltip title='预期结束时间'>
                            <img src={time} alt='' />
                            {/* item.expectTime */}
                          </Tooltip>
                          {/* item.actualTime ? <Tooltip title='实际结束时间'>
                            <img src={time} alt='' />
                            {item.actualTime}
                          </Tooltip> : '' */}

                        </Col>
                      </Row>
                    </div>
                  </div>)
              })}
            </div>
          }
        </div>        
        <Pagination
          current={this.state.currentPage}
          onChange={this.changePage.bind(this)}
          total={this.state.total}
          pageSize={9}
          hideOnSinglePage={true}
          style={{float:'right',marginRight:20}} />
      </div>
    )
  }
}

export default ItemPage
