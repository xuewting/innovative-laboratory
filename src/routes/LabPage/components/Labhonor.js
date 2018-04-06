import React, { Component } from 'react';
import '../css/Honor.scss'
import {message, Row, Col, Tooltip } from 'antd'
import img1 from '../img/奖杯.png'
import img2 from '../img/论文题目.png'
import FreeScrollBar from 'react-free-scrollbar';
import { POST } from '../../../components/commonModules/POST';

class LabHonor extends Component {
  constructor(props) {
    super(props);
    this.state={
      hj:[{
        name:'比赛名称',
        gain:'成果',
        time:'18-1-1'
      },{
        name:'比赛名称',
        gain:'成果',
        time:'18-1-1'
      },{
        name:'比赛名称',
        gain:'成果',
        time:'18-1-1'
      },],
      lw:[{
        name:'论文名',
        time:'18-2-1'
      },{
        name:'论文名',
        time:'18-2-1'
      },{
        name:'论文名',
        time:'18-2-1'
      },],
      list:'',
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    //项目 0
    POST('/getLabGlory', `labId=${nextProps.id}&type=0`, re => {
      if (re.state == 1) {
        this.setState({ hj: re.data.rows, list: re.data.rows})
      } else {
        message.error('服务器错误')
      }
    })
    POST('/getLabGlory', `labId=${nextProps.id}&type=1`, re => {
      if (re.state == 1) {
        this.setState({ lw: re.data.rows })
      } else {
        message.error('服务器错误')
      }
    })    
  }

  componentWillMount() {
    this.setState({list:this.state.hj})
  }

  changeList(type){
    if (type==1){
      this.setState({list:this.state.hj})
    }else if(type==2){
      this.setState({list:this.state.lw})
    }
  }
  
  
  render() {
    const {list} = this.state
    return (
      <div className='labhonor'>
        <div className="change">
          <Row style={{marginBottom:10}}>
          <Tooltip title='点击查看竞赛获奖情况'>
            <Col span={12} className='imgbox' onClick={this.changeList.bind(this,1)} >
              <img src={img1} alt=""/>
            </Col>
            </Tooltip>
            <Tooltip title='点击查看论文发表情况'>
            <Col span={12} className='imgbox' onClick={this.changeList.bind(this,2)} >
              <img src={img2} alt=""/>
            </Col>
            </Tooltip>
          </Row>
        </div>
        <div className="honor_con">
        <FreeScrollBar className='scroll' style={{height:200}}>
        {list.length==0? <div>暂无数据</div>:list.map((item,i)=>{
          return(
            <div className="honor_item" key={i} > 
              <Row>              
                <Col span={15}>{item.name}</Col>
                <Col span={3}>{item.result}</Col>
                <Col span={3}>{item.magazine}</Col>
                <Col span={3}>{item.winTime}</Col>                
              </Row>             
            </div>
          )
        })}
        </FreeScrollBar>
        </div>
      </div>
    );
  }
}

export default LabHonor;