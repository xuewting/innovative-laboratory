import React, { Component } from 'react';
import './LabCharge.scss'
import { Row, Col } from 'antd'
import info from '../img/信息.png'
import item from '../img/item.png'
import goods from '../img/物品管理.png'
import teacher from '../img/teacher.png'
import Detail from '../module/Detail'
import munber from '../img/-_成员.png'
import achieve from '../img/成就.png'
import gonggao from '../img/公告.png'
import back from '../img/返回.png'

class LabCharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chargepage: 0, //detail
      choise: [{
        name: '基本信息',
        icon: info
      }, {
        name: '人员管理',
        icon: munber
      },{
        name: '项目管理',
        icon: item
      },{
        name: '实验室成果及荣誉',
        icon: achieve
      }, {
        name: '物品管理',
        icon: goods
      }, {
        name: '实验室教师',
        icon: teacher
      },{
        name: '通知公告',
        icon: gonggao
      },{
        name: '返回',
        icon: back
      }],
    }
  }

  changePage(type) {
    switch (type) {
      case 1:
        this.setState({ chargepage: 1 }); break;
    }

  }

  render() {
    return (
      <div>
        <Row>
          <Col span={5} style={{paddingRight:5}}>
            <div className="chargeside">
              <div className="choise_list">
                {this.state.choise.map((item, i) => {
                  return (
                    <div className="choise_item" key={i}>
                      <div className="choise_box">
                        <span><img src={item.icon} alt="" /></span>
                        <span style={{marginLeft:10}}>{item.name}</span>
                      </div>
                    </div>
                  )
                })}
                
              </div>
            </div>
          </Col>
          <Col span={19} style={{paddingLeft:5}}>
            <Detail></Detail>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LabCharge;