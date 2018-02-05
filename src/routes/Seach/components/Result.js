import React, { Component } from 'react';
import '../css/result.scss'
import { Row, Col, Pagination } from 'antd'

class Result extends Component {
  constructor(props) {
    super(props);
    this.state={
      current:3,
      list:[{
        title:'LOREM IPSUM DOLOR SIT AMET',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tenetur quam tempore laudantium obcaecati, placeat culpa ipsa optio illo minima est ea, laboriosam aspernatur ratione! Dignissimos dolor odio dolorem voluptatibus!',
        img:'',
        time:'17-2-3',
      },]
    }
  }

  changePage(page){
    console.log(page)
    this.setState({current:page})
  }
  
  render() {
    return (
      <div className='sea_result'>
        <Row className='rh'>
          <Col span={18}>
            <h2>SEARCH RESULT:</h2>
          </Col>
          <Col span={6}>
           <div className="page">
           <Pagination current={this.state.current} onChange={this.changePage.bind(this)} total={50}/>
           </div>
          </Col>
        </Row>

        <div className="res_con">
        {this.state.list.map((item,i)=>{
          return(
            <div className="res_item" key={i}>
              <div className="item_title">
                <h2>{item.title}</h2>
              </div>
              <div className="item_con">
                <span>{item.content}</span>
              </div>
              {/*item.img?<div className="item_img">
                <img src={item.img} alt=""/>
              </div>:''*/}
              <div className="item_time">
              time:{item.time}
              </div>
            </div>
          )
        })}
        </div>

         <Row className='rh'>
          <Col span={18}>
          </Col>
          <Col span={6}>
           <div className="page">
           <Pagination current={this.state.current} onChange={this.changePage.bind(this)} total={50}/>
           </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Result;