import React, { Component } from 'react'
import '../css/newitem.scss'
import { Row, Col, Pagination, Tooltip } from 'antd'
import { browserHistory } from 'react-router'


class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      list:[{
        title:'Lorem ipsum dolor',
        from:'lorem',
        time:'2101-1-1'
      }, {
          title: 'Lorem ipsum dolor',
          from: 'lorem',
          time: '2101-1-1'
        }, {
          title: 'Lorem ipsum dolor',
          from: 'lorem',
          time: '2101-1-1'
        }]
    }
  }

  toDetail = () => browserHistory.push({ pathname:'/labcharge/news/newitemdetail'})
  
  render() {
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="newitem">
          <div className="newitem_head">
            <h2>新项目申请列表</h2>
          </div>
          <div className="newitem_con">
            <div className="newitem_list">
              {this.state.list.map((item,i)=>{
                return(
                  <Tooltip key={i} title='点击查看详情'>
                  <Row key={i} className='newitem_box' onClick={(e)=>this.toDetail()}>
                    <Col span={15}>
                      <span>{item.title}</span>
                      <span className="newitem_from"> {item.from}</span>
                    </Col>
                    <Col span={6} offset={3}>
                      <span className="newitem_time">{item.time}</span>
                    </Col>
                  </Row>
                  </Tooltip>
                )
              })}
            </div>
          </div>
          <div className="changepage">
            <Pagination total={10}></Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;