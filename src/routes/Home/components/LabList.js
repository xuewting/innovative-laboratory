import React, { Component } from 'react';
import './HomeView.scss'
import img1 from '../assets/wallhaven-113384.png'
import img2 from '../assets/wallhaven-590356.jpg'
import img3 from '../assets/wallhaven-590711.jpg'
import pos from '../assets/positioning.png'
import people from '../assets/people_.png'
import arrow from '../assets/arrow drop down.png'
import sea from '../assets/search.png'

class LabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lablist: [{
        name: '实验室',
        img:img1
      }, {
        name: '实验室',
        img:img2
      }, {
        name: '实验室',
        img:img3
      }, {
        name: '实验室',
        img:img2
      }, {
        name: '实验室',
        img:img1
      }],
      Img:img1
    }
  }

  changeImg(i){
    this.setState({Img:this.state.lablist[i].img})
  }

  render() {
    return (
      <div className='lablist'>

        <div className="display">
          <h2>Lab Name</h2>

          <div className="panel">
            <a href="">
              <img src={this.state.Img} alt="" />
            </a>
          </div>

          <div className="text">
            <div className="pos_box">
              <img src={pos} alt="" className="icon" />
              <span className='num'>D0506</span>
              <span className="what">position</span>
            </div>
            <div className="peo_box">
              <img src={people} alt="" className="icon" />
              <span className='num'>12</span>
              <span className="what">people</span>
            </div>
          </div>
        </div>

        <div className="lab_list">
          <div className="list_tit">
            实验室列表
          </div>
          {this.state.lablist.map((item, i) => {
            return (
              <div className='list_item' key={i} onMouseOver={this.changeImg.bind(this,i)}>
                <div className="list_text">
                  <strong>{item.name}</strong>
                  <img src={arrow} alt="" style={{ float: 'right', height: 20, display: 'inline-block' }} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="search">
          <div className="search_in">
            <input type="text" placeholder='查找实验室' />
            <div className="sea_icon">
              <img src={sea} alt="" className="icon" />
            </div>
          </div>
          <div className="more">
          More
          </div>
        </div>
      </div>
    );
  }
}

export default LabList;