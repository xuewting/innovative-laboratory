import React, { Component } from 'react';
import '../css/goods.scss'
import { Row, Col, Button, Input, Pagination, Modal, Upload, Icon, } from 'antd'

class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        name: 'Lorem ipsum dolor sit amet',
        bh: '123421',
        xh: 'w123w',
        zt: '',
        contact: '1232342',
        src: ''
      }, {
        name: 'Lorem ipsum dolor sit amet',
        bh: '123421',
        xh: 'w123w',
        zt: '',
        contact: '1232342',
        src: ''
      }, {
        name: 'Lorem ipsum dolor sit amet',
        bh: '123421',
        xh: 'w123w',
        zt: '',
        contact: '1232342',
        src: ''
      },],
      src: '',
      srcname: '',
      current: '',
      visible: false,
      previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
    }
  }

  handleMCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })


  //翻页
  changePage = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  changeFile() {
    this.refs.file.click()
  }

 
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render() {
     const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { previewVisible, previewImage, fileList } = this.state;
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className="goodscharge">
          <div className="go_hea">
            <h2>物品管理</h2>
          </div>
          <div className="go_con">
            <Row>
              {this.state.list.map((item, i) => {
                return (
                  <Col span={12} style={{ padding: 5 }} key={i}>
                    <div className="go_item">
                      <Row>
                        <Col span={10}>
                          <img src={item.src} alt="" className="go_img" />
                        </Col>
                        <Col span={14} style={{ paddingLeft: 10 }}>
                          <div className="go_item_con">物品名称：{item.name}</div>
                          <div className="go_item_con">物品标号：{item.bh}</div>
                          <div className="go_item_con">型号：{item.xh}</div>
                          <div className="go_item_con">状态：{item.zt}</div>
                          <div className="go_item_con">联系方式：{item.contact}</div>
                          <Row>
                            <Col span={12}></Col>
                            <Col span={6}><Button>修改</Button></Col>
                            <Col span={6}><Button type='danger'>删除</Button></Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
          <div className="go_foot">
            <Row>
              <Col span={6}><Button type='primary' onClick={this.showModal.bind(this)}>添加新物品</Button></Col>
              <Col span={12}></Col>
              <Col span={6}><Pagination current={this.state.current} onChange={this.changePage.bind(this)} total={50}></Pagination></Col>
            </Row>
          </div>
        </div>
        <Modal
          title="编辑物品信息"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <div className="show_img">
           <div className="clearfix">
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview.bind(this)}
          onChange={this.handleChange.bind(this)}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleMCancel.bind(this)}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
          </div>
        </Modal>
      </div>

    );
  }
}

export default Goods;