import React, { Component } from 'react'
import { message, Table, Button, Row, Col, Modal, Icon, Input, Popconfirm, Radio } from 'antd'
import '../css/lab.scss'
import { browserHistory } from 'react-router'
import { POST } from '../../../components/commonModules/POST'

const RadioGroup = Radio.Group

class Lab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[{
        name:'好banana',
        isOpen:true,
        position:'d506',
        user:'lorem'
      }, {
        name: 'banana',
        isOpen: false,
        position: 'd506',
        user: 'lorem'
      } ],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
      visible:false,
      visible2:false,
      isOpen:'',
      name:'',
      sid:'',
      labid:'',
      labname:'',
      position:'',
      teacher:''
    }
  }

  // 获取所有实验室
  componentWillMount () {
    POST('/getAllLab', '', re => {
      if (re.state == 1) {
        // console.log(re)
        this.setState({ list:re.data })
      } else {
        message.error('服务器错误')
      }
    })
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

  // 进入实验室管理界面
  toLabCharge=(value) => browserHistory.push({
    pathname:'/labcharge/detail',
    query:{
      labid:value
    }
  })

  // 显示管理老师编辑模块
  showModal=(value, name, sid) => this.setState({
    visible: !this.state.visible,
    labid:value,
    name:name,
    sid:sid
  });

  // 内容修改（负责老师）
  changeTeacher=(value, type) => {
    if (type == 1) {
      this.setState({ name:value })
    } else {
      this.setState({ sid:value })
    }
  }

  handleOk = () => {
    let name = this.state.name
    let sid = this.state.sid
    let data = `name=${name}&sid=${sid}&labId=${this.state.labid}`
    POST('/root/editLabTea', data, re => {
      if (re.state == 1) {
        message.success('修改成功')
        POST('/getAllLab', '', re => {
          if (re.state == 1) {
            // console.log(re)
            this.setState({ list: re.data })
          } else {
            message.error('服务器错误')
          }
        })
      } else if (re.state == -2) {
        message.error('输入用户不存在，请重新输入')
      } else {
        message.error('服务器错误')
      }
    })
    this.setState({
      visible: false
    })
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  // 显示添加实验室模块
  showModal2 = () => this.setState({
    visible2: !this.state.visible2
  });
  handleOk2 = (e) => {
    let { labname, teacher, sid, isOpen, position } = this.state
    console.log(isOpen)
    let data = `name=${labname}&position=${position}&isOpen=${isOpen}&tid=${sid}&tname=${teacher}`
    POST('/root/addLab', data, re => {
      if (re.state == 1) {
        message.success('添加成功')
        POST('/getAllLab', '', re => {
        if (re.state == 1) {
          this.setState({ list: re.data })
        } else {
          message.error('服务器错误')
        }
      })
      } else if (re.state == -2) {
      message.error('输入的用户不存在，请重新输入')
    } else {
      message.error('服务器错误')
    }
    })
    this.setState({
      visible2: false
    })
  }
  handleCancel2 = (e) => {
    console.log(e)
    this.setState({
      visible2: false
    })
  }

// 开放状态
  isOpen=(value) => this.setState({ isOpen:value })

  // 删除实验室
  confirm (id) {
    POST('/root/deleteLab', `id=${id}`, re => {
      if (re.state == 1) {
        message.success('删除成功')
        POST('/getAllLab', '', re => {
          if (re.state == 1) {
            this.setState({ list: re.data })
          } else {
            message.error('服务器错误')
          }
        })
      } else {
        message.error('服务器错误')
      }
    })
  }

  cancel (e) {
    console.log(e)
  }

  // 更改值（添加实验室）
  changeValue (type, value) {
    switch (type) {
      case 1:
        this.setState({ labname:value }); break
      case 2:
        this.setState({ position:value }); break
      case 3:
        this.setState({ teacher:value }); break
      case 4:
        this.setState({ sid:value }); break
    }
  }

  render () {
    const columns = [{
      title: '实验室名称',
      dataIndex: 'name',
      key: 'name',
      width:'30%',
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
      title: '是否开放',
      dataIndex: 'isOpen',
      key: 'isOpen',
      width: '10%',
      render:(text, record, index) => {
        return (
          <div>
            {text == 1 ? '是' : '否'}
          </div>
        )
      }
    }, {
      title: '所在位置',
      dataIndex: 'position',
      key: 'position',
      width: '10%'
    }, {
      title: '负责老师',
      dataIndex: 'user',
      key: 'user',
      width: '40%',
      render:(text, record, index) => {
        // console.log(record)
        return (
          <Row>
            <Col span={8}>{text.name}</Col>
            <Col span={5} style={{ paddingRight:5 }}>
              <Button style={{ width: '100%' }} onClick={(e) => this.showModal(record.id, record.user.name, record.user.sid)}>编辑负责老师</Button>
            </Col>
            <Col span={4} style={{ paddingRight:5, paddingLeft:5 }}>
              <Button style={{ width:'100%' }} onClick={(e) => this.toLabCharge(record.id)}>进入编辑</Button>
            </Col>
            <Col span={4} style={{ paddingLeft:5 }}>
              <Button type='danger' style={{ width: '100%' }} onClick={this.confirm.bind(this, record.id)}>删除</Button>
            </Col>
          </Row>
        )
      }
    }]
    return (
      <div style={{ width:'90%', margin:'0 auto', marginTop:20 }}>
        <Table columns={columns} dataSource={this.state.list} />
        <Button style={{ marginTop:20 }} type='primary' onClick={(e) => this.showModal2()}>
          <i className='fa fa-plus' /> 添加实验室
        </Button>
        <Modal
          title='编辑实验室管理老师'
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          >
          <Row style={{ marginBottom:15 }}>
            <Col span={4}>
              <span>姓名：</span>
            </Col>
            <Col span={15}>
              <Input value={this.state.name} onChange={(e) => this.changeTeacher(e.target.value, 1)} />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <span>教工号：</span>
            </Col>
            <Col span={15}>
              <Input value={this.state.sid} onChange={(e) => this.changeTeacher(e.target.value, 0)} />
            </Col>
          </Row>
        </Modal>
        <Modal
          title='添加实验室'
          visible={this.state.visible2}
          onOk={this.handleOk2.bind(this)}
          onCancel={this.handleCancel2.bind(this)}
          >
          <Row style={{ marginBottom:15 }}>
            <Col span={4}>
              <span>实验室名称：</span>
            </Col>
            <Col span={15}>
              <Input onChange={(e) => this.changeValue(1, e.target.value)} />
            </Col>
          </Row>
          <Row style={{ marginBottom:15 }}>
            <Col span={4}>
              <span>所在位置：</span>
            </Col>
            <Col span={15}>
              <Input onChange={(e) => this.changeValue(2, e.target.value)} />
            </Col>
          </Row>
          <Row style={{ marginBottom:15 }}>
            <Col span={4}>
              <span>是否开放：</span>
            </Col>
            <Col span={15}>
              <RadioGroup onChange={(e) => this.isOpen(e.target.value)}>
                <Radio value={1}>是</Radio>
                <Radio value={0}>否</Radio>
              </RadioGroup>
            </Col>
          </Row>
          <Row style={{ marginBottom:15 }}>
            <Col span={4}>
              <span>管理老师：</span>
            </Col>
            <Col span={15}>
              <Input onChange={(e) => this.changeValue(3, e.target.value)} />
            </Col>
          </Row>
          <Row style={{ marginBottom:15 }}>
            <Col span={4}>
              <span>教工号：</span>
            </Col>
            <Col span={15}>
              <Input onChange={(e) => this.changeValue(4, e.target.value)} />
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}

export default Lab
