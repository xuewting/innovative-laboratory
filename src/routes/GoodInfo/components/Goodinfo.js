import React, { Component } from 'react';
import './Goodinfo.scss'

class Goodinfo extends Component {
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
              <span className="info_con">规格：</span>
              <span className="info_con">状态：</span>
              <span className="info_con">购入价：</span>
              <span className="info_con">所属实验室：</span>
            </div>
          </div>
        </div>
        <div className="good_active">
          <div className="good_borrow">
            <div className="contanct">
            <h2>联系方式</h2>
            <div className="contanct_con">
            王同学：12345678（手机号）
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

export default Goodinfo;