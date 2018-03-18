import React, { Component } from 'react'
import '../css/NewItem.scss'
import { Row, Col, Button, Tooltip, Input, DatePicker, message, Select } from 'antd'
import Plan from './Plan'
import { POST, POSTFile } from '../../../components/commonModules/POST'

const { TextArea } = Input
const Option = Select.Option
class NewItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      file:'',
      memName:'',
      memXh:'',
      pname:'',
      phone:'',
      labId:'',
      teacher:'',
      intr:'',
      need:'',
      plan:'',
      endTime:'',
      labList:[],
      fileName:''
    }
  }
  
  componentWillMount() {
    POST('/getAllLab','',re=>{
      if(re.state==1){
        this.setState({labList:re.data})
      }else{
        message.error('获取实验室失败')
      }
    })    
  }
  
  // 打开目录
  uploadfile=() => {
    this.refs.file.click()
  }
// 更改目录
  changeFile=(file,name) => {    
    this.setState({ file:file,
    fileName:name })
  }

  // 添加成员信息
  addMem (type, value) {
    if (type == 1) {
      this.setState({ memName:value })
    } else if (type == 2) {
      this.setState({ memXh:value })
    }
  }

  confirm=() => {
    if (!this.state.memName) {
      message.error('成员姓名不能为空')
    } else if (!this.state.memXh) {
      message.error('成员学号不能为空')
    } else {
      let value = { name: this.state.memName, xh: this.state.memXh }
      this.state.list.push(value)
      this.setState({ list:this.state.list,
        memName:'',
        memXh:'' })
    }
  }

  // 删除成员
  delete (value) {
    var list = Array.prototype.slice.call(this.state.list)
    list.splice(value, 1)
    this.setState({ list })
  }

  // commit
  commit=() => {
    let {pname,labId,teacher,phone,need,endTime} = this.state
    let data = `pname=${pname}&applyLab=${labId}&guideName=${teacher}&contactWay=${phone}&devDemand=${need}&expertTime=${endTime}`
    POST('/user/applyProject', data, re => {
      if (re.state == 1) {
        let dataform = new FormData()
        dataform.append('pid',re.data.id)
        dataform.append('file',this.state.file)
        POSTFile('/user/applyProPlan',dataform,re=>{
          if(re.state==1){
            message.success('提交成功')
          }else{
            message.error('服务器错误')
          }
        })       
      }else {
        message.error('服务器错误')
      }
    })
  }

  // change plan
  changePlan=(value) => this.setState({ plan:value })

  // change value
  changeValue=(value, type) => {
    switch (type) {
      case 1: this.setState({ pname:value }); break
      case 4: this.setState({ phone:value }); break
      case 5: this.setState({ labId:value }); break
      case 6: this.setState({ teacher:value }); break
      case 7: this.setState({ endTime:value }); break
      case 8: this.setState({ intr:value }); break
      case 9: this.setState({ need:value }); break
    }
  }

  render () {
    return (
      <div className='newitem'>
        <div className='new_head'>
          <h2>新项目申请</h2>
        </div>
        <div className='new_warn'>
          <div style={{ width: '100%', background:'rgba(195, 141, 15, 0.77)', padding:10 }}>
            <span className='warning'>
            *申请项目前请先确认已注册账号并登陆
          </span>
          </div>
        </div>
        <div className='new_con'>
          <div className='new_title'>
            <span>项目名称：</span>
            <input type='text' placeholder='请输入项目的名称' onChange={(e) => this.changeValue(e.target.value,1)}/>
          </div>     
          <Row>
            <Col span={8} className='new_origin'>
              <span>联系方式：</span>
              <input type='text' placeholder='请输入发起人的手机号码' onChange={(e) => this.changeValue(e.target.value, 4)} />
            </Col>
            <Col span={8} className='new_detail'>
              <span>选择实验室：</span>
              <Select style={{ width: '65%' }} onChange={(e) => this.changeValue(e, 5)} >
              {this.state.labList.map((item,i)=>{
                return(
                  <Option value={item.id} key={i}>{item.name}</Option>
                )
              })}
              </Select>
            </Col>
            <Col span={8} className='new_detail'>
              <span>指导老师：</span>
              <input type='text' placeholder='请输入联系好的指导老师（可不填）' onChange={(e) => this.changeValue(e.target.value, 6)}/>
            </Col>
          </Row>
          <Row>
            <Col span={8} className='new_mem'>
              <span>成员姓名：</span>
              <input value={this.state.memName} type='text' placeholder='请输入成员姓名' onChange={(e) => this.addMem(1, e.target.value)} />
            </Col>
            <Col span={8} className='new_mem'>
              <span>成员学号：</span>
              <input type='text' value={this.state.memXh} placeholder='请输入成员学号' onChange={(e) => this.addMem(2, e.target.value)} />
            </Col>
            <Col span={4} className='new_but'>
              <Button type='primary' style={{ width: '90%' }} onClick={this.confirm.bind(this)}>确认添加</Button>
            </Col>
          </Row>
          {this.state.list.length == 0 ? '' : <div>
            {this.state.list.map((item, i) => {
              return (
                <Row key={i} className='mem_list'>
                  <Col span={8}><span>{item.name}</span></Col>
                  <Col span={8}><span>{item.xh}</span></Col>
                  <Col span={4} style={{ color: '#fff', fontSize: '1.1em', cursor: 'pointer' }}>
                    <Tooltip title='删除'>
                      <i className='fa fa-trash' onClick={this.delete.bind(this, i)} />
                    </Tooltip>
                  </Col>
                </Row>
              )
            })}
          </div>}
          <div className='end_time'>
            <span>预计结束时间：</span>
            <DatePicker onChange={(data,dataString) => this.changeValue(dataString, 7)}/>
          </div>
          
          <div className='new_intor'>
            <span>设备需求：</span>
            <TextArea autosize={{ minRows: 10, maxRows: 10 }} placeholder='请输入需要的设备' className='txt' onChange={(e) => this.changeValue(e.target.value, 9)}/>
            <span style={{ fontSize: '0.9em' }}>请输入需要的设备</span>
          </div>
          
          <div className='new_file'>
            <span>项目详情文件长传：</span>
            <input type='text' placeholder='点击选择上传的文件（限word）' value={this.state.fileName} onClick={this.uploadfile.bind(this)} />
            <input type='file' style={{ display: 'none' }} accept='application/msword' onChange={(e) => this.changeFile(e.target.files[0],e.target.value)} ref='file' />
          </div>
          <div className='new_com'>
            <div className='new_com_btu' onClick={(e) => this.commit()}>
              提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default NewItem
