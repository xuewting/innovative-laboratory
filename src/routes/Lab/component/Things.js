import React, { Component } from 'react';
import './Things.scss'
import {
  Table,
  Input,
  Button,
  Col,
  Row,
} from 'antd'

class Things extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tlist: [{
        tid: '123',
        tname: 'lorem',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: 'lorem',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: 'lorem2',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: '你',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: '你好',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: 'lorem',
        model: '123456',
        state: 'yes',
      },],
      backup: [{
        tid: '123',
        tname: 'lorem',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: 'lorem',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: 'lorem2',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: '你',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: '你好',
        model: '123456',
        state: 'yes',
      }, {
        tid: '123',
        tname: 'lorem',
        model: '123456',
        state: 'yes',
      },],
    }
  }

  onSearch(value){
    var back=this.state.backup
    this.setState({tlist:back})

   var s = value

    var New = s.split('')

    if(value){
    let newList = this.state.tlist.filter((arr) => {
      let Name = arr.tname.split('')
      let n = 0
      for (let i = 0; i < New.length; i ++){
       
        for (let j = 0; j < Name.length; j ++){
          
          if (New[i] == Name[j])
          {
            n++
          }
        }
      }

      if(n >= New.length){
        return arr
      }
    })
    this.setState({tlist:newList});
    }
  }

  render() {
    return (
      <div>
        <div className="things">

          <div className="search">
            <Input placeholder='输入查询的物品名称' onChange={(e)=>this.onSearch(e.target.value)}></Input> 
            <img src="search.png" alt=""/>
          </div>

          <Row className='title'>
            <Col span={6} style={{textAlign:'center'}}>编号</Col>
            <Col span={6} style={{textAlign:'center'}}>名称</Col>
            <Col span={6} style={{textAlign:'center'}}>型号</Col>
            <Col span={6} style={{textAlign:'center'}}>是否借出</Col>
          </Row>

          {this.state.tlist.map((item, i) => {

            return (
              <div className='tlist' key={i}>
                <Row>
                  <Col className='table' span={6} style={{textAlign:'center'}}>{item.tid}</Col>
                  <Col className='table' span={6} style={{textAlign:'center'}}>{item.tname}</Col>
                  <Col className='table' span={6} style={{textAlign:'center'}}>{item.model}</Col>
                  <Col className='table' span={6} style={{textAlign:'center'}}>{item.state}</Col>
                </Row>
              </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default Things;