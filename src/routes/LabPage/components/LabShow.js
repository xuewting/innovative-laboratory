import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd'
import img1 from '../img/wallhaven-553316.jpg'
import img2 from '../img/wallhaven-582013.jpg'
import img3 from '../img/wallhaven-582025.jpg'
import img4 from '../img/wallhaven-590711.jpg'
import '../css/LabShow.scss'

class LabShow extends Component {
  render() {
    return (
      <div className='labshow'>
      <div className="labhead">
        <h2>实验室环境</h2>
      </div>
            <div className="showright">
              <div className="carousel">
                <Carousel autoplay>
                  <div className="carimg"><img src={img3} alt="img1"/></div>
                  <div className="carimg"><img src={img2} alt="img2"/></div>
                  <div className="carimg"><img src={img3} alt="img3"/></div>
                  <div className="carimg"><img src={img4} alt="img4"/></div>
                </Carousel>
              </div>
           </div> 
      </div>
    );
  }
}

export default LabShow;