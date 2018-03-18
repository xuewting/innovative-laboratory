import React, { Component } from 'react';
import { message,Row, Col, Tooltip} from 'antd'
import img1 from '../img/人数.png'
import img2 from '../img/定位.png'
import img3 from '../img/领导.png'
import img4 from '../img/学院_selected.png'
import img5 from '../img/锁 1.png'
import { POST } from '../../../components/commonModules/POST';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state={
      // id:this.props.location.query.id
    }
  }
  //获得内容
  componentWillMount() {
    let data = `labId=${this.state.id}`
    POST('/getLabById',data,re=>{
      if(re.state==1){
        
      }else{
        message.error('服务器错误')
      }
    }) 
  }  
  
  render() {
    return (
      <div style={{marginBottom:70}}>
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
                <Row >
                  <Col span={8} style={{marginBottom:20}}>
                    <span><img src={img3} alt="负责老师" className="icon"/></span>
                    <span className='font'>负责教师:</span>
                  </Col>
                  <Col span={8} style={{marginBottom:20}}>
                    <span><img src={img2} alt="位置" className="icon"/></span>
                    <span className='font'>位置:</span>
                  </Col>
                  <Col span={8} style={{marginBottom:20}}>
                    <span><img src={img1} alt="人数" className="icon"/></span>
                    <span className='font'>在职人数:</span>
                  </Col>
                  <Col span={8} style={{marginBottom:20}}>
                    <span><img src={img4} alt="学院" className="icon"/></span>
                    <span className='font'>所属学院:</span>
                  </Col>
                  <Col span={8} style={{marginBottom:20}}>
                    <span><img src={img5} alt="开放" className="icon"/></span>
                    <span className='font'>是否对外开放:</span>
                  </Col>
                </Row>
              </div>
      </div>
    );
  }
}

export default Detail;