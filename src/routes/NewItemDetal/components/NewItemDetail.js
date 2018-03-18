import React, { Component } from 'react'
import Side from '../../LabCharge/components/Side'
import { browserHistory } from 'react-router'
import { Row, Col, Modal, Button, Input } from 'antd'
import '../css/newitemdetail.scss'
import draftToHtml from 'draftjs-to-html'
import { convertToRaw } from 'draft-js'

class NewItemDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      munber:[{
        name:'lorem',
        id:123445
      }],
      value: '<p>Hey this <strong>editor</strong> rocks </p>' ,
      visible: false
    }
  }
//确认同意模块
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
  
  componentDidMount() {
    var { value } = this.state
    this.refs.html.innerHTML = value
  }
  

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
          pathname: `/setting`
        }); break
    }
  }

  // 返回
  goBack = () => history.go(-1)

  render () {
    return (
      <div>
        <Row>
          <Col span={5} style={{ paddingRight: 5 }}>
            <Side chargepage={this.chargepage.bind(this)} />
          </Col>
          <Col span={19} style={{ paddingLeft: 5, paddingTop: 20, paddingRight: 15 }}>
            <div className='new_item_detail'>

              <div className='new_item_title'>
                <h2>Lorem ipsum dolor sit</h2>
              </div>

              <div className='new_item_info'>
                <Row>
                  <Col span={12}>
                    <div className='item_info_item'>
                      发起人：
                    </div>
                    <div className='item_info_item'>
                      学号：
                    </div>
                    <div className='item_info_item'>
                      联系方式：
                    </div>
                    <div className='item_info_item'>
                      指导老师：
                    </div>
                  </Col>
                  <Col span={12}>
                    <Row className='item_info_mun'>
                      <Col span={4}>
                        成员：
                      </Col>
                      <Col span={20} >
                        {this.state.munber.map((item, i) => {
                        return (
                          <Row key={i} style={{marginBottom:10}}>
                            <Col span={12}>
                            <span>{item.name}</span>
                          </Col>
                            <Col span={12}>
                              <span>{item.id}</span>
                            </Col>
                          </Row>
                        )
                      })}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>           

              <div className="new_item_details">
                <h3>设备需求：</h3>
                <div className="item_details_con">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ullam, doloremque suscipit unde eligendi nobis sed consequuntur! Error, dolor a consequatur necessitatibus nobis dignissimos dolores deserunt doloremque ex explicabo saepe.
                </div>
              </div>                        
              <div className="new_item_details">
                <h3>项目详情文件下载：</h3>
                <div className="doc_con">
                  <a href="" className="doc_link">点击下载</a>
                </div>
              </div>

              <Row className="new_item_but">
                <Col span={8} style={{paddingRight:5}}>
                  <div className="new_item_btu" onClick={(e)=>this.showModal()}>
                    通&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过
                  </div>
                </Col>
                <Modal
                  title='请确认指导老师信息'
                  visible={this.state.visible}
                  onOk={this.handleOk.bind(this)}
                  onCancel={this.handleCancel.bind(this)}
                >
                 <Row style={{marginBottom:15}}>
                  <Col span={4}>姓名：</Col>
                  <Col span={15}>
                    <Input></Input>
                  </Col>
                 </Row>
                  <Row style={{ marginBottom: 15 }}>
                    <Col span={4}>教工号：</Col>
                    <Col span={15}>
                      <Input></Input>
                    </Col>
                  </Row>
                </Modal>
                <Col span={8} style={{paddingLeft:5,paddingRight:5}}>
                  <div className="new_item_btu">
                    拒&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;绝
                  </div>
                  
                </Col>
                <Col span={8} style={{paddingLeft:5}}>
                  <div className="new_item_btu" onClick={this.goBack.bind(this)}>
                    返&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回
                  </div>                  
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewItemDetail
