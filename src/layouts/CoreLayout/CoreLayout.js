import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  render() {
    var path = this.props.location.pathname;
    var isShow = true
    if(path=='/login'||path=='/register'){
      isShow = false
    }
    return (
      <div className='body'>
        {isShow?<Header />:''}
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default CoreLayout;
