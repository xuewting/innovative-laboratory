import React, { Component } from 'react';
import { Row, Col } from 'antd'
import LabShow from './LabShow'
import LabGoods from './LabGoods'
import LabTeacher from './LabTeacher'
import LabNews from './LabNews'
import LabItem from './LabItem'
import Detail from './Detail'
import Honor from './Labhonor'
import '../css/LabPage.scss'
  import { POST } from '../../../components/commonModules/POST'

class LabPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:this.props.location.query.id,
      data:''
    }
  }

  //获得基本信息
  componentWillMount() {
    let data = `labId=${this.state.id}`
    POST('/getLabById', data, re => {
      if (re.state == 1) {
        this.setState({data:re.data});
      } else {
        message.error('服务器错误')
      }
    }) 
  }
  
  
  render() {
    const { id, data } = this.state
    return (
      <div>
        <div className="labpage">
          <Row>
            <Col span={12} style={{ paddingRight: 5 }}>
              <Detail id={id} data={data}></Detail>
              <LabGoods id={id} ></LabGoods>
              <Honor id={id} ></Honor>
              <LabItem id={id}></LabItem>
              
            </Col>
            <Col span={12} style={{ paddingLeft: 5 }}>
              <LabShow id={id} data={data}></LabShow>     
              <LabNews id={id} data={data}></LabNews>
              <LabTeacher id={id} data={data}></LabTeacher>
              
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LabPage;