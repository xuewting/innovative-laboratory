import React, { Component } from 'react';
import { Tooltip } from 'antd'

class LabCharge extends Component {
  render() {
    return (
      <div className='labcharge'>
        <div className="charge_con">
            <span>D506实验室</span>
            <span>点击进入管理界面</span>
        </div>
      </div>
    );
  }
}

export default LabCharge;