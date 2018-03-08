import React, { Component } from 'react'
import '../css/lab.scss'
import { Upload, Popconfirm, Row, Radio, Col, Button, Input, Icon, Table, Modal, Select } from 'antd'
import { POST, BASE_URL } from '../../../components/commonModules/POST'

const RadioGroup = Radio.Group
const Option = Select.Option
const { TextArea } = Input
class Mumber extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[{
        name:'banan',
        sex:0,
        idnum:1234567,
        lab:'d506',
        num:1523778888,
        email:'541006240@qq.com',
        identity:'s',
        power:'',
        headImg:''
      }, {
        name: 'banan',
        sex: 0,
        idnum: 1234567,
        lab: 'd506',
        num: 1523778888,
        email: '541006240@qq.com',
        identity: 't',
        power: '',
        headImg: ''
      }, {
        name: 'banan',
        sex: 0,
        idnum: 1234567,
        lab: 'd506',
        num: 1523778888,
        email: '541006240@qq.com',
        identity: 's',
        power: '',
        headImg: ''
      } ],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
      chargevisible:false,
      sex:'',
      lablist:[{
        labname:'d506',
        labid:1
      }, {
        labname: 'd507',
        labid: 2
      } ],
      identity:'y',
      power:'',
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    }
  }

  
  componentWillMount() {
    
  }
  

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value })
  }
  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    console.log(reg)
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      list: this.state.list.map((record) => {
        const match = record.name.match(reg)
        if (!match) {
          return null
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className='highlight'>{match[0]}</span>, text] : text
              ))}
            </span>
          )
        }
      }).filter(record => !!record)
    })
  }

  // 个人信息编辑
  toCharge= record => this.setState({ chargevisible:true })

  handleOk = (e) => {
    console.log(e)
    this.setState({
      chargevisible: false
    })
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      chargevisible: false
    })
  }

  // 修改性别
  changeSex=value => this.setState({ sex:value })

  // 修改实验室
  changeLab=value => console.log(value)

  // 修改身份
  changeIde=value => this.setState({ identity:value })

  // 修改管理权限
  changePower=value => this.setState({ power:value });

  // 修改头像
  handleCancelHead = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  handleChangeHead = ({ fileList }) => this.setState({ fileList })

  // 删除
  confirm (e) {
    console.log(e)
  }

  cancel (e) {
    console.log(e)
  }

  render () {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      filterDropdown: (
        <div className='custom-filter-dropdown'>
          <Input
            ref={ele => this.searchInput = ele}
            placeholder='Search name'
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type='primary' onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type='search' style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible
        }, () => this.searchInput && this.searchInput.focus())
      }
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      width: '10%',
      render: (text, record, index) => {
        return (
          <div>
            {text == 0 ? '女' : text == 1 ? '男' : '保密'}
          </div>
        )
      }
    }, {
      title: '学号（教工号）',
      dataIndex: 'idnum',
      key: 'idnum',
      width: '10%'
    }, {
      title: '所属实验室',
      dataIndex: 'lab',
      key: 'lab',
      width: '10%',
      render:text => {
        return (
          <div>
            {text == '' ? '无' : text}
          </div>
        )
      }

    }, {
      title: '联系方式',
      dataIndex: 'num',
      key: 'num',
      width: '10%'
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: '10%'
    }, {
      title: '身份',
      dataIndex: 'identity',
      key: 'identity',
      width: '10%',
      render:text => {
        return (
          <div>
            {text == 's' ? '学生' : text == 't' ? '老师' : '游客'}
          </div>
        )
      }
    }, {
      title: '管理权限',
      dataIndex: 'power',
      key: 'power',
      width: '30%',
      render: (text, record, index) => {
        return (
          <Row>
            <Col span={8}>{text}</Col>
            <Col span={6} style={{ paddingRight: 5, paddingLeft: 5 }} offset={3}>
              <Button style={{ width: '100%' }} onClick={(e) => this.toCharge(record)}>编辑详情</Button>
            </Col>
            <Col span={6} style={{ paddingLeft: 5 }}>
              <Popconfirm title='确认删除？' onConfirm={this.confirm} onCancel={this.cancel} okText='Yes' cancelText='No'>
                <Button type='danger' style={{ width: '100%' }}>删除</Button>
              </Popconfirm>
            </Col>
          </Row>
        )
      }
    }]
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    )
    return (
      <div style={{ width: '90%', margin: '0 auto', marginTop: 20 }}>
        <Table columns={columns} dataSource={this.state.list} />
        <Button type='primary' onClick={(e) => this.toCharge('')}><i className='fa fa-plus' /> 添加</Button>
        <Modal
          visible={this.state.chargevisible}
          title='添加新用户'
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>头像：</span>
            </Col>
            <Col span={15}>
              <Upload
                action=""
                listType="picture-card"
                fileList={this.state.fileList}
                onPreview={this.handlePreview.bind(this)}
                onChange={this.handleChangeHead.bind(this)}
              >
                {this.state.fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancelHead.bind(this)}>
                <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
              </Modal>
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>姓名：</span>
            </Col>
            <Col span={15}>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>性别：</span>
            </Col>
            <Col span={15}>
              <RadioGroup value={this.state.sex} onChange={(e) => this.changeSex(e.target.value)}>
                <Radio value={0}>女</Radio>
                <Radio value={1}>男</Radio>
                <Radio value={2}>保密</Radio>
              </RadioGroup>
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>学号（教工号）：</span>
            </Col>
            <Col span={15}>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>密码：</span>
            </Col>
            <Col span={15}>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>联系方式：</span>
            </Col>
            <Col span={15}>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>邮箱：</span>
            </Col>
            <Col span={15}>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>所属实验室：</span>
            </Col>
            <Col span={15}>
              <Select style={{ width:200 }} onChange={(e) => this.changeLab(e)}>
                {this.state.lablist.map((item, i) => {
                  return (
                  <Option key={i} value={item.labid}>{item.labname}</Option>
                )
                })}
                <Option value={-1}>无</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>身份：</span>
            </Col>
            <Col span={15}>
              <RadioGroup value={this.state.identity} onChange={(e) => this.changeIde(e.target.value)}>
                <Radio value={'s'}>学生</Radio>
                <Radio value={'t'}>老师</Radio>
                <Radio value={'y'}>游客</Radio>
              </RadioGroup>
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>管理权限：</span>
            </Col>
            <Col span={15}>
              <Select style={{ width: 200 }} onChange={(e) => this.changePower(e)}>
                {this.state.lablist.map((item, i) => {
                  return (
                    <Option key={i} value={item.labid}>{item.labname}</Option>
                  )
                })}
                <Option value={-1}>无</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <Col span={4}>
              <span>个人简介：</span>
            </Col>
            <Col span={15}>
              <TextArea autosize={{ minRows:4, maxRows:4 }} style={{ minWidth:'100%' }} />
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}

export default Mumber
