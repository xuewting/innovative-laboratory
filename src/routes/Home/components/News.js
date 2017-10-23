import React, { Component, PropTypes } from 'react';
import { Carousel, Row, Col } from 'antd'
import './News.css'
// import '../../skrollr'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new:[{
        title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel non ipsum odio tempore aperiam itaque saepe, inventore, ad in doloribus hic minima impedit repudiandae facere quasi obcaecati cum similique.',
        time:''
      },{
        title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel non ipsum odio tempore aperiam itaque saepe, inventore, ad in doloribus hic minima impedit repudiandae facere quasi obcaecati cum similique.',
        time:''
      },{
        title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel non ipsum odio tempore aperiam itaque saepe, inventore, ad in doloribus hic minima impedit repudiandae facere quasi obcaecati cum similique.',
        time:''
      },{
        title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel non ipsum odio tempore aperiam itaque saepe, inventore, ad in doloribus hic minima impedit repudiandae facere quasi obcaecati cum similique.',
        time:''
      }]
    }
  }
  render() {
    return (
      <div>
        <div className="news">
          <Row>
            <Col span={5}><h1>最新消息</h1></Col>
            <Col span={3} offset={16} style={{marginTop:40}}><a href="/news" className='more'>更多</a></Col>
          </Row>
          <div className="list" >
            <Carousel autoplay vertical>
            {this.state.new.map((item,i)=>{
              return(
                <div key={i} style={{height:360}}>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              )
            })}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

News.propTypes = {

};

export default News;