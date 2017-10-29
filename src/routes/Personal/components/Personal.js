import React, { Component } from 'react';
import '../scss/Personal.scss'
import {Row, Col} from 'antd'

class Personal extends Component {
  render() {
    return (
      <div style={{marginTop:200}}>
        <div className="bar">
          
          <p>个人信息</p>
          <p>所属实验室</p>
          <p>我的项目</p>
          
        </div>
      </div>
    );
  }
}

export default Personal;