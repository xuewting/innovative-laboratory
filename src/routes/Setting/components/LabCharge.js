import React, { Component } from 'react';
import { Tooltip } from 'antd'
import {browserHistory} from 'react-router'

class LabCharge extends Component {

  toCharge(){
    browserHistory.push({
      pathname:`/labcharge/detail`
    })
  }
  render() {
    return (
      <div className='labcharge'>
        <div className="charge_con" onClick={this.toCharge.bind(this)}>
            <span>D506实验室</span>
            <span>点击进入管理界面</span>
        </div>
      </div>
    );
  }
}

export default LabCharge;