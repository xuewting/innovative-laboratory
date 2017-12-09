import React, { Component } from 'react';
import { Row, Col, Radio } from 'antd'
const RadioGroup = Radio.Group;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'haha',
      idnum:123456,
      phone:123456766,
      email:'541006240@qq.com',
      sex:2,
      intor:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nam ipsum, qui iusto expedita facilis ab, eius harum sit nulla sapiente, commodi voluptas. Inventore id incidunt fuga soluta odio, fugiat?'
    }
  }

  changeValue(e,type){
    switch(type){
      case 1:
      this.setState({name:e.target.value})
      break;
      case 2:
      this.setState({idnum:e.target.value})
      break;
      case 3:
      this.setState({phone:e.target.value})
      break;
      case 4:
      this.setState({email:e.target.value})
      break;
      case 5:
      this.setState({sex:e.target.value})
      break;
      default:
      this.setState({intor:e.target.value})
    }
  }
  
  render() {
    return (
      <div className='set_con'>
        <div className="con_head">
          <h2 className="profile">个&nbsp;&nbsp;人&nbsp;&nbsp;信&nbsp;&nbsp;息</h2>
        </div>
        <div className="con_item">
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>用户名：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input type="text" className="con_inp" value={this.state.name} onChange={(e)=>this.changeValue(e,1)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>学号（教工号）：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input type="text" className="con_inp" value={this.state.idnum} onChange={(e)=>this.changeValue(e,2)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>联系电话：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input type="text" className="con_inp" value={this.state.phone} onChange={(e)=>this.changeValue(e,3)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>E-mail：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <input type="text" className="con_inp" value={this.state.email} onChange={(e)=>this.changeValue(e,4)}/>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>性别：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <RadioGroup name="radiogroup" defaultValue={this.state.sex} onChange={(e)=>this.changeValue(e,5)}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </RadioGroup>
            </Col>
          </Row>
          <Row className="from_row">
            <Col span={6} style={{ paddingLeft: 10 }}>自我介绍：</Col>
            <Col span={18} style={{ paddingLeft: 10, paddingRight: 10 }}>
              <textarea className="con_inp" rows={6} style={{ height: 'auto' }} value={this.state.intor} onChange={(e)=>this.changeValue(e,6)}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Content;