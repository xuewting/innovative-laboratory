import React, { Component } from 'react'
import { message, Row, Col, Tooltip } from 'antd'
import img1 from '../img/成立时间.png'
import img2 from '../img/定位.png'
import img3 from '../img/领导.png'
import img4 from '../img/学院_selected.png'
import img5 from '../img/锁 1.png'
import { POST } from '../../../components/commonModules/POST'
import moment from 'moment'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data:'',
      teacher:''
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.data)
    this.setState({ data:nextProps.data })
    POST('/getTeacherById', `id=${nextProps.data.chargeUser}`, re => {
      if (re.state == 1) {
        this.setState({teacher:re.data.name})
      } else {
        message.error('服务器错误')
      }
    })
  }


  render () {
    const { data, teacher } = this.state
    return (
      <div style={{ marginBottom:70 }}>
        <div className='labname'>
          <h1>{data.name}</h1>
        </div>
        <div className='labintor'>
          <h2>简介：</h2><span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.introduction}
          </span>
        </div>
        <div className='labdetail'>
          <Row >
            <Col span={8} style={{ marginBottom:20 }}>
              <span><img src={img3} alt='负责老师' className='icon' /></span>
              <span className='font'>负责教师: {teacher}</span>
            </Col>
            <Col span={8} style={{ marginBottom:20 }}>
              <span><img src={img2} alt='位置' className='icon' /></span>
              <span className='font'>位置: {data.position}</span>
            </Col>
            <Col span={8} style={{ marginBottom:20 }}>
              <span><img src={img1} alt='人数' className='icon' /></span>
              <span className='font'>成立时间: {moment(data.establishTime).format('YYYY-MM-DD')}</span>
            </Col>
            <Col span={8} style={{ marginBottom:20 }}>
              <span><img src={img4} alt='学院' className='icon' /></span>
              <span className='font'>所属学院: {data.institute}</span>
            </Col>
            <Col span={8} style={{ marginBottom:20 }}>
              <span><img src={img5} alt='开放' className='icon' /></span>
              <span className='font'>是否对外开放: {data.isOpen==0?'否':'是'}</span>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Detail
