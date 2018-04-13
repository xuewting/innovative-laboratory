import React, { Component } from 'react'
import './Goodinfo.scss'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
import { Row, Col } from 'antd'

import Detail from './Detail'
class Goodinfo extends Component {
  constructor (props) {
    super(props)    
    this.state = {
      goodinfo:'',
      labname:'',
      editorState: ''
    }     
  }
  goBack () {
    history.back()
  }

  componentWillMount () {
    let id = this.props.params.id
    console.log(id)
    var data = `id=${id}`
    POST('/getGoodsById', data, re => {
      if (re.state == 1) {
        console.log(re.data.detailInfo)
        this.setState({ goodinfo: re.data,
          editorState: re.data.detailInfo })       
        // this.setState({ labname:re.data.lab.name })        
      }      
    })
    
  }
  
  render () {
    const { buyTime, detailInfo, models, name, photo, price, stateId, validTime } = this.state.goodinfo

    return (
      <div>
        <div className='good_info'>
          <div className='good_info_head'>
            <Row gutter={16}>

              <div className='good_info_img'>
                <img src={BASE_URL + photo} alt='' style={{ width:300, height:300 }} />
              </div>

              <div className='good_info_con'>
                <h2>{name}</h2>
                <span className='info_con'>型号：{models}</span>
                <span className='info_con'>状态：{stateId === 1 ? '外借' : '未借'}</span>
                <span className='info_con'>购入价：{price}</span>
                <span className='info_con'>所属实验室：{this.state.labname}</span>
                <span className='info_con'>购入时间：{buyTime}</span>
                <span className='info_con'>有效时间：{validTime}</span>
              </div>

            </Row>
          </div>
        </div>
        <Detail editorState={this.state.editorState}></Detail>
        <div className='good_foot'>
          <div className='set' onClick={this.goBack.bind(this)}>
            <i className='fa fa-sign-out' /> 返回
          </div>
        </div>
      </div>
    )
  }
}

export default Goodinfo
