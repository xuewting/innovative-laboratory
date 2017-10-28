import React, { Component } from 'react';
import './Item.scss'
import {Row,Col,message} from 'antd'
import {POST1} from '../../../components/commonModules/POST'
import '../../skrollr.min'

class Item extends Component {
  constructor(props){
    super(props);
    this.state={
      iList:[{
        name:'name',
        intr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        charge:'teacher',
        stime:'2017-1-1',
        lab:'d506'
      },{
        name:'name',
        intr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        charge:'teacher',
        stime:'2017-1-1',
        lab:'d506'
      },{
        name:'name',
        intr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        charge:'teacher',
        stime:'2017-1-1',
        lab:'d506'
      },{
        name:'name',
        intr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam, nulla. Quo earum reiciendis alias doloremque exercitationem repudiandae, expedita. Aliquam autem similique, alias aliquid rerum repellat delectus labore enim assumenda.',
        charge:'teacher',
        stime:'2017-1-1',
        lab:'d506'
      }],
      page:1
    }
  }
  
   componentDidMount() {
    let data=`pageCount=4&currentPage=1`
    POST1('/getProject',data,(re) => {
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
      var data=`pageCount=4&currentPage=${Page}`
      this.setState({page:Page})
      break;
    }
    POST1('/getProject',data,(re) => {
      console.log(re)
      if(re.state==0){
        message.error('服务器错误')
      }
    })
  }
  
   
  render() {
    return (
      <div style={{width:'50%',marginLeft:'auto',marginRight:'auto',marginBottom:400}}>
        <h1 className='item'>最近项目</h1>
        <div className="hr"></div>
        <Row>
        {this.state.iList.map((item,i)=>{return(
          <Col span={12}>
        <div className="newItem" >
          <h3 className="Iname">{item.name}</h3>
          <div className="hr"></div>
          <p><b>简介</b>：<br />{item.intr}</p>
          <a href='' style={{float:'left'}}>负责人: {item.charge} </a><a href="">实验室：{item.lab}</a>
          <p>启动时间: {item.stime}</p>
        </div>
        </Col>
        )})}
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
    );
  }
}

export default Item;