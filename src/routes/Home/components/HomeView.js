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
          <h1>移动互联软件技术实验室</h1>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室建于2014年，是在西安市“国家级软件外包服务基地”建设需要以及
          西安文理学院专业和科学建设需要的大背景下，依托西安文理学院和中国软件国际有限
          公司在移动互联网技术及软件开发方面的科技实力，进行严学研结合的校级重点实验室。
          实验室现有面积90余平米，移动互联软件开发实验设备齐全，办公设施完善。实验室注重校企合作
          与人才培养，围绕国家战略需求和地方经济产业特色优势，积极开展严学研和成果转化，打造移动
          互联网软件开发应用型人才，从而促进行业技术进步，服务地方经济和社会发展。</h2>
          <button className='btn'>实验室详情</button>
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
