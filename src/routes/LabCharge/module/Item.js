import React, { Component } from 'react';
import { Icon, Row, Col, Button, Pagination, Popconfirm, message, Modal, Input, DatePicker, Upload } from 'antd'
import '../css/Item.scss'
import { browserHistory } from 'react-router';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        title: 'Lorem ipsum dolor sit amet',
        id: '1',
        time: '18-1-1',
        origin: '麦兜',
        teacher: '可达鸭',
        endTime: '18-12-12'
      }, {
        title: 'Lorem ipsum dolor sit amet',
        id: '1',
        time: '18-1-1',
        origin: '麦兜',
        teacher: '可达鸭',
        endTime: '18-12-12'
      }, {
        title: 'Lorem ipsum dolor sit amet',
        id: '1',
        time: '18-1-1',
        origin: '麦兜',
        teacher: '可达鸭',
        endTime: '18-12-12'
      },],
      current: 1,
      visible: false,
      title: '',
      origin: '',
      originXh: '',
      teacher: '',
      endTime: '',
      date: '',
      evisible: false
    }
  }


  componentWillMount() {
    let newDate = new Date()
    this.setState({ date: newDate.toLocaleDateString() })
    console.log(newDate.toLocaleDateString())
  }

  //添加新项目
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  //确认添加
  handleOk = (e) => {

    console.log(e);
    this.setState({
      visible: false,
    });
  }
  //取消添加
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  //翻页
  changePage = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  //确认结束项目
  confirmEnd = (e) => {
    console.log(e);
    message.success('Click on Yes');
  }
  // 确认删除项目
  confirmDelete = (e) => {
    console.log(e);
    message.success('Click on Yes');
  }
  //取消
  cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  }
  //新项目输入
  changeValue = (type, value) => {
    switch (type) {
      case 1: this.setState({ title: value }); break;
      case 2: this.setState({ origin: value }); break;
      case 3: this.setState({ originXh: value }); break;
      case 4: this.setState({ teacher: value }); break;

    }
  }
  //新项目预期结束时间
  changeTime = (date, dateString) => {
    console.log(date, dateString)
    this.setState({ endTime: dateString })
  }

  //编辑页面
  toEdit(num) {
    browserHistory.push({
      pathname: '/labcharge/item/edit',
      qurey: {
        id: num
      }
    })
  }

  showEnd = () => this.setState({ evisible: !this.state.evisible })

  ehandleOk = (e) => {
    console.log(e);
    this.setState({
      evisible: false,
    });
  }

  ehandleCancel = (e) => {
    console.log(e);
    this.setState({
      evisible: false,
    });
  }

  render() {
    const props = {
      name: 'file',
      action: '',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="itemcharge">
          <div className="item_hea">
            <h2>实验室项目管理</h2>
          </div>

          <div className="item_con">
            <Row>
              {this.state.list.map((item, i) => {
                return (
                  <Col span={12} key={i} style={{ padding: 5 }}>
                    <div className="item_box">
                      <div className="item_title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="item_box_con">
                        <div className="con_item">
                          <Row>
                            <Col span={6}>发起人：</Col>
                            <Col span={18}>{item.origin}</Col>
                          </Row>
                        </div>
                        <div className="con_item">
                          <Row>
                            <Col span={6}>指导老师：</Col>
                            <Col span={18}>{item.teacher}</Col>
                          </Row>
                        </div>
                        <div className="con_item">
                          <Row>
                            <Col span={6}>预计结束时间:</Col>
                            <Col span={18}>{item.endTime}</Col>
                          </Row>
                        </div>
                        <Row>
                          <Col span={12}></Col>
                          <Col span={4}>
                            <Button onClick={this.toEdit.bind(this, item.id)} style={{ width: '100%' }}>修改</Button>
                          </Col>
                          <Col span={4}>
                            <Button style={{ width: '100%' }} onClick={this.showEnd.bind(this)}>结束项目</Button>
                            <Modal
                              title="提交结项文档"
                              visible={this.state.evisible}
                              onOk={this.ehandleOk.bind(this)}
                              onCancel={this.ehandleCancel.bind(this)}>
                              <Upload {...props} accept='application/msword'>
                                <Button style={{ marginBottom: 20 }}>
                                  <Icon type="upload" /> 点击上传文件（word）
                                </Button>
                              </Upload>
                              <Button type='primary'>直接结项</Button>
                            </Modal>
                          </Col>
                          <Col span={4}>
                            <Popconfirm title="确定删除此项目结束吗?删除后将无法找回" onConfirm={this.confirmDelete.bind(this)} onCancel={this.cancel.bind(this)} okText="Yes" cancelText="No">
                              <Button type="danger" style={{ width: '100%' }}>删除</Button>
                            </Popconfirm>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>

          <div className="item_foot">

            {/*新增项目*/}

            <Row>
              <Col span={4}>
                <Button type='primary' onClick={this.showModal.bind(this)}>启动新项目</Button>
                <Modal
                  title="启动新项目"
                  visible={this.state.visible}
                  onOk={this.handleOk.bind(this)}
                  onCancel={this.handleCancel.bind(this)}
                >
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={5} style={{ verticalAlign: 'middle', fontSize: 14 }}>项目名称：</Col>
                    <Col span={18}><Input placeholder='请输入项目的名称' onChange={(e) => this.changeValue(1, e.target.value)}></Input></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={5} style={{ verticalAlign: 'middle', fontSize: 14 }}>发起人:</Col>
                    <Col span={18}><Input placeholder='请输入项目的发起人' onChange={(e) => this.changeValue(2, e.target.value)}></Input></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={5} style={{ verticalAlign: 'middle', fontSize: 14 }}>发起人学号:</Col>
                    <Col span={18}><Input placeholder='请输入项目的发起人学号' onChange={(e) => this.changeValue(3, e.target.value)}></Input></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={5} style={{ verticalAlign: 'middle', fontSize: 14 }}>项目指导老师：</Col>
                    <Col span={18}><Input placeholder='请输入项目的指导老师' onChange={(e) => this.changeValue(4, e.target.value)}></Input></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={7} style={{ verticalAlign: 'middle', fontSize: 14 }}>项目启动时间：</Col>
                    <Col span={16}>{this.state.date}</Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={7} style={{ verticalAlign: 'middle', fontSize: 14 }}>项目预计结束时间：</Col>
                    <Col span={16}><DatePicker onChange={this.changeTime.bind(this)}></DatePicker></Col>
                  </Row>
                </Modal>
              </Col>
              <Col span={14}></Col>
              <Col span={6}><Pagination current={this.state.current} onChange={this.changePage.bind(this)} total={50}></Pagination></Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;