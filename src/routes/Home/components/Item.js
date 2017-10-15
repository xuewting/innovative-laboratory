import React, { Component } from 'react';
import './Item.scss'
import {Row,Col} from 'antd'

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
      }]
    }
  }
  render() {
    return (
      <div style={{width:'50%',marginLeft:'auto',marginRight:'auto',marginBottom:400}}>
        <h1 className='item'>最近项目</h1>
        <div className="hr"></div>
        <Row>
        {this.state.iList.map((item,i)=>{return(
          <Col span={12}>
        <div className="newItem">
          <h3 className="Iname">{item.name}</h3>
          <div className="hr"></div>
          <p><b>简介</b>：<br />{item.intr}</p>
          <a href='' style={{float:'left'}}>负责人: {item.charge} </a><a href="">实验室：{item.lab}</a>
          <p>启动时间: {item.stime}</p>
        </div>
        </Col>
        )})}
        </Row>
      </div>
    );
  }
}

export default Item;