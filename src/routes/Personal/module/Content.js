import React, { Component } from 'react'
import '../css/content.scss'
import {Row,Col} from 'antd'
import {browserHistory} from 'react-router';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemlist: [{
        name: 'lorem',
        intor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem recusandae explicabo vel minima molestias aliquam quod, similique omnis animi quos cum sapiente esse quas porro doloremque placeat labore. At.',
        lab: 'D506'
      }]
    }
  }

  goBack=()=>history.back()

  goSet=()=>browserHistory.push({
    pathname:'/setting'
  })

  goCharge=()=>browserHistory.push({
    pathname:'/labcharge/detail'
  })

  render() {
    return (
      <div className='per_content'>
        <div className='per_con_intor'>
          <h2>个人简介</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta ipsa eligendi, minus a fuga autem, ipsam nam adipisci voluptate fugit officia veritatis cum facere quaerat voluptatibus velit placeat voluptatum!</span>
        </div>
        <div className='per_con_item'>
          <div className="per_ii_hea">
            <h2>参与的项目列表</h2>
          </div>
          {this.state.itemlist.length == 0 ?
            <div className="per_noitem">
              没有参与任何项目
        </div> :
            <div>
              {this.state.itemlist.map((item, i) => {
                return (
                  <div className='per_ii' key={i}>
                    <h3>{item.name}</h3><span>{item.lab}</span>
                    <div className='ii_con'>
                      {item.intor}
                    </div>
                  </div>
                )
              })
              }
            </div>}
        </div>
        <div className="per_but">
          <Row>
            <Col span={8} style={{paddingRight:5}}>
              <div className="per_but_i" onClick={this.goBack.bind(this)}>返回</div>
            </Col>
            <Col span={8} style={{ paddingRight: 5 , paddingLeft:5}}>
              <div className="per_but_i" onClick={this.goSet.bind(this)}>修改基本信息</div>
            </Col>
            <Col span={8} style={{ paddingLeft: 5 }}>
              <div className="per_but_i" onClick={this.goCharge.bind(this)}>实验室管理</div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Content
