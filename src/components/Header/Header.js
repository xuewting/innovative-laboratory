import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import { Row, Col, message } from 'antd'
import {POST1,BASE_URL} from '../commonModules/POST'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    state:0,
    headImg:'',
    id:0,
    sex:0,
    name:'',
    sid:0,
    power:0
    }
  }
  

  componentDidMount() {
    let data=''
    POST1('/user/getUserInfo',data,(re) => {
      console.log(re)
      this.setState({state:re.state})
      if(re.state==1){
        this.setState({headImg:re.data.headImg})
        this.setState({id:re.data.id})
        this.setState({sex:re.data.sex})
        this.setState({sid:re.data.sid})
        this.setState({power:re.data.power})
        this.setState({name:re.data.name})
      }else if(re.state==0){
        message.error('服务器错误')
      }else{
        message.error('未登录')
      }
    })
  }
  
  render() {
    return (
      <div>
         <div className="nav">
    <div style={{width:1400,margin:'auto'}}>
      <IndexLink to='/' activeClassName='route--active'>
        <div className="list">Home</div>
      </IndexLink>

      <img src={`${BASE_URL}${this.state.headImg}`} alt="" className="head" />
      <div className="login">
      {this.state.state==1?this.state.name:<div>
        <Link to='/login' style={{color:'white'}}>登录</Link>
        /<Link to='/register' style={{color:'white'}}>注册</Link>
        </div>
        }
      </div>
    </div>
  </div>
      </div>
    );
  }
}

export default Header;
  
  
 


