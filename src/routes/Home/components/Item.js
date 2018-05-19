import React, { Component } from 'react'
import FreeScrollBar from 'react-free-scrollbar'
import { POST } from '../../../components/commonModules/POST'
import { message } from 'antd'
import { browserHistory } from 'react-router'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[{
        'id': 3,
        'name': '大学生创新实验室3',
        'chargeUser': 1,
        'chargeTeacher': 5,
        'startTime': '2017-10-10',
        'applyTime': '2017-10-01',
        'expectTime': '2018-01-01',
        'actualTime': '2018-02-08',
        'labId': 1,
        'resultsText': '收到',
        'projectResults': '收到',
        'user': {
          'id': 1,
          'sid': 111,
          'name': 'sad ',
          'headImg': '/images/header.jpg',
          'email': '396256980@qq.com',
          'pid': 1,
          'power': 3
        },
        'lab': {
          'id': 1,
          'chargeUser': 2,
          'name': 'd0506',
          'position': '西安文理学院',
          'establishTime': '2014-06-11',
          'isOpen': 0,
          'introduction': '这是一个很牛逼的实验室，不敢相信的实验室',
          'photo': '/cc1097d0-22b3-11e8-ac5e-4d3674d067d9.jpg',
          'institute': '信息学院'
        }
      }]
    }
  }

  componentWillMount () {
    //获得数据
    POST('/getAllProject', '', re => {
      if (re.state == 1) {
        this.setState({ list:re.data })
      }else {
        message.error('服务器错误')
      }
    })
  }
//项目列表页面跳转
  toItem=()=>browserHistory.push({
    pathname:'/itemPage'
  })
//项目详情
  toDetail=(id)=>browserHistory.push({
    pathname:'/iteminfo',
    query:{
      item:id
    }
  })

  render () {
    
    return (
      <div className='item'>
        <div className='item_head'>
          <h2>最近项目</h2>
        </div>
        <div className='item_list'>
          <FreeScrollBar className='scroll' style={{ height:250 }} >
          {this.state.list.map((item, i) => {
            // console.log(item)
            return (
              <div key={i} style={{ textDecoration: 'none', cursor:'pointer' }} onClick={(e) => this.toDetail(item.id)}>
                <div className='list_box'>
                  <p>{item.name ? item.name:''}</p>
              </div>
                <div className='list_time'>
                  <span>{item.applyTime ? item.applyTime : ''}&nbsp;&nbsp;&nbsp;&nbsp;{item.user? item.user.name : ''}&nbsp;&nbsp;&nbsp;&nbsp;{item.lab ? item.lab.name:''}</span>
              </div>
              </div>
            )
          })}
        </FreeScrollBar>
        </div>
        <div className='item_foot'>
          <div className='more' onClick={(e)=>this.toItem()}>
            More...
          </div>
        </div>
      </div>
    )
  }
}

export default Item
