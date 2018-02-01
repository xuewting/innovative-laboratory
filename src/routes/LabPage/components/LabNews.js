import React, { Component } from 'react';
import '../css/LabNews.scss'
import shuaxin from '../../Home/assets/刷新.png'
import { Row, Col, Tooltip } from 'antd'

class LabNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time: '17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time: '17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time: '17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time: '17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time: '17-12-1'
      },]
    }
  }

  render() {
    return (
      <div className='labnews'>
        <div className="pub_head">
          <Row>
            <Col span={20}>
              <h2>最新公告</h2>
            </Col>
            <Col span={4}>
              <div className="head_panel">
                <Tooltip title='刷新'>
                  <img src={shuaxin} alt="" />
                </Tooltip>
              </div>
            </Col>
          </Row>
        </div>

        {this.state.list.map((item, i) => {
          return (
            <div className="pub_item" key={i}>
              <div className="time">{item.time}</div>
              <a href="">{item.tit}</a>
              <p>{item.con}</p>
            </div>
          )
        })}

        <div className="foot">
          <a href="" ></a>
        </div>
      </div>
    );
  }
}

export default LabNews;