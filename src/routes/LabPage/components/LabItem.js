import React, { Component } from 'react'
import FreeScrollBar from 'react-free-scrollbar'
import '../css/LabItem.scss'
import { POST } from '../../../components/commonModules/POST'
import { message } from 'antd'
import {browserHistory} from 'react-router'

class LabItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[{
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }, {
        name:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'12-1',
        belong:'D0506',
        chargeTeacher:'lorem'
      }]
    }
  }

  componentWillReceiveProps(nextProps) {
    
    POST('/getLabPro', `labId=${nextProps.id}`, re => {
      if(re.state==1){
        this.setState({list:re.data})
      }
    })
  }
  
  getTeacher=(id)=>{
    console.log(id)
    POST('getTeacherBylabId',`id=${id}`,re=>{
      if(re.state==1){
        return re.data.name
      }else{
        return 'null'
      }
    })
  }
  toDetail(id){
    browserHistory.push({
      pathname: `/iteminfo`,
      query:{
        id:id
      }
    })
  }

  render () {
    return (
      <div className='labitem'>
        <div className='item_head'>
          <h2>项目展示</h2>
        </div>
        <div className='item_list'>
          <FreeScrollBar className='scroll' style={{ height:250 }} >
            {this.state.list.map((item, i) => {
              var teacher=this.getTeacher(item.chargeTeacher) 
            return (
              <div key={i} style={{ textDecoration:'none', cursor:'pointer' }} onClick={()=>this.toDetail(item.id)}>
                <div className='list_box'>
                  <p>{item.name}</p>
                </div>
                <div className='list_time'>
                  <span>{item.startTime}&nbsp;&nbsp;&nbsp;&nbsp;{teacher}&nbsp;&nbsp;&nbsp;&nbsp;{item.belong}</span>
                </div>
              </div>
            )
            })}
          </FreeScrollBar>
        </div>
        <div className='item_foot'>
          <div className='more' />
        </div>
      </div>
    )
  }
}

export default LabItem
