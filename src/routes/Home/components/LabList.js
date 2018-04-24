import React, { Component } from 'react';
import './HomeView.scss'
import img1 from '../assets/wallhaven-113384.png'
import img2 from '../assets/wallhaven-590356.jpg'
import img3 from '../assets/wallhaven-590711.jpg'
import pos from '../assets/positioning.png'
import open from '../assets/开放时间.png'
import arrow from '../assets/arrow drop down.png'
import sea from '../assets/search.png'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
import { message } from 'antd'
import { browserHistory } from 'react-router'

class LabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lablist: [{
        name: '实验室',
        img: img1,
        pos: 'D505',
        per: 12
      }, {
        name: '实验室',
        img: img2,
        pos: 'D504',
        per: 12
      }, {
        name: '实验室',
        img: img3,
        pos: 'D509',
        per: 12
      }, {
        name: '实验室',
        img: img2,
        pos: 'D508',
        per: 12
      }, {
        name: '实验室',
        img: img1,
        pos: 'D507',
        per: 12
      }],
      Img: img1,
      Pos: 'D506',
      Per: 13,
      name: 'Lab',
      page: 1,
    }
  }


  componentWillMount() {
    var data = `pageCount=5&currentPage=1`
    POST('/getLab', data, (re) => {
      if (re.state == 1) {
        this.setState({ lablist: re.data.rows,
          Img: re.data.rows[0].photo,
          Pos: re.data.rows[0].position,
        })
          if(re.data.rows[0].isOpen==0){
            this.setState({Per:'否'})
          }else{
            this.setState({Per:'是'})
          }
      } else {
        message.error('服务器错误')
      }
    })
  }

  more() {
    this.setState({ page: this.state.page + 1 })
    var data = `pageCount=5&currentPage=${this.state.page + 1}`
    POST('/getLab', data, (re) => {
      if (re.state == 1) {
        if (re.data.rows.length!=0) {
          this.setState({ lablist: re.data.rows })
        } else {
          message.warn('没有跟多的实验室了')
          let data1 = `pageCount=5&currentPage=1`
          POST('/getLab', data1, (re) => {
            if (re.state == 1) {
              this.setState({ lablist: re.data.rows })
            } else {
              message.error('服务器错误')
            }
          })
        }
      } else {
        message.error('服务器错误')
      }
    })
  }


  changeImg(i) {
    this.setState({ Img: this.state.lablist[i].photo })
    if (this.state.lablist[i].isOpen == 0) {
      this.setState({ Per: '否' })
    } else {
      this.setState({ Per: '是' })
    }
    this.setState({ Pos: this.state.lablist[i].position })
    this.setState({ name: this.state.lablist[i].name })
  }
  //跳转实验室页面
  toLab(id){
    browserHistory.push({
      pathname: `/labpage`,
      query: {
        id: id
      }
    })
  }
  render() {
    console.log(this.state.lablist)
    return (
      <div className='lablist'>

        <div className="display">
          <h2>{this.state.name}</h2>

          <div className="panel">
            <a href="">
              <img src={this.state.Img?`${BASE_URL}${this.state.Img}`:img1} alt="" />
            </a>
          </div>

          <div className="text">
            <div className="pos_box">
              <img src={pos} alt="" className="icon" />
              <span className='num'>{this.state.Pos}</span>
              <span className="what">position</span>
            </div>
            <div className="peo_box">
              <img src={open} alt="" className="icon" />
              <span className='num'>{this.state.Per}</span>
              <span className="what">isOpen</span>
            </div>
          </div>
        </div>

        <div className="lab_list">
          <div className="list_tit">
            实验室列表
          </div>
          {this.state.lablist.map((item, i) => {
            return (
              <div className='list_item' key={i} onMouseOver={this.changeImg.bind(this, i)} onClick={(e)=>this.toLab(item.id)}>
                <div className="list_text">
                  <strong>{item.name}</strong>
                  <img src={arrow} alt="" style={{ float: 'right', height: 20, display: 'inline-block' }} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="search">
          {/* <div className="search_in">
            <input type="text" placeholder='查找实验室' />
            <div className="sea_icon">
              <img src={sea} alt="" className="icon" />
            </div>
          </div> */}
          <div className="more" onClick={this.more.bind(this)}>
            More
          </div>
        </div>
      </div>
    );
  }
}

export default LabList;