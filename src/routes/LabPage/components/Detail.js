import React, { Component } from 'react';
import { Row, Col, Tooltip} from 'antd'
import img1 from '../img/人数.png'
import img2 from '../img/定位.png'
import img3 from '../img/领导.png'

class Detail extends Component {
  render() {
    return (
      <div>
        <div className="labname">
              <h1>实验室名称</h1>
            </div>
              <div className="labintor">
                <h2>简介：</h2><span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores a minus error magni officia, fugiat ducimus!
              Dignissimos accusamus quo molestias animi, dolorum qui
              perspiciatis odio quam optio quos, quis corporis.
              </span>
              </div>
              <div className="labdetail">
                <Row>
                  <Col span={8}>
                    <span><img src={img3} alt="负责老师" className="icon"/></span>
                    <span className='font'>负责教师:</span>
                  </Col>
                  <Col span={8}>
                    <span><img src={img2} alt="位置" className="icon"/></span>
                    <span className='font'>位置:</span>
                  </Col>
                  <Col span={8}>
                    <span><img src={img1} alt="人数" className="icon"/></span>
                    <span className='font'>在职人数:</span>
                  </Col>
                </Row>
              </div>
      </div>
    );
  }
}

export default Detail;