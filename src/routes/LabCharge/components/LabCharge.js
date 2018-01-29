import React, { Component } from 'react';
import './LabCharge.scss'
import { Row, Col } from 'antd'
import info from '../img/信息.png'
import item from '../img/item.png'
import goods from '../img/物品管理.png'
import teacher from '../img/teacher.png'
import Detail from '../module/Detail'
import member from '../img/-_成员.png'
import achieve from '../img/成就.png'
import gonggao from '../img/公告.png'
import back from '../img/返回.png'
import Member from '../module/Member'

class LabCharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chargepage: 1, //detail
      choise: [{
        name: '基本信息',
        icon: info
      }, {
        name: '成员管理',
        icon: member
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
    console.log(type)
    switch (type) {
      case 0:
        this.setState({ chargepage: 1 }); break;
        case 1:
        this.setState({chargepage:2});break;
        case 2:
        this.setState({chargepage:3});break;
        case 3:
        this.setState({chargepage:4});break;
        case 4: 
        this.setState({chargepage:5});break;
        case 5:
        this.setState({chargepage:6});break;
        case 6:
        this.setState({chargepage:7});break;
        case 7:
        history.back();break;
    }

  }

  render() {
    const {chargepage,choise} = this.state
    return (
      <div>
        <Row>
          <Col span={5} style={{paddingRight:5}}>
            <div className="chargeside">
              <div className="choise_list">
                {choise.map((item, i) => {
                  return (
                    <div className="choise_item" key={i} onClick={this.changePage.bind(this,i)}>
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
          {chargepage==1?
            <Detail></Detail>:chargepage==2?
            <Member></Member>:''
          }
          </Col>
        </Row>
      </div>
    );
  }
}

export default LabCharge;