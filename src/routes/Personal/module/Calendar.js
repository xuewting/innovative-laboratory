import React, { Component } from 'react'
import { Modal, Button, Input,message } from 'antd'
import '../css/signin.scss'
import { POST } from '../../../components/commonModules/POST';

const {TextArea}=Input

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state={
      disable:false,
      con:''
    }
  }

  showModal(){
    this.setState({disable:true})
  }
  //修改备注
  changeValue=(value)=>this.setState({con:value})
  //确认
  handleCOk = (e) => {    
    let labid=this.props.labid
    let content=this.state.con  
    let data=`labId=${labid}&content=${content}&rec=0`
    POST('/lab/StaffRecord',data,re=>{
      if(re.state==1){
        message.success('提交成功')
      }else if(re.state==-5){
        message.error('输入参数错误')
      }else{
        message.error('服务器错误')
      }
    })
    this.setState({
      disable: false,
    });
  }
  //取消
  handleCCancel = (e) => {
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
          <span style={{fontSize:1+'em'}}>备注：</span>
          <TextArea onChange={(e)=>this.changeValue(e.target.value)}></TextArea>
        </Modal>
      </div>
    )
  }
}

export default Calendar
