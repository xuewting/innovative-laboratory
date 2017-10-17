import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import { Row, Col } from 'antd'

export const Header = () => (
  <div className="nav">
    <div style={{width:1400,margin:'auto'}}>
      <IndexLink to='/' activeClassName='route--active'>
        <div className="list">Home</div>
      </IndexLink>

      <img src="wallhaven-7835.png" alt="" className="head" />
      <div className="login">
        <Link to='/login' style={{color:'white'}}>登录</Link>
        /<Link to='/register' style={{color:'white'}}>注册</Link>
      </div>
    </div>
  </div>

)

export default Header
