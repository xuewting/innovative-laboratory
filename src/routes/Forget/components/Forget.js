import React, { Component } from 'react'
import '../css/forget.scss'
import Reset from './Reset'
import { POST } from '../../../components/commonModules/POST'
import { message } from 'antd'
class Forget extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state:0,
      success:0,
      email:'',
      identifyCode:''
    }
  }
  /**
   * 验证码的验证
   */
  commit () {
    var ident = this.state.identifyCode
    let data = `identifyCode=${ident}`
    POST('/mailSure',data,re=>{
      if(re.state===1){
        message.info("验证成功")
        // 跳转到修改密码界面
        browserHistory.push({
          pathname: '/'
        })
      }else{
        message.error("验证码错误")
      }
    })
  }
  /**
   * 发送验证码
   */
  sendIdent () {
    let email = this.state.email
    var data = `email=${email}`
    POST('/user/getBackPass', data, re => {
      if (re.state === 1) {
        this.setState({ state:1 })
        message.info('验证码已发送')
      }
    })
  }
  /**
   * 改变邮箱输入框
   */
  changeEmail (e) {
    this.setState({ email:e.target.value })
  }
  /**
   * 改变邮箱输入验证码的输入框
   */
  changeident(e){
    this.setState({identifyCode:e.target.value})
  }
  render () {
    return (
      <div className='forget'>
        {this.state.success == 1 ? <Reset />
      : <div>
        <div className='for_hea'>
          <h2>忘 记 密 码</h2>
        </div>
        <div className='for_con'>

          <div className='for_inp'>
            <span>邮箱：</span>
            <input type='text' className='for_inp_box' onChange={(e) => { this.changeEmail(e) }} />
          </div>
          {this.state.state == 1
           ? <div className='for_inp'>
             <span>验证码：</span>
             <input type='text' className='for_inp_box' onChange={e=>{this.changeident(e)}}/>
           </div> : ''}
        </div>
        <div className='for_commit'>
          {this.state.state === 1
        ? <div className='com_but' onClick={this.commit.bind(this)}>
        提交
          </div>
        : <div className='com_but' onClick={this.sendIdent.bind(this)}>
          发送验证码
          </div>}
        </div>
      </div>}
      </div>
    )
  }
}

export default Forget
