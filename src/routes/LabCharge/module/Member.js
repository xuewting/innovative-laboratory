import React, { Component } from 'react';
import '../css/member.scss'
import { Table, Input, Button, Icon, Modal, Row, Col, Select } from 'antd'
const Option = Select.Option;

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: '1',
        name: 'John Brown',
        xh: 32,
        position: '普通成员',
      }, {
        id: '2',
        name: 'Joe Black',
        xh: 42,
        position: '管理员',
      }, {
        id: '3',
        name: 'Jim Green',
        xh: 32,
        position: '普通成员',
      }, {
        id: '4',
        name: 'Jim Red',
        xh: 32,
        position: '管理员',
      }],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
      visible: false,
      name: '',
      xh: '',
      position: '',
      id: ''
    }
  }

  //打开弹窗
  showModal = (name, xh, position) => {
    this.setState({
      visible: true,
      name: name,
      xh: xh,
      position: position
    });
  }

  //确认提交
  handleOk = (e) => {
    console.log(e.target.value);
    this.setState({
      visible: false,
    });
  }

  //取消修改
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  //修改信息
  changeValue = (type, value) => {
    switch (type) {
      case 1:
        this.setState({ name: value }); break;
      case 2:
        this.setState({ xh: value }); break;
      case 3:
        this.setState({ position: value }); break;
    }
  }

  //删除单挑信息
  deletPosen = () => {

  }

  //添加新成员
  addNews = () => {
    let id = ''
    this.showModal('', '', '', id)
  }

  //搜索姓名
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '33%',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
    }, {
      title: '学号',
      dataIndex: 'xh',
      key: 'xh',
      width: '33%',
    }, {
      title: '职位',
      dataIndex: 'position',
      key: 'position',
      width: '33%',
      filters: [{
        text: '普通成员',
        value: '普通成员',
      }, {
        text: '管理员',
        value: '管理员',
      }],
      onFilter: (value, record) => record.position.indexOf(value) === 0,
      render: (text, record, index) => {
        return (<div>
          <Row>
            <Col span={14}>{text}</Col>
            <Col span={5}>

              {/*编辑弹框*/}

              <Button onClick={this.showModal.bind(this, record.name, record.xh, record.position, record.id)}>编辑</Button>
              <Modal
                title="修改基本信息"
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
                      value={this.state.xh}
                      style={{ padding: 10, marginBottom: 10 }}
                      onChange={(e) => this.changeValue(2, e.target.value)}
                      placeholder='请输入成员学号' />
                  </Col></Row>
                <Row><Col span={4}>
                  <h4>职位：</h4>
                </Col>
                  <Col span={20}>
                    <Select value={this.state.position} style={{ width: 120 }} onChange={(e) => this.changeValue(3,e)}>
                      <Option value="普通成员">普通成员</Option>
                      <Option value="管理员">管理员</Option>
                    </Select>
                    
                  </Col></Row>
              </Modal>
            </Col>
            <Col span={5}>
              <Button onClick={this.deletPosen.bind(this, record.id)}>删除</Button>
            </Col>
          </Row>
        </div>
        )
      }
    }];


    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="member" >
          <div className="mem_head">
            <h2>实验室成员管理：</h2>
          </div>
          <div className="mem_list">
            <Table columns={columns} dataSource={this.state.data} />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <Button type='primary' onClick={this.showModal.bind(this, '', '', '')}>添加新成员</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;