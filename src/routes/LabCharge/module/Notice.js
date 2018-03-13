import React, { Component } from 'react'
import {  Input, Row, Col, Select, Button, message } from 'antd'
import '../css/notice.scss'

const Option = Select.Option

class Notice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state:'',
      name:'',
      id:'',
      person:[],
      title:'',
      con:''
    }
  }

  changeValue(type,value){
    if(type==1){
      this.setState({name:value});
    }else if (type==2){
      this.setState({id:value});
    }
  }

  // add person
  add(){
    let { name, id } = this.state
    if (!name){
      message.error('姓名不能为空')
    }else if (!id){
      message.error('学号（教工号）不能为空')
    }else{
      let person={name:name,id:id}
      this.state.person.push(person)
      this.setState({person:this.state.person});
    }
  }
  //delete person
  delete(num){
    var person = Array.prototype.slice.call(this.state.person)
    person.splice(num, 1)
    this.setState({ person })
  }

  handleChange (value) {
    this.setState({state:value})
   console.log(`selected ${value}`)
}

//修改标题
  changeTitle=(value)=>this.setState({title:value});

//修改内容
  changeCon=(value)=>this.setState({con:value})

  //提交
  commit=()=>{
     
  }

  render () {
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className='noticecharge'>
          <div className='notice_head'>
            <h2>通知公告</h2>
          </div>
          <div className='notice_con'>
            <div className='notice_to'>
              <Row style={{marginBottom:20}}>
                <Col span={2}><span>发送对象：</span></Col>
                <Col span={18}>
                  <Select style={{ width: 120 }} onChange={(e)=>this.handleChange(e)}>
                    <Option value={0}>公开</Option>
                    <Option value={1}>实验室内部</Option>
                    <Option value={2} >自定义</Option>
                  </Select>
                </Col>
              </Row>
              <Row style={{ marginBottom: 20 }}>
                <Col span={2}><span>标题：</span></Col>
                <Col span={14}>
                  <Input placeholder='请输入标题'onChange={(e)=>this.changeTitle(e.target.value)}></Input>
                </Col>
              </Row>
              {this.state.state==2?
              <div className="notice_to_person">
                <Row style={{marginBottom:10}}>
                  <Col span={5}>
                    <span>姓名：</span>
                    <input type="text" onChange={(e)=>this.changeValue(1,e.target.value)}/>
                  </Col>
                    <Col span={7} offset={1}>
                      <span>学号（教工号）：</span>
                      <input type="text" onChange={(e) => this.changeValue(2, e.target.value)}/>
                    </Col>
                    <Col span={4}><Button type='primary' onClick={this.add.bind(this)}>添 加</Button></Col>
                </Row>
                {this.state.person.map((item,i)=>{
                  return(
                    <Row key={i} style={{marginBottom:10}}>
                      <Col span={5}>{item.name}</Col>
                      <Col span={7} offset={1}>{item.id}</Col>
                      <Col span={4}><i className="fa fa-trash" style={{cursor:'pointer'}} onClick={this.delete.bind(this,i)}></i></Col>
                    </Row>
                  )
                })}
              </div>:''}
            </div>
            <div className='notice_contain'>
              <textarea cols='30' rows='10' className='cantain_inp' onChange={(e)=>this.changeCon(e.target.value)}/>
            </div>
          </div>
          <div className="notice_commit">
            <div className="commit_btu" onClick={(e)=>this.commit()}>
              提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Notice
