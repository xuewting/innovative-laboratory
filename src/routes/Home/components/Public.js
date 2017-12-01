import React, { Component } from 'react';
import './HomeView.scss'
import shuaxin from '../assets/刷新.png'

class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'17-12-1'
      }, {
        tit: 'lorem',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        time:'17-12-1'
      },]
    }
  }

  render() {
    return (
      <div className='public'>
        <div className="pub_head">
          <h2>最新公告</h2>
          <div className="head_panel">
            <img src={shuaxin} alt="" />
          </div>
        </div>

        {this.state.list.map((item, i) => {
          return (
            <div className="pub_item" key={i}>
              <div className="time">{item.time}</div>
              <a href="">{item.tit}</a>
              <p>{item.con}</p>
            </div>
          )
        })}

        <div className="foot">
        <a href="">More...</a>
        </div>
      </div>
    );
  }
}

export default Public;