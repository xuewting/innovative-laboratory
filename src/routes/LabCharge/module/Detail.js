import React, { Component } from 'react';
import '../components/LabCharge.scss'
import { Row, Col } from 'antd'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      src: '',
      srcname:''
    }
  }

  changeFile() {
    this.refs.file.click()
  }

  //change img
  changeSrc(e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    var imgFile
    this.setState({ img: file })
    this.setState({srcname:e.target.value})

    reader.onload = (e) => {
      imgFile = e.target.result
      this.setState({ src: imgFile })
    }
    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="detail">
          <div className="head_detail">
            <h2>基本信息编辑</h2>
          </div>
          <div className="detail_con">
            <div className="upload">
              <Row>
                <Col span={12} style={{ paddingRight: 5 }}>
                  <h2>展示照片:</h2>
                  <div className="show_img">
                    <img src={this.state.src} alt="" className='img' />
                    <div className="change_img" onClick={this.changeFile.bind(this)}>
                      <Row>
                        <Col span={20}>
                          <input type="text" className='change_show' value={this.state.srcname}/>
                        </Col>
                        <Col span={4}>
                          <div className='change_but'>
                            <span>编辑图片</span>
                          </div>
                        </Col>
                      </Row>
                      <input type="file" style={{ display: 'none' }} ref='file' onChange={(e)=>this.changeSrc(e)}/>
                    </div>
                  </div>
                </Col>
                <Col span={12} style={{ paddingLeft: 5 }}>
                  <div className="detail_info">
                    div.
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;