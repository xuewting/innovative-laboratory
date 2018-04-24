import React, { Component } from 'react';
import {message, Row, Col } from 'antd'
import '../css/LabGoods.scss'
import img1 from '../img/wallhaven-553316.jpg'
import img2 from '../img/wallhaven-582013.jpg'
import img3 from '../img/wallhaven-582025.jpg'
import img4 from '../img/wallhaven-590711.jpg'
import { POST, BASE_URL } from '../../../components/commonModules/POST';
import { browserHistory} from 'react-router'

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
     current:1,
      id:'',
      total:''
    }
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ id: nextProps.id});
    POST('/lab/getLabGoods', `id=${nextProps.id}&pageCount=4&currentPage=${this.state.current}`, re => {
      if (re.state == 1) {
        this.setState({ list: re.data.rows,
        total:re.data.count })
      } else {
        message.error('服务器错误')
      }
    })    
  }

  getData(){
    POST('/lab/getLabGoods', `id=${this.state.id}&pageCount=4&currentPage=${this.state.current}`, re => {
      if (re.state == 1) {
        this.setState({ list: re.data.rows })
      } else {
        message.error('服务器错误')
      }
    })
  }

  //查看更多
  More(){
    if(this.state.total<=4){
      message.warn('已是全部物品')
    }else{
      this.setState({
        current: this.state.current + 1
      });
      this.getData()
    }    
  }

  toDetail(id){
    browserHistory.push({
      pathname: `/goodinfo/${id}`
    })
  }
  
  render() {    
    const {list}= this.state
    return (
      <div>
      { list.length == 0 ?<div></div>:
      <div className='goods'>
        <div className='go_head'>
          <h2>实验室物品资源</h2>
        </div>
        <div className="go_con">
          <Row>          
            {list.map((item, i) => {
              return (
                <Col span={8} className='con_item hovereffect' key={i} style={{cursor:'pointer'}} onClick={()=>this.toDetail(item.id)} >
                  <img src={ BASE_URL+item.photo } alt="" className='img-responsive' />
                  <div className='overlay' ref={i} >
                    <h2>{item.name}</h2>
                    <div className="info" style={{ border: '1px solid #fff', borderBottom: 'none' }}>{item.models}</div>
                    <div className="info" style={{ border: '1px solid #fff', borderBottom: 'none', borderTop: 'none' }}>{item.validTime}</div>
                    <div className="info" style={{ border: '1px solid #fff', borderTop: 'none' }}>{item.stateId==2?'占用':item.stateId==0?'外借':'空闲'}</div>
                  </div>
                </Col>
              )
            })}
          </Row>
          <div className='more_txt' onClick={this.More.bind(this)}>More</div>
        </div>
        </div>
      }
      </div>
    );
  }
}

export default LabGoods;