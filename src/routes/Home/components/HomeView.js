import React from 'react'
import { Row, Col, Carousel } from 'antd'
import News from './News'
import './HomeView.scss'
import Lab from './Lablist'
import Footer from './Footer'
import Item from './Item'

class HomeView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }


  render() {
    return (
      <div>
        <div className="home_head">
          <h1>创新实验室</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt, porro exercitationem. Quas harum fugiat, necessitatibus odio eos eligendi deleniti doloribus</h2>
          <button className='btn'>所有实验室</button>
          <p>MORE</p>
          <a  ><i className='fa fa-angle-double-down fa-3x'></i></a>
        </div>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 23.2" space="preserve">
          <polygon className="st0" points="0,0 300,0 150,23.2 "></polygon>
        </svg>
        <News ref='site'></News>
        <Lab></Lab>
        <Item></Item>
        <Footer></Footer>        
      </div>
    );
  }
}

export default HomeView
