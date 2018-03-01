import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import pan from '../img/笔.png'
import '../css/content.scss'
import { browserHistory } from 'react-router'
import './Application'
import Application from './Application'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      con:{
        type:1
      }
    }
  }

  componentWillReceiveProps (nextProps, nextState) {
    this.setState({ con:nextProps.content })
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  toCheck=() => browserHistory.push({
    pathname:'/labcharge/news'
  })

  render () {
    const { con } = this.state
    return (
      <div>
        {con ? con.type == 1 ?
          <Application />
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
      </div>:''
  }
      </div>
    )
  }
}

export default Content
