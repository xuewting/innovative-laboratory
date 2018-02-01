import React, { Component } from 'react';
import { Row, Col } from 'antd'
import '../css/LabGoods.scss'
import img1 from '../img/wallhaven-553316.jpg'
import img2 from '../img/wallhaven-582013.jpg'
import img3 from '../img/wallhaven-582025.jpg'
import img4 from '../img/wallhaven-590711.jpg'

class LabGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        src: img1,
        gname: '全景相机',
        xh: 'lorem',
        bh: '123',
        zt: '闲置'
      }, {
        src: img3,
        gname: '大屏显示器',
        xh: 'lorem',
        bh: '123',
        zt: '占用'
      }, {
        src: img3,
        gname: '全景相机',
        xh: 'lorem',
        bh: '123',
        zt: '闲置'
      }, {
        src: img4,
        gname: '全景相机',
        xh: 'lorem',
        bh: '123',
        zt: '闲置'
      }],
     
    }
    
  }

  
  
  render() {    
    
    return (
      <div className='goods'>
        <div className='go_head'>
          <h2>实验室物品资源</h2>
        </div>
        <div className="go_con">
          <Row>
            {this.state.list.map((item, i) => {
              return (
                <Col span={8} className='con_item hovereffect' key={i} >
                  <img src={item.src} alt="" className='img-responsive' />
                  <div className='overlay' ref={i} >
                    <h2>{item.gname}</h2>
                    <div className="info" style={{border:'1px solid #fff',borderBottom:'none'}}>{item.xh}</div>
                    <div className="info" style={{border:'1px solid #fff',borderBottom:'none',borderTop:'none'}}>{item.bh}</div>
                    <div className="info"  style={{border:'1px solid #fff',borderTop:'none'}}>{item.zt}</div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default LabGoods;