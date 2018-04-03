import React, { Component } from 'react'
import { Row, Col, DatePicker, Tooltip, Pagination } from 'antd'
import './Goods.scss'
import sea from '../img/search.png'
import rili from '../img/日历.png'
import up from '../img/升序 (1).png'
import down from '../img/降序.png'
import time from '../img/im-time.png'
import { browserHistory } from 'React-router'
import { POST, BASE_URL } from '../../../components/commonModules/POST'

class Goods extends Component {
  constructor () {
    super()
    this.state = {
      list: 0,
      GoodsList: [],
      count:0,
      svalue:'',
      p_list:[]
    }
  }

  onChange (date, dateString) {
    console.log(date, dateString)
  }

  changeStyle (e) {
    if (e.target.value == 'grid') {
      this.setState({ list: 0 })
    } else {
      this.setState({ list: 1 })
    }
    console.log(this.state.list)
  }

  toDetail (i) {
    browserHistory.push({
      pathname: `/goodinfo/${i}`
    })
  }
  componentWillMount () {
    this.getData(1)
  }
  /**
   * 分页获取物品数据
   */
  getData (page) {
    var data = `pageCount=9&currentPage=${page}`
    POST('/lab/getLabGoods', data, re => {
      if (re.state == 1) {
        this.setState({ GoodsList: re.data.rows, p_list:re.data.rows })        
        this.setState({ count:re.data.count })
      }
    })
  }
  changeSize (page, pageSize) {
    console.log(page)
    this.getData(page)
  }

  search(value) {    
    let data1 = value.target.value
    this.setState({ svalue: data1 })
    var list = []
    for (let i = 0; i < this.state.GoodsList.length; i++) {
      let data = this.state.GoodsList[i]
      if (data1 == data.name) {
        list.push(data)
      }
    }
    if (list.length > 0) {
      this.setState({ p_list: list })
    } else {
      this.setState({ p_list: this.state.GoodsList })
    }
  }

  render () {
    var { GoodsList, p_list} = this.state
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
                  <div className='sea_icon' >
                    <img src={sea} alt='' />
                  </div>
                  <input className='sea_input' onChange={this.search.bind(this)}/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* head */}
        <div className='item_head'>
          <h2>物品列表</h2>          
        </div>
        {/* list_content */}
        <div className='list_con'>
          {this.state.list == 0
            ? <div>
              {p_list.map((item, i) => {
                return (
                  <div className='list_item_box' key={i} onClick={this.toDetail.bind(this, item.id)} style={{ cursor: 'pointer' }}>
                    <div className='list_item_con'>
                      <Row>
                        <Col span={7}>
                          <img src={BASE_URL + item.photo} alt='' style={{ width: 175,height:155, padding:8 }} />
                        </Col>
                        <Col span={15} >
                          <div className='list_item_head'>{item.name}</div>
                          <div className='list_item_subhead'>型号：{item.models}</div>
                          <div className='list_item_subhead'>价格：{item.price}</div>
                          <div className='list_item_subhead'>状态：{item.stateId == 2 ? '占用' : item.stateId == 0 ? '外借' : '空闲'}</div>
                          <div className='list_item_subhead'>实验室：{/*item.lab.name*/}</div>
                        </Col>
                      </Row>
                      <div className='list_item_date' />
                    </div>
                  </div>
                )
              })}</div>
            : 
            <div>
              {p_list.map((item,i)=>{
              return(
                <div className='style_list' onClick={this.toDetail.bind(this,item.id)} style={{ cursor: 'pointer' }}>
                  <div className='goos_list'>
                    <div className='goos_con'>
                      <div className='goos_head'>{item.name}</div>
                      <div className='goos_date'>
                        <span><i className='fa fa-flash' /> 状态：{item.stateId == 2 ? '占用' : item.stateId == 0 ? '外借' : '空闲'} <i className='fa fa-star' /> 型号：{item.models} <i className='fa fa-home' /> 实验室：</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}            
            </div>}
          <Pagination 
          defaultCurrent={1} 
          total={this.state.count}
          style={{ float:'right' }} 
          pageSize={9} 
          hideOnSinglePage={true}         
          onChange={(page, pageSize) => this.changeSize(page, pageSize)} />
        </div>
      </div>
    )
  }
}

export default Goods
