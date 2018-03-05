import React, { Component } from 'react'
import '../css/lablist.scss'
import { Row, Col } from 'antd'
import Lab from '../module/Lab'
import Mumber from '../module/Mumber'

class LabList extends Component {
  constructor(props) {
    super(props)
    this.state={
      state:1
    }
  }

  changePage=(page)=>{
    if(page==1){
      this.setState({state:1});
    }else{
      this.setState({state:2});
    }
  }
  
  render() {
    return (
      <div>
        <div className="lablist_root">
          <div className="lablist_root_nav">
            <Row>
              <Col span={4}>
                <div className="lablist_nav_item" onClick={(e)=>this.changePage(1)}>
                  <h2>实验室列表</h2>
                </div>
              </Col>
              <Col span={4}>
                <div className="lablist_nav_item" onClick={(e) => this.changePage(2)}>
                  <h2>成员列表</h2>
                </div>
              </Col>
            </Row>
          </div>

          <div className="lablist_root_con">
            {this.state.state==1?<Lab></Lab>: <Mumber></Mumber>}
          </div>
        </div>
      </div>
    );
  }
}

export default LabList;