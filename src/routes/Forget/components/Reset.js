import React, { Component } from 'react'
import '../css/forget.scss'
import { message } from 'antd'

class Reset extends Component {
  constructor (props) {
    super(props)
    this.state = {
      passwd:'',
      confirm:''
    }
  }

  changeValue (type, vale) {
    if (type == 1) {
      this.setState({ passwd:vale })
    } else if (typw == 2) {
      this.setState({ confirm:vale })
    }
  }

  // conmfirm
  confirm () {
    let { passwd, confirm } = this.state
    if (passwd == confirm) {

    } else{
      message.error('两次输入的密码不一致，缺重新输入')
    }
  }

  render () {
    return (
      <div className='resrt'>
        <div className='reset_head'>
          <h2>重 置 密 码</h2>
        </div>
        <div className='reset_con'>
          <div className='reset_passwd'>
            <span>新密码：</span>
            <input type='text' className='for_inp_box' onChange={(e) => this.changeValue(1, e.target.value)} />
          </div>
          <div className='reset_passwd'>
            <span>确认密码：</span>
            <input type='text' className='for_inp_box' onChange={(e) => this.changeValue(2, e.target.value)} />
          </div>
        </div>
        <div className='reset_commit'>
          <div className='com_but'>
            提 交
          </div>
        </div>
      </div>
    )
  }
}

export default Reset
