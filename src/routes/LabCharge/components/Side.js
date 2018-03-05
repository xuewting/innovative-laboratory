import React, { Component } from 'react';
import './LabCharge.scss'
import info from '../img/信息.png'
import item from '../img/item.png'
import goods from '../img/物品管理.png'
import teacher from '../img/teacher.png'
import member from '../img/-_成员.png'
import achieve from '../img/成就.png'
import gonggao from '../img/公告.png'
import back from '../img/返回.png'
import news from '../img/最新项目.png'
import sgin from '../img/出入口.png'

import { browserHistory } from 'react-router'

class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choise: [{
        name: '基本信息',
        icon: info
      }, {
        name: '成员管理',
        icon: member
      }, {
        name: '项目管理',
        icon: item
      }, {
        name: '实验室成果及荣誉',
        icon: achieve
      }, {
        name: '物品管理',
        icon: goods
      }, {
        name: '实验室教师',
        icon: teacher
      }, {
        name: '通知公告',
        icon: gonggao
      }, {
        name: '最新待审核项目',
        icon: news
      }, {
        name: '人员出勤情况',
        icon: sgin
      }, {
        name: '返回',
        icon: back
      }]
    }
  }


  //切换管理界面
  changePage(type) {
    this.props.chargepage(type)

  }

  render() {
    return (
      <div>
        <div className="chargeside">
          <div className="choise_list">
            {this.state.choise.map((item, i) => {
              return (
                <div className="choise_item" key={i} onClick={this.changePage.bind(this, i)}>
                  <div className="choise_box">
                    <span><img src={item.icon} alt="" /></span>
                    <span style={{ marginLeft: 10 }}>{item.name}</span>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default Side;