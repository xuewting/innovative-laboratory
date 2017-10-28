import React, { Component } from 'react';
import './Lablist.css'
import {POST1} from '../../../components/commonModules/POST'
import { Row, Col, message } from 'antd'

class Lablist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lab: [{
        img: 'wallhaven-7835.png',
        labname: 'labname',
        leader: 'leader',
        intr: 'intr'
      }, {
        img: 'wallhaven-7835.png',
        labname: 'labname',
        leader: 'leader',
        intr: 'intr'
      }, {
        img: 'wallhaven-7835.png',
        labname: 'labname',
        leader: 'leader',
        intr: 'intr'
      },{
        img: 'wallhaven-7835.png',
        labname: 'labname',
        leader: 'leader',
        intr: 'intr'
      }, {
        img: 'wallhaven-7835.png',
        labname: 'labname',
        leader: 'leader',
        intr: 'intr'
      }, ],
      page:1
    }
  }

  componentDidMount() {
    let data=`pageCount=6&currentPage=1`
    POST1('/getLab',data,(re) => {
      console.log(re)
      if(re.state==0){
        message.error('服务器错误')
      }
    })
  }

  changePage(type){
    switch(type){
      case 1:
      let page=this.state.page+1
      var data=`pageCount=6&currentPage=${page}`
      this.setState({page:page})
      break;
      case 2:
      let Page=this.state.page-1
      var data=`pageCount=6&currentPage=${Page}`
      this.setState({page:Page})
      break;
    }
    POST1('/getLab',data,(re) => {
      console.log(re)
      if(re.state==0){
        message.error('服务器错误')
      }
    })
  }
  
  render() {
    return (
      <div>
      {/*<div className='all'><a href="">所有实验室</a></div>*/}
        <Row style={{width:1450,marginLeft:'auto',marginRight:'auto',marginBottom:100}}>
          {this.state.lab.map((item, i) => {
            return (
              <Col span={8} style={{height:400}} key={i}>
                <div className='media' >
                  <img className="media__image" src={item.img} alt="" />
                  <div className="media__body">
                    <h2>{item.labname}</h2>
                    <h3>{item.leader}</h3>
                    <p>{item.intr}</p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>

        <Row style={{width:'30%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
        <Col span={8}>
        <div style={{cursor:'pointer'}} onClick={this.changePage.bind(this,2)}>
        <i className='fa fa-angle-left fa-2x' style={{marginLeft:'auto',marginRight:'auto'}}/>
        </div>
        </Col>
        <Col span={8} style={{textAlign:'center'}}>{this.state.page}</Col>
        <Col span={8}>
        <div style={{cursor:'pointer'}} onClick={this.changePage.bind(this,1)}>
        <i className='fa fa-angle-right fa-2x' style={{marginLeft:'auto',marginRight:'auto'}}/>
        </div>
        </Col>
        </Row>
      </div>
    )
  }
}

export default Lablist;