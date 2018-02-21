import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Scroll from './Scroll'
import Content from './Content'

class Mail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      con:''
    }
  }

  changeContent=(value) => this.setState({ con:value });

  render () {
    return (
      <div>
        <Row>
          <Col span={12} style={{ paddingRight:5 }}>
            <Scroll changeContent={this.changeContent.bind(this)} />
          </Col>
          <Col span={12} style={{ paddingLeft:5 }}>
            <Content content={this.state.con} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Mail
