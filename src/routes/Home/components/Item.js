import React, { Component } from 'react';
import './Item.scss'
import { Row, Col, message } from 'antd'
import { POST1 } from '../../../components/commonModules/POST'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iList: [{
        name: 'name',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        chargeUser: 'teacher',
        startTime: '2017-1-1',
        lab:
        { name: '' }

      }, {
        name: 'name',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        chargeUser: 'teacher',
        startTime: '2017-1-1',
        lab:
        { name: '' }
      }, {
        name: 'name',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        chargeUser: 'teacher',
        startTime: '2017-1-1',
        lab:
        { name: '' }

      }, {
        name: 'name',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        chargeUser: 'teacher',
        startTime: '2017-1-1',
        lab:
        { name: '' }

      }],
      page: 1,
      total: 1,
    }
  }

  componentDidMount() {
    let data = `pageCount=4&currentPage=1`
    POST1('/getProject', data, (re) => {
      console.log(re)
      if (re.state) {
        this.setState({ iList: re.data.rows })
        this.setState({ total: re.data.count })
      } else {
        message.error('服务器错误')
      }
    })
  }

  changePage(type) {
    let max=this.state.total
    let nowpage=this.state.page
    
    switch (type) {
      case 1:
      if(nowpage==max){
        message.warn('没有再多的了')
      }else{
        let page = nowpage + 1
        var data = `pageCount=6&currentPage=${page}`
        this.setState({ page: page })
      }
        break;
      case 2:
      if(nowpage==1){
        message.warn('已是首页')
      }else{
        let Page = nowpage - 1
        var data = `pageCount=4&currentPage=${Page}`
        this.setState({ page: Page })
      }
        break;
    }
    POST1('/getProject', data, (re) => {
      console.log(re)
      if (re.state == 0) {
        message.error('服务器错误')
      }
    })
  }


  render() {
    return (
      <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 400 }}>
        <h1 className='item'>最近项目</h1>
        <div className="hr"></div>
        <Row>
          {this.state.iList.map((item, i) => {
            return (
              <Col span={12}>
                <div className="newItem" >
                  <h3 className="Iname">{item.name}</h3>
                  <div className="hr"></div>
                  <p><b>简介</b>：<br />{item.intr}</p>
                  <a href='' style={{ float: 'left' }}>负责人: {item.chargeUser} </a><a href="">实验室：{item.lab.name}</a>
                  <p>启动时间: {item.startTime}</p>
                </div>
              </Col>
            )
          })}
        </Row>

        <Row style={{ width: '30%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <Col span={8}>
            <div style={{ cursor: 'pointer' }} onClick={this.changePage.bind(this, 2)}>
              <i className='fa fa-angle-left fa-2x' style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </div>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>{this.state.page}</Col>
          <Col span={8}>
            <div style={{ cursor: 'pointer' }} onClick={this.changePage.bind(this, 1)}>
              <i className='fa fa-angle-right fa-2x' style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </div>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Item;