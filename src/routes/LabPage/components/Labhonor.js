import React, { Component } from 'react';
import '../css/Honor.scss'
import { Row, Col, Tooltip } from 'antd'
import img1 from '../img/奖杯.png'
import img2 from '../img/论文题目.png'
import FreeScrollBar from 'react-free-scrollbar';

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
        {this.state.list.map((item,i)=>{
          return(
            <div className="honor_item" key={i}>            
              <Row>              
                <Col span={16}>{item.name}</Col>
                <Col span={4}>{item.gain}</Col>
                <Col span={4}>{item.time}</Col>                
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