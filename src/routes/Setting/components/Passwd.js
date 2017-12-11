import React, { Component } from 'react';
import { message } from 'antd'

class Passwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OLDPASS:'123',
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
    if(!this.state.old){
      message.error('请输入原密码')
    }else if (this.state.old!=this.state.OLDPASS) {
      message.error('密码不正确')
    }else if(this.state.re != this.state.new){
      message.error('两次新密码输入不一致，请确认')
    }
  }

  render() {
    return (
      <div className='passwd'>
        <div className="pas_hh">
          <h2>修&nbsp;&nbsp;改&nbsp;&nbsp;密&nbsp;&nbsp;码</h2>
        </div>
        <div className="pas_con">
          <input type="text" placeholder='Old password' onChange={(e) => this.changeValue(e, 1)} />
          <input type="text" placeholder='New password' onChange={(e) => this.changeValue(e, 2)} />
          <input type="text" placeholder='Re-password' onChange={(e) => this.changeValue(e, 3)} />
        </div>
        <div className="confirm">
          <button onClick={this.confirm.bind(this)}>确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定</button>
        </div>
      </div>
    );
  }
}

export default Passwd;