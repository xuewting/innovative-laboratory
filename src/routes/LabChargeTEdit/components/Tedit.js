import React, { Component } from 'react'
import Side from '../../LabCharge/components/Side'
import { Row, Col, Button, Upload, Icon, Modal, Input } from 'antd'
import './Tedit.scss'
import { browserHistory } from 'react-router'

const { TextArea } = Input

class Tedit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }],
      id: this.props.location.query.data,
      name:'',
      zc:'',
      mail:'',
      honor:'',
      shortintor:'',
      intor:'',
      tid:''
    }
    console.log(this.state.id)
  }

  // 上传图片
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  // 边框页面跳转
  chargepage (value) {
    switch (value) {
      case 0:
        browserHistory.push({
          pathname: `/labcharge/detail`
        })
        this.setState({ chargepage: '/labcharge/detail' })
        break
      case 1:
        browserHistory.push({
          pathname: `/labcharge/staff`
        })
        this.setState({ chargepage: '/labcharge/staff' })
        break
      case 2:
        browserHistory.push({
          pathname: `/labcharge/item`
        })
        this.setState({ chargepage: '/labcharge/item' })
        break
      case 3:
        browserHistory.push({
          pathname: `/labcharge/honor`
        })
        this.setState({ chargepage: '/labcharge/honor' })
        break
      case 4:
        browserHistory.push({
          pathname: `/labcharge/goods`
        })
        this.setState({ chargepage: '/labcharge/goods' })
        break
      case 5:
        browserHistory.push({
          pathname: `/labcharge/teacher`
        })
        this.setState({ chargepage: '/labcharge/teacher' })
        break
      case 6:
        browserHistory.push({
          pathname: `/labcharge/notice`
        })
        this.setState({ chargepage: '/labcharge/notice' })
        break
      case 7:
        browserHistory.push({
          pathname: `/labcharge/news`
        })
        this.setState({ chargepage: '/labcharge/news' })
        break
      case 8:
        browserHistory.push({
          pathname: '/labcharge/sgin'
        })
        this.setState({ chargepage: '/labcharge/sgin' })
        break
      case 9:
        history.back()
        break
    }
  }

  // 返回
  goBack = () => history.go(-1)

  // 修改值
  changeValue (type, value) {
    switch (type) {
      case 1:
        this.setState({ name:value }); break
      case 2:
        this.setState({ zc:value }); break
      case 3:
        this.setState({ mail:value }); break
      case 4:
        this.setState({ honor:value }); break
      case 5:
        this.setState({ shortintor:value }); break
      case 6:
        this.setState({ intor:value }); break
      case 7:
        this.setState({ tid:value }); break
      default:
        break
    }
  }

  render () {
    const { previewVisible, previewImage, fileList, name, zc, shortintor, intor, mail, honor } = this.state
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    )
    return (
      <div>
        <Row>
          <Col span={5} style={{ paddingRight: 5 }}>
            <Side chargepage={this.chargepage.bind(this)} />
          </Col>
          <Col span={19} style={{ paddingLeft: 5, paddingTop: 20, paddingRight: 15 }}>
            <div className='ed_tea'>
              <div className='tea_head'>
                <h2>老师信息编辑</h2>
              </div>
              <div className='ed_con'>
                <Row style={{ paddingBottom:20, borderBottom:'2px dashed #fff' }}>
                  <Col span={6}>
                    <div className='ed_fix'>
                      <Upload
                        action=''
                        listType='picture-card'
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                      >
                        {fileList.length >= 1 ? null : uploadButton}
                      </Upload>
                      <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt='example' style={{ width: '100%' }} src={previewImage} />
                      </Modal>
                    </div>
                  </Col>
                  <Col span={17} offset={1}>
                    <Row style={{ marginBottom: 15 }}>
                      <Col span={4} style={{ fontSize: 16, color: '#fff' }}>姓名 : </Col>
                      <Col span={15}> <Input value={name} onChange={(e) => this.changeValue(1, e.target.value)} placeholder='请输入教师姓名' style={{ fontSize:15 }} /></Col>
                    </Row>
                    <Row style={{ marginBottom: 15 }}>
                      <Col span={4} style={{ fontSize: 16, color: '#fff' }}>教师职称 : </Col>
                      <Col span={15}> <Input value={zc} onChange={(e) => this.changeValue(2, e.target.value)} placeholder='请输入教师的职称' style={{ fontSize:15 }} /></Col>
                    </Row>
                    <Row style={{ marginBottom: 15 }}>
                      <Col span={4} style={{ fontSize: 16, color: '#fff' }}>教工号 : </Col>
                      <Col span={15}> <Input value={zc} onChange={(e) => this.changeValue(7, e.target.value)} placeholder='请输入教师的教工号' style={{ fontSize: 15 }} /></Col>
                    </Row>
                    <Row style={{ marginBottom: 15 }}>
                      <Col span={4} style={{ fontSize: 16, color: '#fff' }}>邮箱 : </Col>
                      <Col span={15}> <Input value={mail} onChange={(e) => this.changeValue(3, e.target.value)} placeholder='请输入教师的邮箱' style={{ fontSize:15 }} /></Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{ marginTop:20, paddingBottom:20, borderBottom:'2px dashed #fff' }}>
                  <Col span={12} style={{ paddingRight:10 }}>
                    <h3 style={{ fontWeight:600, color:'#fff', padding:10, margin:0 }}>简介:</h3>
                    <TextArea
                      value={shortintor}
                      onChange={(e) => this.changeValue(5, e.target.value)}
                      style={{ padding:10, fontSize:15 }}
                      autosize={{ minRows: 6, maxRows: 6 }}
                      placeholder='请输入教师的简介' />
                  </Col>
                  <Col span={12} style={{ paddingLeft:10 }}>
                    <h3 style={{ fontWeight:600, color:'#fff', padding:10, margin:0 }}>荣誉:</h3>
                    <TextArea
                      value={honor}
                      onChange={(e) => this.changeValue(4, e.target.value)}
                      style={{ padding:10, fontSize:15 }}
                      autosize={{ minRows: 6, maxRows: 6 }}
                      placeholder='请输入教师的荣誉，用逗号隔开' />
                  </Col>
                </Row>

                <div style={{ paddingTop:20, marginBottom:20 }}>
                  <h3 style={{ fontWeight:600, color:'#fff', padding:10, margin:0 }}>详细介绍:</h3>
                  <TextArea
                    value={intor}
                    onChange={(e) => this.changeValue(6, e.target.value)}
                    style={{ padding:10, fontSize:15 }}
                    autosize={{ minRows: 10, maxRows: 10 }}
                    placeholder='请输入教师的详细' />
                </div>
              </div>

              <Row>
                <Col span={18} />
                <Col span={3} style={{ padding:20 }}><Button onClick={this.goBack.bind(this)} style={{ fontSize:16, width:'100%' }}>返回</Button></Col>
                <Col span={3} style={{ padding:20 }}><Button style={{ fontSize:16, width:'100%' }}>提交</Button></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tedit
