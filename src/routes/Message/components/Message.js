import React, { Component } from 'react';
import Side from '../../../components/Sidebar/Sidebar'
import {Row, Col} from 'antd'
import './Message.scss'
import img1 from '../img/wallhaven-598944.png'

class Message extends Component {
  render() {
    return (
      <div>
      <Row>
      {/*<Col span={4} style={{paddingRight:5}}>
      <Side></Side>
      </Col>*/}
        <div className="message">
          <div className="mes_list">
            <div className="mes_box">
            <Row>
            {img1?
            <Col span={6}>
              <div className="img">
              <img src={img1} alt=""/>
              </div>
              </Col>
             :null }
              <Col span={18}>
              <div className="mes_con">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <div className="contain">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Magni odit, labore delectus fuga asperiores maxime! Nam minus
                ducimus molestias labore doloremque vitae sit et sapiente ratione
                , officiis deleniti fuga placeat!</span>
              </div>
              </div>
              </Col>
              </Row>
            </div>
          </div>
        </div>
        
        </Row>
      </div>
    );
  }
}

export default Message;