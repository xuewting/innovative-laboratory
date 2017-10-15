import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'


export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header style={{ minWidth: 1500 }} />   
      <div  className='core-layout__viewport' style={{ minWidth: 1500 }}>
        {children} 
      </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
