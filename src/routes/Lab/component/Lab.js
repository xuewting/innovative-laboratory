import React, { Component } from 'react';
import './Lab.scss'
import {Col, Row} from 'antd'

class Lab extends Component {

  render() {

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
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima saepe nulla sed omnis animi distinctio autem earum praesentium delectus, atque perspiciatis veritatis culpa, libero officia magnam ratione ea, sit.</h2>
      </div>

      <div className="labitem">
        <div className="imain">
          <h2 className="Name">Name</h2>
          <p className="intr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro dolores voluptatum quis asperiores rem. Rerum, id sit consequuntur ab perspiciatis quidem, earum inventore optio temporibus officia reprehenderit, aliquam quos.</p>
          <p className="start">2014-2-2</p>
          <p className="leader">leader</p>
        </div>
        <div className="i">
          <h2 className="Name">Name</h2>
          <p className="intr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro dolores voluptatum quis asperiores rem. Rerum, id sit consequuntur ab perspiciatis quidem, earum inventore optio temporibus officia reprehenderit, aliquam quos.</p>
          <p className="start">2014-2-2</p>
          <p className="leader">leader</p>
        </div>
      </div>

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

      </div >
    );
  }
}

export default Lab;