import React, { Component } from 'react'
import '../components/LabCharge.scss'
import { Row, Col, Radio, message } from 'antd'
import ReactDOM from 'react-dom'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
const RadioGroup = Radio.Group

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      img: '',
      src: '',
      srcname: '',
      showfile: '',
      isopen: '',
      labInfo:{},
      chargeUser:{}
    }
  }

  changeFile () {
    this.refs.file.click()
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      isopen: e.target.value
    })
  }

  // change img
  changeSrc (e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    var imgFile
    this.setState({ img: file })
    this.setState({ srcname: e.target.value })

    reader.onload = (e) => {
      imgFile = e.target.result
      this.setState({ src: imgFile })
    }
    reader.readAsDataURL(file)
  }

  // change showfile
  changShowFile (e) {
    console.log(e.target.files)
    this.setState({ showfile: e.target.value })
  }

  showFile () {
    this.refs.showfile.click()
  }

  componentDidMount () {
    let labid = 1
    var data = `labId=${labid}`
    POST('/user/getLabInfoById', data, re => {
      if (re.state === 1) {
        console.log(re)
        this.setState({ labInfo:re.data })
        this.setState({ chargeUser:re.data.user })
      }
    })
  }
  changeValue (e, num) {
    let labInfo = this.state.labInfo
    switch (num) {
      case 1:
        labInfo.name = e.target.value
        this.setState({ labInfo:labInfo }); break
      case 2:
        labInfo.position = e.target.value
        this.setState({ labInfo:labInfo }); break
      case 3:
        labInfo.position = e.target.value
        this.setState({ labInfo:labInfo }); break
      case 4:
        labInfo.isOpen = e.target.value
        this.setState({ labInfo:labInfo }); break
      case 5:
        labInfo.introduction = e.target.value
        this.setState({ labInfo:labInfo }); break
    }
  }
  /**
   * 保存实验室信息
   */
  save () {
    let name = this.state.labInfo.name
    let establishTime = this.state.labInfo.establishTime
    let institute = this.state.labInfo.institute
    let isOpen = this.state.labInfo.isOpen
    let introduction = this.state.labInfo.introduction
    let position = this.state.labInfo.position
    let data = `name=${name}&establishTime=${establishTime}&isOpen=${isOpen}&
    institute=${institute}&introduction=${introduction}&position=${position}`
    POST('/labt/updateLabInfo', data, re => {
      if (re.state === 1) {
        message.success('更改成功')
      } else {
        message.error('发生错误，请重试')
      }
    })
  }
  render () {
    const { photo, name, introduction, isOpen, position, institute, establishTime } = this.state.labInfo
    const chargeUser = this.state.chargeUser
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className='detail'>
          <div className='head_detail'>
            <h2>基本信息编辑</h2>
          </div>
          <div className='detail_con'>
            <div className='upload'>
              <Row>
                <Col span={12} style={{ paddingRight: 5 }}>
                  {/* show photo */}
                  <h2>展示照片：</h2>
                  <div className='show_img'>
                    <img src={BASE_URL + photo} alt='' className='img' />
                    <div className='change_img' onClick={this.changeFile.bind(this)}>
                      <Row>
                        <Col span={20}>
                          <input type='text' className='change_show' value={this.state.srcname} />
                        </Col>
                        <Col span={4}>
                          <div className='change_but'>
                            <span>上传图片</span>
                          </div>
                        </Col>
                      </Row>
                      <input type='file' style={{ display: 'none' }} ref='file' accept='image/*' onChange={(e) => this.changeSrc(e)} />
                    </div>
                  </div>
                </Col>
                <Col span={12} style={{ paddingLeft: 5 }}>
                  {/* detail  info */}
                  <div className='detail_info'>
                    <div className='detail_box'>
                      <div className='det_box_in'>
                        <Row><Col span={6}>
                          <span>实验室名称：</span>
                        </Col><Col span={18}>
                          <span><input type='text'value={name}
                            onChange={e => { this.changeValue(e, 1) }} /></span>
                        </Col></Row>
                      </div>
                    </div>
                    <div className='detail_box'>
                      <div className='det_box_in'>
                        <Row><Col span={6}>
                          <span>管理老师：</span>
                        </Col><Col span={18}>
                          <span><input type='text' value={chargeUser.name} disabled /></span>
                        </Col></Row>
                      </div>
                    </div>
                    <div className='detail_box'>
                      <div className='det_box_in'>
                        <Row><Col span={6}>
                          <span>成立时间：</span>
                        </Col><Col span={18}>
                          <span><input type='text' value={chargeUser.name} /></span>
                        </Col></Row>
                      </div>
                    </div>
                    <div className='detail_box'>
                      <div className='det_box_in'>
                        <Row><Col span={6}>
                          <span>所在位置：</span>
                        </Col><Col span={18}>
                          <span><input type='text' value={position}
                            onChange={e => { this.changeValue(e, 2) }} /></span>
                        </Col></Row>
                      </div>
                    </div>
                    <div className='detail_box'>
                      <div className='det_box_in'>
                        <Row><Col span={6}>
                          <span>院系：</span>
                        </Col><Col span={18}>
                          <span><input type='text' value={institute}
                            onChange={e => { this.changeValue(e, 3) }} /></span>
                        </Col></Row>
                      </div>
                    </div><div className='detail_box'>
                      <div className='det_box_in'>
                        <Row><Col span={6}>
                          <span>是否开放：</span>
                        </Col><Col span={18}>
                          <span> <RadioGroup onChange={this.onChange.bind(this)}
                            onChange={e => { this.changeValue(e, 4) }}
                            value={isOpen}>
                            <Radio value={1}>是</Radio>
                            <Radio value={0}>否</Radio>
                          </RadioGroup></span>
                        </Col></Row>
                      </div>
                    </div>

                    <div className='detail_box'>
                      <div className='det_box_in'>
                        <Row><Col span={6}>
                          <span>展示页面：</span>
                        </Col><Col span={18}>
                          <span>上传属于本实验室的展示页面html文件</span>
                          <div className='show_but' onClick={this.showFile.bind(this)}>选择要上传的文件
                            <input type='file' style={{ display: 'none' }} ref='showfile' onChange={(e) => this.changShowFile(e)} /></div>
                          <span>{this.state.showfile}</span>
                        </Col></Row>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* edit introduce */}
            <div className='edit_detail'>
              <h2>实验室简介：</h2>
              <textarea name='' id='' cols='30' rows='15' value={introduction}
                onChange={e => { this.changeValue(e, 5) }} />
            </div>

            {/* footer */}
            <div className='detail_foot'>
              <Row>
                <Col span={12} style={{ paddingRight: 10 }}>
                  <div className='foot_but'>
                    清&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;空
              </div>
                </Col>
                <Col span={12} style={{ paddingLeft: 10 }}>
                  <div className='foot_but' onClick={() => { this.save() }}>
                    保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存
              </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail
