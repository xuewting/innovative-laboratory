import React, { Component } from 'react'
import './HomeView.scss'
import img1 from '../assets/wallhaven-113384.png'
import img2 from '../assets/wallhaven-590356.jpg'
import img3 from '../assets/wallhaven-590711.jpg'
import FreeScrollBar from 'react-free-scrollbar'
import { BASE_URL, POST } from '../../../components/commonModules/POST'
import { message } from 'antd'
import { browserHistory } from 'react-router'

class Teacher extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img2,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img3,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img2,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img3,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }]
    }
  }

  componentWillMount () {
    let data = `pageCount=15&currentPage=1`
    POST('/getTeacher', data, (re) => {      
      if (re.state === 1) {
       this.setState({list:re.data.rows});
      }else{
        message.error('服务器错误')
      }
    })
  }

  toTeacher(){
    browserHistory.push({
      pathname:'/teacher'
    })
  }

  toDetail=(id)=>browserHistory.push({
    pathname:'/teacherinfo',
    query:{
      teacher:id
    }
  })


  render () {
    return (
      <div className='teacher'>
        <div className='tea_head'>
          <h2>常驻老师</h2>
        </div>
        <div className='tea_con'>
          <FreeScrollBar className='scroll' style={{ height:450 }}>
          {this.state.list.map((item, i) => {
            return (
              <div className='tea_list' key={i} onClick={(e)=>this.toDetail(item.id)}>
                <img src={BASE_URL+item.headImg} alt='' />
                <div className='txt'>
                  <h3>{item.name}</h3>
                  <p>{item.introduce}</p>
                </div>
              </div>
            )
          })}
        </FreeScrollBar>
        </div>
        <div className='tea_foot'>
          <div className='more' onClick={(e)=>toTeacher()}>
            More...
          </div>
        </div>
      </div>
    )
  }
}

export default Teacher
