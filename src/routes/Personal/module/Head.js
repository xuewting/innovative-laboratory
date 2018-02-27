import React, { Component } from 'react'
import Default from '../img/015a465698b54432f87574be965625.png'
import '../css/head.scss'
import { POST, BASE_URL } from '../../../components/commonModules/POST'

class PerHead extends Component {
  constructor (props) {
    super(props)
    this.state = {
      src: '',
      userInfo:[],
      lab:{ name:'' }
    }
  }

  render () {
    const { email, headImg, phone, sid, name, sex,  } = this.props.userInfo
    return (
      <div>
        <div className='per_head'>
          <div className='per_himg'>
            <img src={BASE_URL + headImg || Default} alt='' />
          </div>
          <div className='per_detail'>姓名：{name}</div>
          <div className='per_detail'>学号(教工号)：{sid}</div>
          <div className='per_detail'>性别：{sex}</div>
          <div className='per_detail'>联系电话：{phone}</div>
          <div className='per_detail'>邮箱：{email}</div>
          <div className='per_detail'>实验室：{this.props.lab.name}</div>
        </div>
      </div>
    )
  }
}

export default PerHead
