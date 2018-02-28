import React, { Component } from 'react'
import { Modal, Button, Input } from 'antd'
import '../css/signin.scss'

const {TextArea}=Input

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state={
      disable:false
    }
  }

  showModal(){
    this.setState({disable:true})
  }
  //确认
  handleCOk = (e) => {
    console.log(e);
    this.setState({
      disable: false,
    });
  }
  //取消
  handleCCancel = (e) => {
    console.log(e);
    this.setState({
      disable: false,
    });
  }
  render () {
    return (
      <div className='sign_in'>
        <span onClick={this.showModal.bind(this)}>签&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到</span>
        <Modal 
          title='签到'
          visible={this.state.disable}
          onOk={this.handleCOk}
          onCancel={this.handleCCancel}
          >
          <span style={{fontSize:1+'em'}}>工作内容：</span>
          <TextArea ></TextArea>
          <span style={{ fontSize:1 +'em',marginTop:10 }}>参与项目名称：</span>
          <Input></Input>
        </Modal>
      </div>
    )
  }
}

export default Calendar
