import React, { Component } from 'react'
import FreeScrollBar from 'react-free-scrollbar'
import { Row, Col } from 'antd'
import '../css/scroll.scss'
import mark from '../img/star.png'

class Scroll extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[{
        From: 'lorem',
        title:'Lorem ipsum, dolor',
        time:'12-1-1',
        to:'me',
        intor:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam ipsum ea, tenetur dolor exercitationem minima aperiam, autem totam ut natus iste animi minus voluptates perferendis laborum odit porro. Quo.',
        con:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis officiis fugiat expedita sint excepturi architecto atque earum repudiandae nam reprehenderit dolorem inventore, ducimus voluptatem vero. Quos, culpa! Ipsa, harum.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut a eos quisquam. Laboriosam deleniti at, ex provident beatae et rerum dolorum labore, velit accusantium ab maiores placeat reprehenderit modi.'
      }, {
        From: 'lorem',
        title: 'Lorem ipsum, dolor',
        time: '12-1-1',
        to: 'me',
        intor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam ipsum ea, tenetur dolor exercitationem minima aperiam, autem totam ut natus iste animi minus voluptates perferendis laborum odit porro. Quo.',
        con: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis officiis fugiat expedita sint excepturi architecto atque earum repudiandae nam reprehenderit dolorem inventore, ducimus voluptatem vero. Quos, culpa! Ipsa, harum.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut a eos quisquam. Laboriosam deleniti at, ex provident beatae et rerum dolorum labore, velit accusantium ab maiores placeat reprehenderit modi.'
      }, {
        From: 'lorem',
        title: 'Lorem ipsum, dolor',
        time: '12-1-1',
        to: 'me',
        intor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam ipsum ea, tenetur dolor exercitationem minima aperiam, autem totam ut natus iste animi minus voluptates perferendis laborum odit porro. Quo.',
        con: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis officiis fugiat expedita sint excepturi architecto atque earum repudiandae nam reprehenderit dolorem inventore, ducimus voluptatem vero. Quos, culpa! Ipsa, harum.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut a eos quisquam. Laboriosam deleniti at, ex provident beatae et rerum dolorum labore, velit accusantium ab maiores placeat reprehenderit modi.'
      }, {
        From: 'lorem',
        title: 'Lorem ipsum, dolor',
        time: '12-1-1',
        to: 'me',
        intor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam ipsum ea, tenetur dolor exercitationem minima aperiam, autem totam ut natus iste animi minus voluptates perferendis laborum odit porro. Quo.',
        con: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis officiis fugiat expedita sint excepturi architecto atque earum repudiandae nam reprehenderit dolorem inventore, ducimus voluptatem vero. Quos, culpa! Ipsa, harum.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut a eos quisquam. Laboriosam deleniti at, ex provident beatae et rerum dolorum labore, velit accusantium ab maiores placeat reprehenderit modi.'
      }, {
        From: 'lorem',
        title: 'Lorem ipsum, dolor',
        time: '12-1-1',
        to: 'me',
        intor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam ipsum ea, tenetur dolor exercitationem minima aperiam, autem totam ut natus iste animi minus voluptates perferendis laborum odit porro. Quo.',
        con: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis officiis fugiat expedita sint excepturi architecto atque earum repudiandae nam reprehenderit dolorem inventore, ducimus voluptatem vero. Quos, culpa! Ipsa, harum.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut a eos quisquam. Laboriosam deleniti at, ex provident beatae et rerum dolorum labore, velit accusantium ab maiores placeat reprehenderit modi.'
      }, {
        From: 'lorem',
        title: 'Lorem ipsum, dolor',
        time: '12-1-1',
        to: 'me',
        intor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam ipsum ea, tenetur dolor exercitationem minima aperiam, autem totam ut natus iste animi minus voluptates perferendis laborum odit porro. Quo.',
        con: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis officiis fugiat expedita sint excepturi architecto atque earum repudiandae nam reprehenderit dolorem inventore, ducimus voluptatem vero. Quos, culpa! Ipsa, harum.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut a eos quisquam. Laboriosam deleniti at, ex provident beatae et rerum dolorum labore, velit accusantium ab maiores placeat reprehenderit modi.'
      }, {
        From: 'lorem',
        title: 'Lorem ipsum, dolor',
        time: '12-1-1',
        to: 'me',
        intor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam ipsum ea, tenetur dolor exercitationem minima aperiam, autem totam ut natus iste animi minus voluptates perferendis laborum odit porro. Quo.',
        con: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis officiis fugiat expedita sint excepturi architecto atque earum repudiandae nam reprehenderit dolorem inventore, ducimus voluptatem vero. Quos, culpa! Ipsa, harum.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut a eos quisquam. Laboriosam deleniti at, ex provident beatae et rerum dolorum labore, velit accusantium ab maiores placeat reprehenderit modi.'
      }],
      active:-1
    }
  }

  active=(num, item) => {
    this.setState({ active:num })
    this.props.changeContent(item)
  }
  render () {
    const style1 = {
      background:'rgba(255,255,255,0.1)'
    }
    const style2 = {
      color:'#fff'
    }
    const mark1 = {
      display:'inline-block',
      width:'80%',
      padding:5
    }
    const mark2 = {
      display: 'none'
    }
    return (
      <div style={{ marginBottom:20 }}>
        <FreeScrollBar style={{ height:625, padding:10 }}>
          {this.state.list.map((item, i) => {
            return (
              <div className='mail_scroll_item' key={i} style={this.state.active == i ? style1 : style2} onClick={this.active.bind(this, i, item)}>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1}>
                    <img src={mark} alt='' style={this.state.active == i ? mark1 : mark2} />
                  </Col>
                  <Col span={19}><div className='mail_item_from'>{item.From}</div></Col>
                  <Col span={4}><div className='mail_item_time'>{item.time}</div></Col>
                </Row>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1} />
                  <Col span={19}><div className='mail_item_to'>To: {item.to}</div></Col>
                </Row>
                <Row style={{ marginBottom:15 }}>
                  <Col span={1} />
                  <Col span={22}><div className='mail_item_intor'>{item.intor}</div></Col>
                </Row>
              </div>
            )
          })}
        </FreeScrollBar>
      </div>
    )
  }
}

export default Scroll
