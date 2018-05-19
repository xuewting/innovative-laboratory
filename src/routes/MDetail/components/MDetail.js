import React, { Component } from 'react'
import { Row, Col, message,Button } from 'antd'
import { POST } from '../../../components/commonModules/POST'
import moment from 'moment'
import './MDetail.scss'

class MDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id:this.props.location.query.id,
      data:''
    }
  }

  
  componentWillMount() {
    let id = this.state.id
    POST('/searchNotice',`id=${id}`,re=>{
      if(re.state==1){
        this.setState({data:re.data});
      }else{
        message.error('服务器错误')
      }
    })
  }
  

  render () {
    const {data} = this.state
    return (
      <div>
        <div className='conbox'>
          <h2>{data.title}</h2>
          <Row>           
            <Col span={2} offset={20}><span className="time">{moment(data.time).format('YYYY-MM-DD')}</span></Col>
            <Col span={2}><span className="author">{data.user ? data.user.name:''}</span></Col>
          </Row>          
          <div className='md_con'>
          {data.content}
          </div>
          <Row>
            <Col span={3} offset={21}>
              <Button type='primary' onClick={()=>history.back()}>返 回</Button>
            </Col>
          </Row>
        </div>      
      </div>
    )
  }
}

export default MDetail
