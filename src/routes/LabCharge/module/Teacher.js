import React, { Component } from 'react';
import '../css/teacher.scss'
import {browserHistory} from 'react-router'
import { Row, Col, Table, Button, Input, } from 'antd'

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        name: 'lorem',
        zc: '讲师',
        mail: '',
      }],
    }
  }

  toEdit(record){
    console.log(record)
    browserHistory.push({
      pathname:'/labcharge/teacher/edit',
      query:{
        data:record
      }
    })
  }


  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width:'33%',
    }, {
      title: '职称',
      dataIndex: 'zc',
      key: 'zc',
      width:'33%',
    }, {
      title: '邮箱',
      dataIndex: 'mail',
      key: 'mail',
      width:'33%',
      render:(text,record)=>{
        return(
          <Row>
            <Col span={12}>{text}</Col>
            <Col span={6}><Button onClick={this.toEdit.bind(this,record)}>编辑</Button></Col>
            <Col span={6}><Button type='danger'>删除</Button></Col>
          </Row>
        )
      }
    }];
    const {list}=this.state
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
            <Button type='primary' onClick={this.toEdit.bind(this,'')}><i className='fa fa-plus'></i> 添加</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Teacher;