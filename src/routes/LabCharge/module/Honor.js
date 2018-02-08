import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'antd'
import '../css/honor.scss'

class Honor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comList: [{
        title: 'Lorem ipsum dolor sit amet',
        class: '',
        reward: '',
        students: '',
        teacher: '',
        time: '',
      }, {
        title: 'Lorem ipsum dolor sit amet',
        class: '',
        reward: '',
        students: '',
        teacher: '',
        time: '',
      }, {
        title: 'Lorem ipsum dolor sit amet',
        class: '',
        reward: '',
        students: '',
        teacher: '',
        time: '',
      },],
      paList: [{
        title: 'Lorem ipsum dolor sit amet',
        magazine: '',
        author: '',
        time: ''
      }, {
        title: 'Lorem ipsum dolor sit amet',
        magazine: '',
        author: '',
        time: ''
      }, {
        title: 'Lorem ipsum dolor sit amet,lorem',
        magazine: '',
        author: '',
        time: ''
      },],

    }
  }

  render() {
    const columns1 = [{
      title: '名称',
      dataIndex: 'title',
      key: 'title',
      width:'25%'
      // render: text => <a href="#">{text}</a>,
    }, {
      title: '级别',
      dataIndex: 'class',
      key: 'class',
      width:'10%'
    }, {
      title: '获得成果',
      dataIndex: 'reward',
      key: 'reward',
      width:'20%'
    }, {
      title: '参与学生',
      dataIndex: 'students',
      key: 'students',
      width:'20%'
    }, {
      title: '指导老师',
      dataIndex: 'teacher',
      key: 'teacher',
      width:'15%'
    }, {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width:'10%'
    }];

    const columns2 = [{
      title: '论文标题',
      dataIndex: 'title',
      key: 'title',
      width:'25%',
      // render: text => <a href="#">{text}</a>,
    }, {
      title: '期刊',
      dataIndex: 'magazine',
      key: 'magazine',
      width:'25%'
    }, {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      width:'25%'
    }, {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width:'25%'
    }];

    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="honor">
          <div className="ho_hea">
            <h2>实验室成果及荣誉</h2>
          </div>
          <div className="ho_con">
            <div className="competition" style={{marginBottom:20}}>
              <div className="com_hea">
                <h3>竞赛成果</h3>
              </div>
              <div className="com_con">
                <Table columns={columns1} dataSource={this.state.comList} />
              </div>
              <div className="com_foot">
                <Button type='primary'><i className='fa fa-plus'></i> 添加</Button>
              </div>
            </div>
            <div className="paper">
              <div className="pa_hea">
                <h3>论文发表</h3>
              </div>
              <div className="pa_con">
                <Table columns={columns2} dataSource={this.state.paList} />
              </div>
              <div className="pa_foot">
                <Button type='primary'><i className='fa fa-plus'></i> 添加</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Honor;