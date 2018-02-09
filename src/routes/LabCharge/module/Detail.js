import React, { Component } from 'react';
import '../components/LabCharge.scss'
import { Row, Col, Radio } from 'antd'
import ReactDOM from 'react-dom'

const RadioGroup = Radio.Group;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      src: '',
      srcname: '',
      showfile: '',
      isopen: ''
    }
  }

  changeFile() {
    this.refs.file.click()
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      isopen: e.target.value,
    });
  }

  //change img
  changeSrc(e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    var imgFile
    this.setState({ img: file })
    this.setState({ srcname: e.target.value })

    reader.onload = (e) => {
      imgFile = e.target.result
      this.setState({ src: imgFile })
    }
    reader.readAsDataURL(file);
  }

  //change showfile
  changShowFile(e) {
    console.log(e.target.files)
    this.setState({ showfile: e.target.value })
  }

  showFile() {
    this.refs.showfile.click()
  }

  componentDidMount() {
    // var input = ReactDOM.findDOMNode(this.refs.showfile)
    // input.setAttribute('webkitdirectory', '')
    // input.setAttribute('directory', '')
    // input.setAttribute('multiple', '')
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
                  {/*show photo*/}
                  <h2>展示照片：</h2>
                  <div className="show_img">
                    <img src={this.state.src} alt="" className='img' />
                    <div className="change_img" onClick={this.changeFile.bind(this)}>
                      <Row>
                        <Col span={20}>
                          <input type="text" className='change_show' value={this.state.srcname} />
                        </Col>
                        <Col span={4}>
                          <div className='change_but'>
                            <span>上传图片</span>
                          </div>
                        </Col>
                      </Row>
                      <input type="file" style={{ display: 'none' }} ref='file' accept="image/*" onChange={(e) => this.changeSrc(e)} />
                    </div>
                  </div>
                </Col>
                <Col span={12} style={{ paddingLeft: 5 }}>
                  {/*detail  info*/}
                  <div className="detail_info">
                    <div className="detail_box">
                      <div className="det_box_in">
                        <Row><Col span={6}>
                          <span>实验室名称：</span>
                        </Col><Col span={18}>
                            <span><input type="text" /></span>
                          </Col></Row>
                      </div>
                    </div>
                    <div className="detail_box">
                      <div className="det_box_in">
                        <Row><Col span={6}>
                          <span>所在位置：</span>
                        </Col><Col span={18}>
                            <span><input type="text" /></span>
                          </Col></Row>
                      </div>
                    </div>
                    <div className="detail_box">
                      <div className="det_box_in">
                        <Row><Col span={6}>
                          <span>管理老师：</span>
                        </Col><Col span={18}>
                            <span><input type="text" /></span>
                          </Col></Row>
                      </div>
                    </div>
                    <div className="detail_box">
                      <div className="det_box_in">
                        <Row><Col span={6}>
                          <span>院系：</span>
                        </Col><Col span={18}>
                            <span><input type="text" /></span>
                          </Col></Row>
                      </div>
                    </div><div className="detail_box">
                      <div className="det_box_in">
                        <Row><Col span={6}>
                          <span>是否开放：</span>
                        </Col><Col span={18}>
                            <span> <RadioGroup onChange={this.onChange.bind(this)} value={this.state.isopen}>
                              <Radio value={1}>是</Radio>
                              <Radio value={2}>否</Radio>
                            </RadioGroup></span>
                          </Col></Row>
                      </div>
                    </div>

                    <div className="detail_box">
                      <div className="det_box_in">
                        <Row><Col span={6}>
                          <span>展示页面：</span>
                        </Col><Col span={18}>
                            <span>上传属于本实验室的展示页面html文件</span>
                            <div className="show_but" onClick={this.showFile.bind(this)}>选择要上传的文件
                            <input type="file" style={{ display: 'none' }} ref='showfile' onChange={(e) => this.changShowFile(e)} /></div>
                            <span>{this.state.showfile}</span>
                          </Col></Row>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/*edit introduce*/}
            <div className="edit_detail">
              <h2>实验室简介：</h2>
              <textarea name="" id="" cols="30" rows="15" placeholder='请输入实验室的简介'>
              </textarea>
            </div>

            {/*footer*/}
            <div className="detail_foot">
              <Row>
                <Col span={12} style={{ paddingRight: 10 }}>
                  <div className="foot_but">
                    清&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;空
              </div>
                </Col>
                <Col span={12} style={{ paddingLeft: 10 }}>
                  <div className="foot_but">
                    保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存
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