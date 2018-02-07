import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import {Row, Col} from 'antd'
import Sider from '../../components/Sidebar/Sidebar'

class CoreLayout extends React.Component {
  render() {
    var path = this.props.location.pathname;
    var isShow = true
    if(path=='/login'||path=='/register'||path=='/labcharge'||path=='/Forget'){
      isShow = false
    }
    return (
      <div className={path=='/labcharge'?'body2':'body'}>
        {isShow?<Header />:''}
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default CoreLayout;
