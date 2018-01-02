import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import logo from './海鲜.png'
import home from './home-big.png'
import lab from './实验室编号.png'
import item from './item.png'
import goods from './物品管理.png'
import teacher from './teacher.png'
import { Menu, Dropdown, Icon } from 'antd';
import search from './search.png'
// import {Row, Col} from 'antd'

const menuitem = (
  <Menu>
    <Menu.Item style={{background:'#333',fontSize:14}}>
      <Link to='/ItemPage' style={{color:'#fff',fontWeight:600,textAlign:'center'}}>项目列表</Link>
    </Menu.Item>
    <Menu.Item style={{background:'#333',fontSize:14}}>
      <Link to='/ProjectResult' style={{color:'#fff',fontWeight:600,textAlign:'center'}}>成果列表</Link>
    </Menu.Item>

  </Menu>
);

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
            <Link activeClassName='active' to='/Lab'>
              <span className="nav_item">
                <img src={lab} alt="" />
                实验室
            </span>
            </Link>
            <Dropdown overlay={menuitem} placement="bottomCenter">
            {/*<Link activeClassName='active' to='/ItemPage'>*/}
              <span className="nav_item">
                <img src={item} alt="" />
                项目
            </span>
            {/*</Link>*/}
            </Dropdown>
            <Link activeClassName='active' to='/Goods'>
              <span className="nav_item">
                <img src={goods} alt="" />
                物品
            </span>
            </Link>
             <Link activeClassName='active' to='/Teacher'>
              <span className="nav_item">
                <img src={teacher} alt="" />
                教师
            </span>
            </Link>
          </div>

        {/*search*/}
        <div className="search">
        <input type="text" placeholder='search...'/>
        <div className="sea_icon">
          <img src={search} alt=""/>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Header;


