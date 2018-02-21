import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import pan from '../img/笔.png'
import '../css/content.scss'
import { browserHistory } from 'react-router';

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      con:''
    }
  }

  componentWillReceiveProps (nextProps, nextState) {
    this.setState({ con:nextProps.content })
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  toCheck=()=>browserHistory.push({
    pathname:'/labcharge/news'
  })

  render () {
    const { con } = this.state
    return (
      <div>
        {!con ? ''
      : <div className='mail_content'>
        <div className='mail_con_head'>
          <Row>
            <Col span={19}><h2>{con.title}</h2></Col>
            <Col span={5}><div className='mail_hea_time'>
              <img src={pan} />
              <span> {con.time}</span>
            </div>
            </Col>
          </Row>
          <div className='mail_con_from'>
            {con.From}
          </div>
        </div>
        <div className='mail_con_con'>
          {con.con}
        </div>
        {con.type==1?
          <div className="mail_but">
            <Button type='primary' style={{fontWeight:'bold',fontSize:'1em',lineHeight:'1.7em',height:'2.5em'}} onClick={this.toCheck.bind(this)}>
            前往查看详情
            </Button>            
          </div>
        :''}
      </div>
  }
      </div>
    )
  }
}

export default Content
