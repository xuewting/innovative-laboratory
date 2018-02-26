import React, { Component } from 'react'
import '../css/forget.scss'
import Reset from './Reset'

class Forget extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state:0,
      success:0
    }
  }

  // commit
  commit () {
    this.setState({ state:1 })
  }

  render () {
    return (
      <div className='forget'>
        {this.state.success == 1 ? <Reset />
      :<div>
        <div className='for_hea'>
          <h2>忘 记 密 码</h2>
        </div>
        <div className='for_con'>
          <div className='for_inp'>
            <span>用户名：</span>
            <input type='text' className='for_inp_box' />
          </div>
          <div className='for_inp'>
            <span>邮箱：</span>
            <input type='text' className='for_inp_box' />
          </div>
          {this.state.state == 1
           ? <div className='for_inp'>
             <span>验证码：</span>
             <input type='text' className='for_inp_box' />
           </div> : ''}
        </div>
        <div className='for_commit'>
          <div className='com_but' onClick={this.commit.bind(this)}>
            {this.state.state == 1 ? '提 交' : '发 送 验 证 码' }
          </div>
        </div>
      </div>}
      </div>
    )
  }
}

export default Forget
