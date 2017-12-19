import React, { Component } from 'react';
import { Row, Col, Radio, message } from 'antd'
import {POST} from '../../../components/commonModules/POST'
const RadioGroup = Radio.Group;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'haha',
      idnum:123456,
      phone:123456766,
      email:'541006240@qq.com',
      sex:1,
      intor:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nam ipsum, qui iusto expedita facilis ab, eius harum sit nulla sapiente, commodi voluptas. Inventore id incidunt fuga soluta odio, fugiat?'
    }
  }
  
  componentWillMount() {
   POST('/user/getUserInfo', `data=''`, (re) => {
      if (re.state == 1) {
        this.setState({
          name:re.data.name,
          sex:re.data.sex,
          email:re.data.email,
          phone:re.data.phone,
          intor:re.data.power,
          idnum:re.data.sid
        })
      } else if (re.state == -2) {
        message.error('请先登录')
      }
    })
  }
  

  //change value
  changeValue(e,type){
    switch(type){
      case 1:
      this.setState({name:e.target.value})
      break;
      case 2:
      this.setState({idnum:e.target.value})
      break;
      case 3:
      this.setState({phone:e.target.value})
      break;
      case 4:
      this.setState({email:e.target.value})
      break;
      case 5:
      this.setState({sex:e.target.value})
      break;
      default:
      this.setState({intor:e.target.value})
    }
  }

  //唯一验证
  isUniqe(type){
    let {name,email} = this.state
    if(type==1){
      if(name.length<3|name.length>15){
       message.error('用户名长度在3到15之间')  
      }else{
        POST('/queryUname',`uname=${name}`,(re)=>{
        console.log(re)
        if(re.state==1){
          
        }
      })
      }
    }else if(type==0){
      if(!email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)){
        message.error('请输入正确的邮箱')
      }else{
        POST('/queryEmail',`email=${email}`,(re)=>{
        console.log(re)
        if(re.state==1){
          
        }
      })
      }
    }
  }

  //submit
  submit(){
    let {phone,name,email,sex,intor,idnum} = this.state
    let data=`uname=${name}&sid=${idnum}&sex=${sex}&introduce=${intor}`
    POST('/modUserInfo',data,(re)=>{
      console.log(re)
      if(re.state==1){
        
      }else{
        message.error('服务器错误')
      }
    })
  }
  
  render() {
    return (
      <div className='set_con'>
        <div className="con_head">
          <h2 className="profile">个&nbsp;&nbsp;人&nbsp;&nbsp;信&nbsp;&nbsp;息</h2>
        </div>
        <div className="con_item">
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>用户名：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input 
              type="text" 
              className="con_inp" 
              value={this.state.name} 
              onChange={(e)=>this.changeValue(e,1)}
              onBlur={this.isUniqe.bind(this,1)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>学号（教工号）：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input type="text" className="con_inp" value={this.state.idnum} onChange={(e)=>this.changeValue(e,2)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>联系电话：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input type="text" className="con_inp" value={this.state.phone} onChange={(e)=>this.changeValue(e,3)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>E-mail：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input 
              type="text" 
              className="con_inp" 
              value={this.state.email} 
              onChange={(e)=>this.changeValue(e,4)}
              onBlur={this.isUniqe.bind(this,0)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>性别：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <RadioGroup name="radiogroup" defaultValue={this.state.sex} onChange={(e)=>this.changeValue(e,5)}>
                <Radio value={0}>男</Radio>
                <Radio value={1}>女</Radio>
              </RadioGroup>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>自我介绍：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <textarea className="con_inp" rows={6} style={{ height: 'auto' }} value={this.state.intor} onChange={(e)=>this.changeValue(e,6)}/>
            </Col>
          </Row>
        </div>
        <div className="Commit" onClick={this.submit.bind(this)}>
        <button>提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</button>
        </div>
      </div>
    );
  }
}

export default Content;