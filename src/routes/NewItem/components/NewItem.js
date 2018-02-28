import React, { Component } from 'react'
import '../css/NewItem.scss'
import { Row, Col, Button, Tooltip, Input, DatePicker, message } from 'antd'
import Plan from './Plan'

const { TextArea } = Input
class NewItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      file:'',
      memName:'',
      memXh:''
    }
  }

  // 打开目录
  uploadfile=() => {
    this.refs.file.click()
  }
// 更改目录
  changeFile=(e) => {
    console.log(e)
    this.setState({ file:e })
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

  render () {
    return (
      <div className='newitem'>
        <div className='new_head'>
          <h2>新项目申请</h2>
        </div>
        <div className='new_con'>
          <div className='new_title'>
            <span>项目名称：</span>
            <input type='text' placeholder='请输入项目的名称' />
          </div>
          <Row>
            <Col span={8} className='new_origin'>
              <span>发起人：</span>
              <input type='text' placeholder='请输入项目发起人的姓名' />
            </Col>
            <Col span={8} className='new_origin'>
              <span>发起人学号：</span>
              <input type='text' placeholder='请输入发起人学号' />
            </Col>
            <Col span={8} className='new_origin'>
              <span>联系方式：</span>
              <input type='text' placeholder='请输入发起人的手机号码' />
            </Col>
          </Row>
          <Row>
            <Col span={8} className='new_detail'>
              <span>选择实验室：</span>
              <input type='text' placeholder='请输入你选择的实验室的名称' />
            </Col>
            <Col span={8} className='new_detail'>
              <span>指导老师：</span>
              <input type='text' placeholder='请输入联系好的指导老师（可不填）' />
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
            <DatePicker />
          </div>
          <div className='new_intor'>
            <span>项目介绍：</span>
            <TextArea autosize={{ minRows: 10, maxRows: 10 }} placeholder='请输入项目的简介' className='txt' />
            <span style={{ fontSize: '0.9em' }}>请输入项目的简介</span>
          </div>
          <div className='new_intor'>
            <span>设备需求：</span>
            <TextArea autosize={{ minRows: 10, maxRows: 10 }} placeholder='请输入需要的设备' className='txt' />
            <span style={{ fontSize: '0.9em' }}>请输入需要的设备</span>
          </div>
          <div className='new_intor_f'>
            <span style={{ color:'#FFF', fontSize:1.2 + 'em' }}>项目计划：</span>
            <Plan />
            <span style={{ color: '#FFF', fontSize: '0.9em' }}>请输入对项目的策划</span>
          </div>
          <div className='new_file'>
            <span>项目详情文件长传：</span>
            <input type='text' placeholder='点击选择上传的文件（限word）' value={this.state.file} onClick={this.uploadfile.bind(this)} />
            <input type='file' style={{ display: 'none' }} accept='application/msword' onChange={(e) => this.changeFile(e.target.value)} ref='file' />
          </div>

        </div>

      </div>
    )
  }
}

export default NewItem
