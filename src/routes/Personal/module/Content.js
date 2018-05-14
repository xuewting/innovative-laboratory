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

  

  toItemDetail=(id) => browserHistory.push({
    pathname:'/iteminfo',
    query:{
      id:id
    }
  })

  render () {
    const introduce = this.props.introduce
   
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
          {this.state.itemlist.length == 0
            ? <div className='per_noitem'>
              没有参与任何项目
        </div>
            : <div>
              {this.state.itemlist.map((item, i) => {
                return (
                  <div key={i}>
                  {item.project?
                    <div className='per_ii' onClick={(e) => this.toItemDetail(item.project.id)}>
                      <span>{item.project.name}</span>
                      <span className='per_ii_detail'>{item.project.startTime} to </span>
                      <span className='per_ii_detail'>{item.project.actualTime ? item.project.actualTime : item.project.expertTime}</span>
                      <div className='ii_con'>
                        {item.intor}
                      </div>
                      </div> :''}
                  </div>                  
                )
              })
              }
            </div>}
        </div>
        
      </div>
    )
  }
}

export default Content
