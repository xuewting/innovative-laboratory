import React, { Component } from 'react';
import '../css/teacher.scss'
import { browserHistory } from 'react-router'
import { Row, Col, Table, Button, Input, message, Modal } from 'antd'
import { POST } from '../../../components/commonModules/POST';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        name: 'lorem',
        zc: '讲师',
        mail: '',
        id: '1'
      }],
      visible: false,
      name: '',
      sid: '',
    }
  }

  
  componentWillMount() {
    this.getTeacher()
  }
  

  //获取实验室老师
  getTeacher() {
    POST('/labt/getLabTeacher', `labId=${this.props.labid}`, re => {
      if (re.state == 1) {
        this.setState({ list: re.data })
      } else {
        message.error('服务器错误')
      }
    })
  }

  //添加实验室老师
  showModal() {
    this.setState({ visible: !this.state.visible })
  }

  // 确认添加
  handleOk = (e) => {
    let name = this.state.name
    let sid = this.state.sid
    let labid = this.props.labid
    let data = `name=${name}&sid=${sid}&labId=${labid}`
    if (name==''||sid==''){
      message.error('请确认信息都已填入并无误')
    }else{
      POST('/labt/addLabTeacher', data, re => {
        if (re.state == 1) {
          message.success('添加成功')
          this.getTeacher()
        } else if (re.state == -2) {
          message.success('该用户不存在，请确认信息')
        } else {
          message.success('服务器错误')
        }
      })

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

  //编辑信息
  changeValue(type, value) {
    switch (type) {
      case 1: this.setState({ name: value }); break
      case 2: this.setState({ sid: value }); break
    }
  }

  //删除实验室老师
  deleteT(id){
    POST('/labt/delLabTeacher',`id=${id}`,re=>{
      if(re.state==1){
        message.success('删除成功')
        this.getTeacher()
      }else{
        message.error('服务器错误')
      }
    })
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '33%',
    }, {
      title: '教工号',
      dataIndex: 'sid',
      key: 'sid',
      width: '33%',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: '33%',
      render: (text, record) => {
        return (
          <Row>
            <Col span={12}>{text}</Col>
            <Col span={6}><Button type='danger' onClick={this.deleteT.bind(this,record.id)}>删除</Button></Col>
          </Row>
        )
      }
    }];
    const { list } = this.state
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="teachercharge">
          <div className="tea_hea">
            <h2>实验室老师管理</h2>
          </div>
          <div className="tea_con">
            <Table columns={columns} dataSource={list} />
          </div>
          <div className="tea_foot">
            <Button type='primary' onClick={this.showModal.bind(this)}><i className='fa fa-plus'></i> 添加</Button>
          </div>
        </div>
        <Modal
          title='添加实验室老师'
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
                placeholder='请输入老师姓名' />
            </Col></Row>
          <Row><Col span={4}>
            <h4>教工号：</h4>
          </Col>
            <Col span={20}>
              <Input
                value={this.state.sid}
                style={{ padding: 10, marginBottom: 10 }}
                onChange={(e) => this.changeValue(2, e.target.value)}
                placeholder='请输入老师教工号' />
            </Col></Row>
        </Modal>
      </div>
    );
  }
}

export default Teacher;