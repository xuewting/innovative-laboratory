import React, { Component } from 'react';
import './Lablist.css'
import { Row, Col } from 'antd'

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
      }, ]
    }
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
      </div>
    )
  }
}

export default Lablist;