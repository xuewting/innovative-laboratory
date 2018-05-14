import React, { Component } from 'react'
import '../css/member.scss'
import { message, Table, Input, Button, Icon, Modal, Row, Col, Select } from 'antd'
const Option = Select.Option
import { POST } from '../../../components/commonModules/POST'

class Member extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [{
        id: '1',
        name: 'John Brown',
        sid: 32,
        position: '普通成员'
      }, {
        id: '2',
        name: 'Joe Black',
        sid: 42,
        position: '管理员'
      }, {
        id: '3',
        name: 'Jim Green',
        sid: 32,
        position: '普通成员'
      }, {
        id: '4',
        name: 'Jim Red',
        sid: 32,
        position: '管理员'
      }],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
      visible: false,
      name: '',
      sid: '',
      position: '',
      id: '',
      labid: this.props.labid,
      type:0
    }
  }

  // 获取成员列表
  componentWillMount () {
    let labid = this.props.labid
    POST('/labt/getLabUser', `labId=${labid}`, re => {
      if (re.state == 1) {
        this.setState({ data:re.data.rows })
      } else {
        message.error('服务器错误')
      }
    })
  }

  // 打开弹窗
  showModal = (name, sid, position, type) => {
    this.setState({
      visible: true,
      name: name,
      sid: sid,
      position: position,
      type:type
    })
  }

  // 确认提交
  handleOk = (e) => {
    let name = this.state.name
    let sid = this.state.sid
    let labid = this.state.labid
    let data = `name=${name}&sid=${sid}&labId=${labid}`
    if(name==''||sid==''){
      message.error('请确认信息都已填入并无误')
    }else if (this.state.type == 1) {
      //添加成员
      POST('/labt/addLabStu', data, re => {
        if (re.state == 1) {
          message.success('添加成功')
          let labid = this.state.labid
          POST('/labt/getLabUser', `labId=${labid}`, re => {
            if (re.state == 1) {
              this.setState({ data: re.data.rows })
            } else {
              message.error('服务器错误')
            }
          })
        } else if (re.state == -2) {
          message.success('请输入正确的信息')
        }else {
          message.success('服务器错误')
        }
      })
    } else{

    }
    this.setState({
      visible: false
    })
  }

  // 取消修改
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  // 修改信息
  changeValue = (type, value) => {
    switch (type) {
      case 1:
        this.setState({ name: value }); break
      case 2:
        this.setState({ sid: value }); break
      case 3:
        this.setState({ position: value }); break
    }
  }

  // 删除信息
  deletPosen = (id) => {
    let data = `id=${id}`
    POST('/labt/deleteUser', data, re => {
      if (re.state == 1) {
        message.success('删除成功')
        let labid = this.state.labid
        POST('/labt/getLabUser', `labId=${labid}`, re => {
          if (re.state == 1) {
            this.setState({ data: re.data.rows })
          } else {
            message.error('服务器错误')
          }
        })
      } else{
        message.error('服务器错误')
      }
    })
  }

  // 搜索姓名
  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
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

  render () {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '33%',
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
      filterIcon: <Icon type='smile-o' style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible
        }, () => this.searchInput && this.searchInput.focus())
      }
    }, {
      title: '学号',
      dataIndex: 'sid',
      key: 'sid',
      width: '33%'
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: '33%',
      render: (text, record, index) => {
        return (<div>
          <Row>
            <Col span={14}>{text}</Col>
            <Col span={5}>
              <Button onClick={this.deletPosen.bind(this, record.id)} type='danger'>删除</Button>
            </Col>
          </Row>
        </div>
        )
      }
    }]


    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className='membercharge' >
          <div className='mem_head'>
            <h2>实验室成员管理</h2>
          </div>
          <div className='mem_list'>
            <Table columns={columns} dataSource={this.state.data} />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <Button type='primary' onClick={this.showModal.bind(this, '', '', '', 1)}>添加新成员</Button>
          </div>
        </div>
        <Modal
          title='编辑基本信息'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row><Col span={4}>
            <h4>姓名：</h4>
          </Col>
            <Col span={20}>
              <Input
                value={this.state.name}
                style={{ padding: 10, marginBottom: 10 }}
                onChange={(e) => this.changeValue(1, e.target.value)}
                placeholder='请输入成员姓名' />
            </Col></Row>
          <Row><Col span={4}>
            <h4>学号：</h4>
          </Col>
            <Col span={20}>
              <Input
                value={this.state.sid}
                style={{ padding: 10, marginBottom: 10 }}
                onChange={(e) => this.changeValue(2, e.target.value)}
                placeholder='请输入成员学号' />
            </Col></Row>
        </Modal>
      </div>
    )
  }
}

export default Member
