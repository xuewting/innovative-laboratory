import React, { Component } from 'react'
import Default from '../img/015a465698b54432f87574be965625.png'
import '../css/head.scss'

class PerHead extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: ''
    }
  }

  render() {
    const { src } = this.state
    return (
      <div>
        <div className='per_head'>
          <div className='per_himg'>
            <img src={src ? src : Default} alt='' />
          </div>
          <div className='per_detail'>姓名：</div>
          <div className='per_detail'>学号：</div>
          <div className='per_detail'>性别：</div>
          <div className='per_detail'>联系电话：</div>
          <div className='per_detail'>email：</div>
          <div className='per_detail'>实验室：</div>
        </div>
      </div>
    )
  }
}

export default PerHead
