import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd'
import img1 from '../img/wallhaven-553316.jpg'
import img2 from '../img/wallhaven-582013.jpg'
import img3 from '../img/wallhaven-582025.jpg'
import img4 from '../img/wallhaven-590711.jpg'
import '../css/LabShow.scss'
import { BASE_URL } from '../../../components/commonModules/POST'


class LabShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data:this.props.data.photo
    }
  }

  componentWillReceiveProps (nextProps) { 
    this.setState({ data: nextProps.data.photo })  
  }

  // shouldComponentUpdate() {
  //   console.log(1)
  //   return true
  // }
  render () {
    const { data } = this.state    
    console.log(data)
    return (
      <div className='labshow'>
        <div className='labhead'>
        <h2>实验室环境</h2>
      </div>
        <div className='showright'>
              <div className='carousel'>
                {/* <Carousel autoplay> */}
                <div className='carimg'><img src={BASE_URL + data} alt='img1' /></div>
                {/* </Carousel> */}
              </div>
            </div>
      </div>
    )
  }
}

export default LabShow
