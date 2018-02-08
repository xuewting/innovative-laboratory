import React, { Component } from 'react';
import { Row, Col, Button, Pagination, Popconfirm, message, Modal, Input, DatePicker } from 'antd'
import '../css/Item.scss'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        title: 'Lorem ipsum dolor sit amet',
        time: '18-1-1',
        origin: '麦兜',
        teacher: '可达鸭',
        endTime: '18-12-12'
      }, {
        title: 'Lorem ipsum dolor sit amet',
        time: '18-1-1',
        origin: '麦兜',
        teacher: '可达鸭',
        endTime: '18-12-12'
      }, {
        title: 'Lorem ipsum dolor sit amet',
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
      date:''
    }
  }

  
  componentWillMount() {
    let newDate = new Date()
    this.setState({date:newDate.toLocaleDateString()})
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

  render() {
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="item">
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
                          <Col span={14}></Col>
                          <Col span={5}>
                            <Popconfirm title="确定此项目结束吗?结束后成员将不能再提交或修改项目进度" onConfirm={this.confirmEnd.bind(this)} onCancel={this.cancel.bind(this)} okText="Yes" cancelText="No">
                              <Button>结束项目</Button>
                            </Popconfirm>
                          </Col>
                          <Col span={5}>
                            <Popconfirm title="确定删除此项目结束吗?删除后将无法找回" onConfirm={this.confirmDelete.bind(this)} onCancel={this.cancel.bind(this)} okText="Yes" cancelText="No">
                              <Button type="danger">删除</Button>
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