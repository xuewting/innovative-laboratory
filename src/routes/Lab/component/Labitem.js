import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './Lab.scss'

const src = ['cirus(1).png', 'cirus(2).png', 'cirus(3).png', 'cirus(4).png']

class Labitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ilist: [{
        iname: 'Name',
        iintr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart: '2014-3-3',
        ileader: 'leader',
      }, {
        iname: 'Name',
        iintr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart: '2014-3-3',
        ileader: 'leader',
      }, {
        iname: 'Name',
        iintr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart: '2014-3-3',
        ileader: 'leader',
      }, {
        iname: 'Name',
        iintr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart: '2014-3-3',
        ileader: 'leader',
      }, {
        iname: 'Name',
        iintr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        istart: '2014-3-3',
        ileader: 'leader',
      },],
      i1:1,
      i2:1,
    }
  }

  
  componentWillMount() {
    var i1 = Math.round(Math.random() * 3)
    var i2 = Math.round(Math.random() * 3)
    while (i1 == i2){
      i2 = Math.round(Math.random() * 3)
    }
    this.setState({i1:i1})
    this.setState({i2:i2})
  }
  


  render() {

    const {i1,i2}=this.state

    return (
      <div>

        <Row className="labitem">

      {/*最新项目*/}
      
          <Col span={7} offset={5}>
            <div className="imain">
              <h2 className="Name">Name</h2>
              <img src={src[i1]} alt="" />
              <p className="intr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro dolores voluptatum quis asperiores rem. Rerum, id sit consequuntur ab perspiciatis quidem, earum inventore optio temporibus officia reprehenderit, aliquam quos.</p>
              <p className="start">2014-2-2</p>
              <p className="leader">leader</p>
            </div>
            <div className="imain">
              <h2 className="Name">Name</h2>
              <img src={src[i2]} alt="" />
              <p className="intr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, porro dolores voluptatum quis asperiores rem. Rerum, id sit consequuntur ab perspiciatis quidem, earum inventore optio temporibus officia reprehenderit, aliquam quos.</p>
              <p className="start">2014-2-2</p>
              <p className="leader">leader</p>
            </div>
          </Col>

        {/*项目列表*/}
        
          <Col span={7}>
            <div className="i">
              {this.state.ilist.map((item, i) => {
                return (
                  <div key={i}>
                    <h2 className="Name">{item.iname}</h2>
                    <p className="intr">{item.iintr}</p>
                    <p className="start">{item.istart}</p>
                    <p className="leader">{item.ileader}</p>
                  </div>
                )
              })}
            </div>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Labitem;