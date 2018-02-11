import React, { Component } from 'react';
import '../css/goods.scss'
import { Row, Col, Button, Input, Pagination, Modal, Upload, Icon, Select } from 'antd'

const Option = Select.Option;

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
    fileList: [],
    status:'',
    name:'',
    bh:'',
    xh:'',
    zt:'',
    contact:''
    }
  }


  //img
  handleMCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {this.setState({ fileList })}


  //翻页
  changePage = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }


 //打开编辑模块
  showModal = (name,bh,xh,zt,contact) => {
    this.setState({
      visible: true,
      name:name,
      bh:bh,
      xh:xh,
      zt:zt,
      contact:contact,
    });
  }
//修改值
  changeValue(type,value){
    switch(type){
      case 1:this.setState({name:value});break;
      case 2:this.setState({bh:value});break;
      case 3:this.setState({xh:value});break;
      case 4:this.setState({contact:value});break;
    }
  }
//确认修改
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  //取消修改
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
//修改物品状态
  changeStatus(value){
    this.setState({status})
  }
//删除物品
delete(){

}
  render() {
     const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { previewVisible, previewImage, fileList, name, bh, xh, zt, contact } = this.state;
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
                          <div className="go_item_con">物品编号：{item.bh}</div>
                          <div className="go_item_con">型号：{item.xh}</div>
                          <div className="go_item_con">状态：{item.zt}</div>
                          <div className="go_item_con">联系方式：{item.contact}</div>
                          <Row>
                            <Col span={12}></Col>
                            <Col span={6}><Button onClick={this.showModal.bind(this,item.name,item.bh,item.xh,item.zt,item.contact)}>修改</Button></Col>
                            <Col span={6}><Button type='danger' onClick={this.delete.bind(this)}>删除</Button></Col>
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
              <Col span={6}><Button type='primary' onClick={this.showModal.bind(this,'','','','','')}>添加新物品</Button></Col>
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
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleMCancel.bind(this)}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
          </div>
          <Row style={{fontSize:16,marginBottom:10}}>
            <Col span={6}>物品名称：</Col>
            <Col span={18}><Input placeholder='请输入物品名称' value={name} onChange={(e)=>this.changeValue(1,e.target.value)}></Input></Col>
          </Row>
          <Row style={{fontSize:16,marginBottom:10}}>
            <Col span={6}>物品编号：</Col>
            <Col span={18}><Input placeholder='请输入物品的编号' value={bh} onChange={(e)=>this.changeValue(2,e.target.value)}></Input></Col>
          </Row>
          <Row style={{fontSize:16,marginBottom:10}}>
            <Col span={6}>型号：</Col>
            <Col span={18}><Input placeholder='请输入物品的型号' value={xh} onChange={(e)=>this.changeValue(3,e.target.value)}></Input></Col>
          </Row>
          <Row style={{fontSize:16,marginBottom:10}}>
            <Col span={6}>物品状态：</Col>
            <Col span={18}>
              <Select defaultValue={this.state.status} style={{ width: 200 }} onChange={this.changeStatus.bind(this)}>
                <Option value="空闲">空闲</Option>
                <Option value="占用">占用</Option>
                <Option value="损坏">损坏</Option>
                <Option value="外借">外借</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{fontSize:16,marginBottom:10}}>
            <Col span={6}>联系方式：</Col>
            <Col span={18}><Input placeholder='请输入联系方式' value={contact} onChange={(e)=>this.changeValue(4,e.target.value)}></Input></Col>
          </Row>        
        </Modal>        
          
      </div>

    );
  }
}

export default Goods;