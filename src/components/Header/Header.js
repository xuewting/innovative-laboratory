import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import logo from './海鲜.png'
import home from './home-big.png'
import lab from './实验室编号.png'
import item from './item.png'
import goods from './物品管理.png'
// import {Row, Col} from 'antd'

class Header extends React.Component {
  render() {
    return (
      <div className='head'>
        <div className="navbar">
          <div className="nav_con">
            <span className="nav_logo">
              <a href="">
                <img src={logo} alt="" />
              </a>
            </span>
            <IndexLink to='/' activeClassName='active'>
              <span className="nav_item">
                <img src={home} alt="" />
                主页
            </span>
            </IndexLink>
            <Link activeClassName='active'>
              <span className="nav_item">
                <img src={lab} alt="" />
                实验室
            </span>
            </Link>
            <Link activeClassName='active'>
              <span className="nav_item">
                <img src={item} alt="" />
                项目
            </span>
            </Link>
            <Link activeClassName='active'>
              <span className="nav_item">
                <img src={goods} alt="" />
                物品
            </span>
            </Link>
          </div>

        {/*search*/}
        <div className="search">
        <input type="text" placeholder='search...'/>
        </div>
        </div>
      </div>
    );
  }
}

export default Header;


