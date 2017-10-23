import React, { Component } from 'react'
import './News.scss'
import { Row, Col } from 'antd'

export default class Elapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newList: [{
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto doloremque quam, molestias harum cupiditate rerum odit ipsam, quos earum repellendus ut dolorem amet asperiores',
        time: '2017-1-1',
        publish: 'user'
      }, {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto doloremque quam, molestias harum cupiditate rerum odit ipsam, quos earum repellendus ut dolorem amet asperiores',
        time: '2017-1-1',
        publish: 'user'
      }, {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto doloremque quam, molestias harum cupiditate rerum odit ipsam, quos earum repellendus ut dolorem amet asperiores',
        time: '2017-1-1',
        publish: 'user'
      }, {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto doloremque quam, molestias harum cupiditate rerum odit ipsam, quos earum repellendus ut dolorem amet asperiores',
        time: '2017-1-1',
        publish: 'user'
      },],
      nstate: -1,
    }
  }

  showAll(num) {
    this.setState({ nstate: num })
  }

  render() {
    const { newList } = this.state
    const style = {

    }
    return (
      <div className='News'>
        {newList.map((item, i) => {
          return (
            <div key={i}>
              {this.state.nstate == i ?
                <div className='List' key={i} style={{ maxHeight: 5000 }}>
                  <p className="content2" >{item.content}</p>
                  <Row>
                    <Col span={2} >
                      <p className='time'>{item.time}</p>
                    </Col>
                    <Col span={1} offset={10} style={{ paddingTop: 5 }} className='show_all'>
                      <i className="fa fa-angle-up fa-2x" onClick={this.showAll.bind(this, -1)}></i>
                    </Col>
                    <Col span={2} offset={9} style={{ paddingTop: 15 }}>
                      <a href="" className="publish">{item.publish}</a>
                    </Col>
                  </Row>
                </div>
                :
                <div className='List' key={i}>
                  <p className="content">{item.content}</p>
                  <Row>
                    <Col span={2} >
                      <p className='time'>{item.time}</p>
                    </Col>
                    <Col span={1} offset={10} style={{ paddingTop: 5 }} className='show_all'>
                      <i className="fa fa-angle-down fa-2x" onClick={this.showAll.bind(this, i)}></i>
                    </Col>
                    <Col span={2} offset={9} style={{ paddingTop: 15 }}>
                      <a href="" className="publish">{item.publish}</a>
                    </Col>
                  </Row>
                </div>
              }
            </div>
          )
        })}
        <ul class="bg-bubbles">
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
      </div>

    )
  }
}

