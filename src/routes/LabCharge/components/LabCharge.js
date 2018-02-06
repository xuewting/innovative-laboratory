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
import { browserHistory } from 'react-router'

class LabCharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chargepage: this.props.location.pathname, //detail
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
        name: '返回',
        icon: back
      }],
    }
  }

  changePage(type) {
    console.log(type)
    switch (type) {
      case 0:
        browserHistory.push({
          pathname: `/labcharge/detail`
        })
        this.setState({ chargepage: '/labcharge/detail' }); break;
      case 1:
        browserHistory.push({
          pathname: `/labcharge/staff`
        })
        this.setState({ chargepage: '/labcharge/staff' }); break;
      case 2:
        browserHistory.push({
          pathname: `/labcharge/item`
        })
        this.setState({ chargepage: '/labcharge/item' }); break;
      case 3:
        browserHistory.push({
          pathname: `/labcharge/honor`
        })
        this.setState({ chargepage: '/labcharge/honor' }); break;
      case 4:
        browserHistory.push({
          pathname: `/labcharge/goods`
        })
        this.setState({ chargepage: '/labcharge/goods' }); break;
      case 5:
        browserHistory.push({
          pathname: `/labcharge/teacher`
        })
        this.setState({ chargepage: '/labcharge/teacher' }); break;
      case 6:
        browserHistory.push({
          pathname: `/labcharge/notice`
        })
        this.setState({ chargepage: '/labcharge/notice' }); break;
      case 7:
        browserHistory.push({
          pathname: `/setting`
        }); break;
    }

  }

  render() {
    const { chargepage, choise } = this.state
    return (
      <div>
        <Row>
          <Col span={5} style={{ paddingRight: 5 }}>
            <div className="chargeside">
              <div className="choise_list">
                {choise.map((item, i) => {
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
          </Col>
          <Col span={19} style={{ paddingLeft: 5 }}>
            {chargepage == '/labcharge/detail' ?
              <Detail></Detail> : chargepage == '/labcharge/staff' ?
                <Member></Member> : ''
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default LabCharge;