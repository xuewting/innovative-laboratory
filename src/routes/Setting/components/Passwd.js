import React, { Component } from 'react';
import { message } from 'antd'
import { POST } from '../../../components/commonModules/POST'

class Passwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old: '',
      new: '',
      re: ''
    }
  }

  changeValue(e, type) {
    switch (type) {
      case 1:
        this.setState({ old: e.target.value })
        break;
      case 2:
        this.setState({ new: e.target.value })
        break;
      case 3:
        this.setState({ re: e.target.value })
    }
  }

  confirm() {
    return new Promise((reslove, reject) => {
      if (!this.state.old) {
        message.error('请输入原密码')
        reject(0)
      } else if (this.state.new.length < 6 || this.state.new.length > 15) {
        message.error('密码应在6到15个字之间')
        reject(0)
      } else if (this.state.re != this.state.new) {
        message.error('两次新密码输入不一致，请确认')
        reject(0)
      } else {
        reslove(1)
      }
    })
  }

  changePass() {
    this.confirm().then((re) => {
      if (re) {
        var data = `oldPass=${this.state.old}&newPass=${this.state.new}`
        POST('/user/alterPasswd', data, (re) => {
          if (re.state == 1) {
            message.success('修改成功')
            location.reload()
          } else if (re.state == -1) {
            message.error('原密码错误')
          } else if (re.state == -2) {
            message.error('请先登录')
          } else {
            message.error('服务器错误')
          }
        })
      }
    })
  }

  render() {
    return (
      <div className='passwd'>
        <div className="pas_hh">
          <h2>修&nbsp;&nbsp;改&nbsp;&nbsp;密&nbsp;&nbsp;码</h2>
        </div>
        <div className="pas_con">
          <input type="password" placeholder='Old password' onChange={(e) => this.changeValue(e, 1)} />
          <input type="password" placeholder='New password' onChange={(e) => this.changeValue(e, 2)} />
          <input type="password" placeholder='Re-password' onChange={(e) => this.changeValue(e, 3)} />
        </div>
        <div className="confirm" onClick={this.changePass.bind(this)}>
          <button onClick={this.confirm.bind(this)}>确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定</button>
        </div>
      </div>
    );
  }
}

export default Passwd;