import React, { Component } from 'react';
import './Lab.scss'
import {Col, Row} from 'antd'

class Lab extends Component {
  constructor(props) {
    super(props);
    this.state={
      ilist:[{
        iname:'Name',
        iintr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart:'2014-3-3',
        ileader:'leader',
      },{
        iname:'Name',
        iintr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart:'2014-3-3',
        ileader:'leader',
      },{
        iname:'Name',
        iintr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart:'2014-3-3',
        ileader:'leader',
      },{
        iname:'Name',
        iintr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart:'2014-3-3',
        ileader:'leader',
      },{
        iname:'Name',
        iintr:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart:'2014-3-3',
        ileader:'leader',
      },]
    }
  }
  

  render() {
    const src=['cirus(1).png','cirus(2).png','cirus(3).png','cirus(4).png']
    const src2=['cirus2 (1).png','cirus2 (3).png','cirus2 (4).png','cirus2 (5).png']
    const i1 = Math.round(Math.random() * 3)
    const i2 = Math.round(Math.random() * 3)
   

    return (
      <div>

        <div className="labhead">
          <h1 className="title">Lab Name</h1>
          <p className="position">位置：D506</p>
          <p className="isopen">开放：否</p>
        </div>

        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      <div className="labintr">
      <img src={src2[i2]} alt="" style={{width:200,height:200}}/>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima saepe nulla sed omnis animi distinctio autem earum praesentium delectus, atque perspiciatis veritatis culpa, libero officia magnam ratione ea, sit.</h2>
      </div>

      <Row className="labitem">
      <Col span={7} offset={5}>
        <div className="imain">
          <h2 className="Name">Name</h2>
          <img src={src[i1]} alt=""/>
          <p className="intr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro dolores voluptatum quis asperiores rem. Rerum, id sit consequuntur ab perspiciatis quidem, earum inventore optio temporibus officia reprehenderit, aliquam quos.</p>
          <p className="start">2014-2-2</p>
          <p className="leader">leader</p>
        </div>
         <div className="imain">
          <h2 className="Name">Name</h2>
          <img src={src[i2]} alt=""/>
          <p className="intr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro dolores voluptatum quis asperiores rem. Rerum, id sit consequuntur ab perspiciatis quidem, earum inventore optio temporibus officia reprehenderit, aliquam quos.</p>
          <p className="start">2014-2-2</p>
          <p className="leader">leader</p>
        </div>        
        </Col>
        <Col span={7}>
        <div className="i">
        {this.state.ilist.map((item,i)=>{
          return(
        <div key={i}>
          <h2 className="Name">{item.iname}</h2>
          <p className="intr">{item.iintr}</p>
          <p className="start">{item.istart}</p>
          <p className="leader">{item.ileader}</p>
          </div>
        )})}
        </div>
        </Col>
      </Row>

      <div className="things">
        <h3 className="tname">things name</h3>
        <p>tid</p>
        <p>status</p>
      </div>
      <div className="labfooter">
        <p className="charge">student</p>
        <p className="teacher"></p>
        <p className="member">现有：12</p>
      </div>
      </div>
    );
  }
}

export default Lab;