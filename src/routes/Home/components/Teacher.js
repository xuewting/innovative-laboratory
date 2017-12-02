import React, { Component } from 'react';
import './HomeView.scss'
import img1 from '../assets/wallhaven-113384.png'
import img2 from '../assets/wallhaven-590356.jpg'
import img3 from '../assets/wallhaven-590711.jpg'

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img2,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img3,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img2,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img3,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }]
    }
  }

  render() {
    return (
      <div className='teacher'>
        <div className="tea_head">
          <h2>常驻老师</h2>
        </div>
        <div className="tea_con">
          {this.state.list.map((item, i) => {
            return (
              <div className="tea_list" key={i}>
                <img src={item.url} alt="" />
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.intr}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="tea_foot">
          <div className='more'>
            More...
          </div>
        </div>
      </div>
    );
  }
}

export default Teacher;