import React, { Component } from 'react'
import '../css/goods.scss'
import { message, Row, Col, Button, Input, Pagination, Modal, Upload, Icon, Select, DatePicker } from 'antd'
import { convertFromRaw, EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { POST, BASE_URL, POSTFile } from '../../../components/commonModules/POST'
import moment from 'moment'

const Option = Select.Option

class Goods extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{
        name: 'Lorem ipsum dolor sit amet',
        price: '123421',
        models: 'w123w',
        stateId: '',
        detailInfo: '1232342',
        src: ''
      }],
      src: '',
      srcname: '',
      current: 1,
      visible: false,
      previewVisible: false,
      previewImage: '',
      fileList: [{
        url: '',
        name: 'xxx.png',
        status: 'done',
        uid: -1
      }],
      status: 1,
      name: '',
      price: '',
      models: '',
      buyTime: '',
      validTime: '',
      stateId: '',
      detailInfo: '',
      editorState: EditorState.createEmpty(),
      type: '',
      id: '',
      labId: this.props.labid,
      total: '',
      content:''
    }
  }

  // img
  handleMCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  handleChange = ({ fileList }) => { this.setState({ fileList }); this.setState({ status: 0 }) }

  // 翻页
  changePage = (page) => {
    this.setState({
      current: page
    })
    let data = `id=${this.state.labId}&pageCount=4&currentPage=${page}`
    POST('/lab/getLabGoods', data, re => {
      if (re.state == 1) {
        this.setState({
          list: re.data.rows,
          total: re.data.count
        })
      } else {
        message.error('服务器错误')
      }
    })
  }

  // 打开编辑模块
  showModal = (name, price, models, stateId, detailInfo, buyTime, validTime, id, photo, type) => {
    this.state.fileList[0].url = BASE_URL + photo
    // const { editorState } = this.state
    const contentBlock = htmlToDraft(detailInfo)
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const editorState = EditorState.createWithContent(contentState)
      this.setState({ editorState:editorState })
    }
    this.setState({
      visible: true,
      name: name,
      price: price,
      models: models,
      stateId: stateId,
      detailInfo: detailInfo,
      type: type,
      validTime: validTime,
      buyTime: buyTime,
      id: id,
      previewImage: photo,
      fileList: this.state.fileList
    })
    console.log(this.state.previewImage)
  }
  // 修改值
  changeValue (type, value) {
    switch (type) {
      case 1: this.setState({ name: value }); break
      case 2: this.setState({ price: value }); break
      case 3: this.setState({ models: value }); break
      case 4: this.setState({ buyTime: value }); break
      case 5: this.setState({ validTime: value }); break
    }
  }
  // 确认修改（添加）
  handleOk = (e) => {
    let { type } = this.state
    // 添加
    if (type == 1) {
      let { name, price, models, buyTime, stateId, validTime, content, labId } = this.state
      let data = `name=${name}&price=${price}&models=${models}&buyTime=${buyTime}&stateId=${stateId}&validTime=${validTime}&detailInfo=${content}&labId=${labId}`
      POST('/lab/addLabGoods', data, re => {
        if (re.state == 1) {
          message.success('添加成功')
          let data2 = new FormData()
          data2.append('id', id)
          data2.append('file', this.state.fileList[0].originFileObj)
          data2.append('type', 'application/octet-stream')
          POSTFile('/lab/addGoodsImage', data2, re => {
            if (re.state == 1) {
              let data = `id=${this.state.labId}&pageCount=4&currentPage=${this.state.current}`
              POST('/lab/getLabGoods', data, re => {
                if (re.state == 1) {
                  this.setState({
                    list: re.data.rows,
                    total: re.data.count
                  })
            } else {
              message.error('图片上传失败')
            }
          })                    
            } else {
              message.error('服务器错误')
            }
          })
          
        } else {
          message.error('服务器错误')
        }
      })
    } else {
      // 修改
      let { name, price, models, buyTime, stateId, validTime, content, labId, id } = this.state
      let data = `name=${name}&price=${price}&models=${models}&buyTime=${buyTime}&id=${id}&stateId=${stateId}&validTime=${validTime}&detailInfo=${content}&labId=${labId}`
      POST('/lab/AlterGoods', data, re => {
        if (re.state == 1) {
          message.success('修改成功')
          let data = `id=${this.state.labId}&pageCount=4&currentPage=${this.state.current}`
          POST('/lab/getLabGoods', data, re => {
            if (re.state == 1) {
              this.setState({
                list: re.data.rows,
                total: re.data.count
              })
            } else {
              message.error('服务器错误')
            }
          })
        } else {
          message.error('服务器错误')
        }
      })
      if (this.state.status == 0) {
        let data2 = new FormData()
        data2.append('id', id)
        data2.append('file', this.state.fileList[0].originFileObj)
        data2.append('type', 'application/octet-stream')
        POSTFile('/lab/addGoodsImage', data2, re => {
          if (re.state == 1) {

          } else {
            message.error('图片上传失败')
          }
        })
      } else {

      }
    }
    this.setState({
      visible: false
    })
  }
  // 取消修改
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  // 修改物品状态
  changeStatus (value) {
    this.setState({ stateId:value })
  }
  // 删除物品
  delete (id) {
    POST('/lab/DeleteGoods', `id=${id}`, re => {
      if (re.state == 1) {
        message.success('删除成功')
        let data = `id=${this.state.labId}&pageCount=4&currentPage=${this.state.current}`
        POST('/lab/getLabGoods', data, re => {
          if (re.state == 1) {
            this.setState({
              list: re.data.rows,
              total: re.data.count
            })
            
          } else {
            message.error('服务器错误')
          }
        })
      } else {
        message.error('服务器错误')
      }
    })
  }
// 修改物品详情
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
    this.state.content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    this.setState({ content:this.state.content })
  }

  componentWillMount () {
    const { editorState, detailInfo } = this.state
    const contentBlock = htmlToDraft(detailInfo)
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const editorState = EditorState.createWithContent(contentState)
      this.setState({ editorState })
    }
    let data = `id=${this.state.labId}&pageCount=4&currentPage=1`
    POST('/lab/getLabGoods', data, re => {
      if (re.state == 1) {
        this.setState({
          list: re.data.rows,
          total: re.data.count
        })
        console.log(re.data.rows[0].photo)
      } else {
        message.error('服务器错误')
      }
    })
  }

  // 导出物品表格
  export () {
    POST('/lab/exportGoods',`labId=${this.props.labid}`,re=>{
      if(re.state==1){
        let data = re.data
        let url = data.split("/")
        window.open(BASE_URL + '/'+url[2]+"/"+url[3])
        POST('/lab/deleteSheet', `fileName=${url[2] + "/" + url[3]}`,re=>{
          if(re.state==1){

          }else{
            message.error('服务器错误')
          }
        })        
      }else{
        message.error('服务器错误')
      }
    })
  }
  render () {
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    )
    const { previewVisible, previewImage, fileList, name, price, models, stateId, detailInfo, validTime, buyTime } = this.state    
    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className='goodscharge'>
          <div className='go_hea'>
            <h2>物品管理</h2>
          </div>
          <div className='go_con'>
            <Row>
              {this.state.list.map((item, i) => {
                return (
                  <Col span={12} style={{ padding: 5 }} key={i}>
                    <div className='go_item'>
                      <Row>
                        <Col span={10}>
                          <img src={BASE_URL + item.photo} alt='' className='go_img' />
                        </Col>
                        <Col span={14} style={{ paddingLeft: 10 }}>
                          <div className='go_item_con'>物品名称：{item.name}</div>
                          <div className='go_item_con'>物品价格：{item.price}</div>
                          <div className='go_item_con'>型号：{item.models}</div>
                          <div className='go_item_con'>状态：{item.stateId == 1 ? '空闲':item.stateId == 2 ? '占用':'外借'}</div>
                          <Row>
                            <Col span={12} />
                            <Col span={6}><Button onClick={this.showModal.bind(this, item.name, item.price, item.models, item.stateId, item.detailInfo, item.buyTime, item.validTime, item.id, item.photo, 0)} style={{ width: '100%' }}>修改</Button></Col>
                            <Col span={6}><Button type='danger' onClick={this.delete.bind(this, item.id)} style={{ width: '100%' }}>删除</Button></Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
          <div className='go_foot'>
            <Row>
              <Col span={3} style={{paddingRight:5}}><Button style={{width:'100%'}} type='primary' onClick={this.showModal.bind(this, '', '', '', '', '', '', '', '', '', 1)}>添加新物品</Button></Col>
              <Col span={3} style={{paddingLeft:5}}><Button style={{ width: '100%' }} type='primary' onClick={this.export.bind(this)}>导出表格</Button></Col>
              <Col span={12} />
              <Col span={6}><Pagination 
              current={this.state.current} 
              onChange={this.changePage.bind(this)} 
              total={this.state.total}
              pageSize={4}
              hideOnSinglePage={true} /></Col>
            </Row>
          </div>
        </div>
        <Modal
          title='编辑物品信息'
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <div className='show_img'>
            <div className='clearfix'>
              <Upload
                action=''
                listType='picture-card'
                fileList={fileList}
                onPreview={this.handlePreview.bind(this)}
                onChange={this.handleChange.bind(this)}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleMCancel.bind(this)} style={{ width: 800 }}>
                <img alt='example' style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          </div>
          <Row style={{ fontSize: 16, marginBottom: 10 }}>
            <Col span={6}>物品名称：</Col>
            <Col span={18}><Input placeholder='请输入物品名称' value={name} onChange={(e) => this.changeValue(1, e.target.value)} /></Col>
          </Row>
          <Row style={{ fontSize: 16, marginBottom: 10 }}>
            <Col span={6}>物品价格：</Col>
            <Col span={18}><Input placeholder='请输入物品的价格' value={price} onChange={(e) => this.changeValue(2, e.target.value)} /></Col>
          </Row>
          <Row style={{ fontSize: 16, marginBottom: 10 }}>
            <Col span={6}>购入时间：</Col>
            <Col span={18}>
              <DatePicker defaultValue={moment(buyTime, 'YYYY-MM-DD')} onChange={(data, dataString) => this.changeValue(4, dataString)} />
            </Col>
          </Row>
          <Row style={{ fontSize: 16, marginBottom: 10 }}>
            <Col span={6}>型号：</Col>
            <Col span={18}><Input placeholder='请输入物品的型号' value={models} onChange={(e) => this.changeValue(3, e.target.value)} /></Col>
          </Row>
          <Row style={{ fontSize: 16, marginBottom: 10 }}>
            <Col span={6}>有效时间：</Col>
            <Col span={18}><DatePicker defaultValue={moment(validTime, 'YYYY-MM-DD')} onChange={(data, dataString) => this.changeValue(5, dataString)} /></Col>
          </Row>
          <Row style={{ fontSize: 16, marginBottom: 10 }}>
            <Col span={6}>物品状态：</Col>
            <Col span={18}>
              <Select defaultValue={this.state.stateId == 1 ? '空闲' : this.state.stateId == 2 ? '占用' : '外借'} style={{ width: 200 }} onChange={this.changeStatus.bind(this)}>
                <Option value='1'>空闲</Option>
                <Option value='2'>占用</Option>
                <Option value='0'>外借</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ fontSize: 16, marginBottom: 10 }}>
            <Col span={6}>物品详情：</Col>
            <Col span={18}>
              <Editor
                editorState={this.state.editorState}
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
                onEditorStateChange={this.onEditorStateChange}
                toolbarClassName='toolbar-class'
                toolbar={{
                  options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'textAlign', 'list', 'history']
                }}
              />
            </Col>
          </Row>
        </Modal>

      </div>

    )
  }
}

export default Goods
