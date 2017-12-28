import React, { Component } from 'react';
import './Tinfo.scss'

class TeacherInfo extends Component {
   goBack(){
    history.back()
  }
  render() {
    return (
      <div>
        <div className="good_info">
          <div className="good_info_head">
            <div className="good_info_img">
              <img src="" alt="" />
            </div>
            <div className="good_info_con">
              <h2>good name</h2>
              <span className="info_con">型号：</span>
              <span className="info_con">职称：</span>
              <span className="info_con">邮箱：</span>
              <span className="info_con">所属实验室：</span>
            </div>
          </div>
        </div>
        <div className="good_active">
          <div className="good_borrow">
            <div className="contanct">
            <h2>详细介绍</h2>
            <div className="contanct_con">
            （简介，荣誉，科研成果等）
            </div>
            </div>
          </div>
        </div>
        <div className="good_foot">
        <div className="set" onClick={this.goBack.bind(this)}>
            <i className='fa fa-sign-out'></i> 返回
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherInfo;