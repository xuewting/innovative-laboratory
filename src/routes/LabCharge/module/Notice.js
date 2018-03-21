import React, { Component } from 'react'
import { Input, Row, Col, Select, Button, message } from 'antd'
import '../css/notice.scss'
import { POST } from '../../../components/commonModules/POST'

const Option = Select.Option

class Notice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state:'',
      user:'',
      id:'',
      person:[],
      title:'',
      con:'',
      list:[]
    }
  }

  //获取实验室成员
  componentWillMount() {
    POST('/labt/getLabUser',`labId=${this.props.labid}`,re=>{
      if(re.state==1){
        this.setState({list:re.data.rows})
      }else{
        message.error('服务器错误')
      }
    })
  }
  

  changeValue (type, value) {
    if (type == 1) {
      this.setState({ name:value })
    } else if (type == 2) {
      this.setState({ id:value })
    }
  }

  // delete person
  delete (num) {
    var person = Array.prototype.slice.call(this.state.person)
    person.splice(num, 1)
    this.setState({ person })
  }
// 修改发送类型
  handleChange (value) {
    this.setState({ state:value })
  }

// 修改标题
  changeTitle=(value) => this.setState({ title:value });

  // 修改内容
  changeCon=(value) => this.setState({ con:value })

  //修改发送对象
  handleChangeUser=(e)=>this.setState({user:e})

  // 提交
  commit=() => {
    let sendType = this.state.state
    let sendUser = this.state.user    
    let title = this.state.title
    let content = this.state.con
    if (sendType == 2) {
      var data = `sendType=${sendType}&sendUser=${sendUser}&title=${title}&content=${content}`
    } else if (sendType == 1) {
      var data = `sendType=${sendType}&sendUser=${this.props.labid}&title=${title}&content=${content}`
    } else {
      var data = `sendType=${sendType}&title=${title}&content=${content}`
    }
    POST('/labt/sendNotice', data, re => {
      if (re.state == 1) {
        message.success('发送成功')
      } else if (re.state == -2) {
        message.error('输入的用户不存在')
      }
    })
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
              <Row style={{ marginBottom:20 }}>
                <Col span={2}><span>发送对象：</span></Col>
                <Col span={3}>
                  <Select style={{ width: 120 }} onChange={(e) => this.handleChange(e)}>
                    <Option value={0}>公开</Option>
                    <Option value={1}>实验室内部</Option>
                    <Option value={2} >自定义</Option>
                  </Select>
                </Col>
                {this.state.state == 2?
                <div>
                <Col span={2} offset={1}><span>选择对象：</span></Col>
                <Col span={3}>                
                   <div className='notice_to_person'>
                    <Select style={{ width: 120 }} onChange={(e) => this.handleChangeUser(e)}>
                      {this.state.list.map((item, i) => {
                        return (
                          <Option value={item.id} key={i}>{item.name}</Option>
                        )
                      })}
                    </Select>
                  </div> 
                </Col>
                </div>: ''}                
              </Row>
              <Row style={{ marginBottom: 20 }}>
                <Col span={2}><span>标题：</span></Col>
                <Col span={14}>
                  <Input placeholder='请输入标题'onChange={(e) => this.changeTitle(e.target.value)} />
                </Col>
              </Row>
              
            </div>
            <div className='notice_contain'>
              <textarea cols='30' rows='10' className='cantain_inp' onChange={(e) => this.changeCon(e.target.value)} />
            </div>
          </div>
          <div className='notice_commit'>
            <div className='commit_btu' onClick={(e) => this.commit()}>
              提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Notice
