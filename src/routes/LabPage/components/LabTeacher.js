import React, { Component } from 'react';
import img1 from '../../Home/assets/wallhaven-113384.png'
import img2 from '../../Home/assets/wallhaven-590356.jpg'
import img3 from '../../Home/assets/wallhaven-590711.jpg'
import FreeScrollBar from 'react-free-scrollbar';
import '../css/LabTeacher.scss'
import { POST } from '../../../components/commonModules/POST';
import {message} from 'antd'

class LabTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img2,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img3,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img2,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img3,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }, {
        url: img1,
        name: 'lorem',
        intr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid unde enim, provident'
      }]
    }
  }

  componentWillReceiveProps(nextProps) {
    POST('/getTeacherBylabId', `labId=${nextProps.id}&pageCount=20&currentPage=1`,re=>{
      if(re.state==1){
        this.setState({list:re.data.rows});
      }else{
        message.error('服务器错误')
      }
    })  
  }
  

  render() {
    return (
      <div className='labteacher'>
        <div className="tea_head">
          <h2>常驻老师</h2>
        </div>
        <div className="tea_con">
        <FreeScrollBar className='scroll' style={{height:450}}>
          {this.state.list.map((item, i) => {
            return (
              <div className="tea_list" key={i}>
                <img src={item.url} alt="" />
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.intr}</p>
                </div>
              </div>
            )
          })}
          </FreeScrollBar>
        </div>
        <div className="tea_foot">
          <div className='more'>
            
          </div>
        </div>
      </div>
    );
  }
}

export default LabTeacher;