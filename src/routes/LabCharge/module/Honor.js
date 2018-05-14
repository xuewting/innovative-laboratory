import React, { Component } from 'react'
import { Row, Col, Table, Button, Modal, Input, Select, DatePicker, message } from 'antd'
import '../css/honor.scss'
import moment from 'moment'
import { POST } from '../../../components/commonModules/POST'

const Option = Select.Option
const dateFormat = 'YYYY-MM-DD'
const dateNow = new Date()
class Honor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comList: [{
        title: 'Lorem ipsum dolor sit amet',
        class: '',
        reward: '',
        students: '',
        teacher: '',
        time: '2012-1-1'
      } ],
      paList: [{
        title: 'Lorem ipsum dolor sit amet',
        magazine: '',
        author: '',
        time: ''
      } ],
      visible1: false,
      visible: false,
      cclass: '',
      ctime: dateNow,
      ptime: dateNow,
      ctitle: '',
      reward: '',
      students: '',
      teacher: '',
      ptitle: '',
      author: '',
      magazine: '',
      typeP: '',
      typeC: ''
    }
  }

  // 获取成果
  componentWillMount () {
    POST('/labt/getLabGlory', `labId=${this.props.labid}&type=0`, re => {
      if (re.state == 1) {
        this.setState({ comList: re.data.rows })
      } else {
        message.error('服务器错误')
      }
    })
    POST('/labt/getLabGlory', `labId=${this.props.labid}&type=1`, re => {
      if (re.state == 1) {
        this.setState({ paList: re.data.rows })
      } else {
        message.error('服务器错误')
      }
    })
  }

  // 打开论文模块
  showPaperModal = (ptitle, magazine, author, ptime, type) => {
    this.setState({
      visible1: true,
      ptitle: ptitle,
      magazine: magazine,
      author: author,
      ptime: ptime,
      typeP: type
    })
  }
  // 确认修改/提交（论文）
  handlePOk = (e) => {
    let { typeP } = this.state
    if (typeP == 1) {      
      // 修改
      let name = this.state.ptitle
      let author = this.state.author
      let labid = this.props.labid
      let winTime = this.state.ptime
      let magazine = this.state.magazine      
      let data = `name=${name}&author=${author}&labId=${labid}&winTime=${winTime}&magazine=${magazine}&type=1`
      POST('/labt/updateLabGlory', data, re => {
        if (re.state == 1) {
          message.success('修改成功')
          POST('/labt/getLabGlory', `labId=${this.props.labid}&type=1`, re => {
            if (re.state == 1) {
              this.setState({ paList: re.data.rows })
            } else {
              message.error('服务器错误')
            }
          })
        } else {
          message.error('服务器错误')
        }
      })
    } else {
      let name = this.state.ptitle
      let author = this.state.author
      let labid = this.props.labid
      let winTime = this.state.ptime
      let magazine = this.state.magazine
      console.log(winTime)
      let data = `name=${name}&author=${author}&labId=${labid}&winTime=${winTime}&magazine=${magazine}&type=1`
      POST('/labt/addLabGlory', data, re => {
        if (re.state == 1) {
          message.success('上传成功')
          POST('/labt/getLabGlory', `labId=${this.props.labid}&type=1`, re => {
            if (re.state == 1) {
              this.setState({ paList: re.data.rows })
            } else {
              message.error('服务器错误')
            }
          })
        } else {
          message.error('服务器错误')
        }
      })
    }
    this.setState({
      visible1: false
    })
  }
  // 取消（论文）
  handlePCancel = (e) => {
    console.log(e)
    this.setState({
      visible1: false
    })
  }
  // 修改时间
  changPTime = (date, dateString) => {
    this.setState({ ptime: dateString })
  }
  // 修改其他值
  changePValue (type, value) {
    switch (type) {
      case 1: this.setState({ ptitle: value }); break
      case 2: this.setState({ magazine: value }); break
      case 3: this.setState({ author: value }); break
    }
  }

  // 打开竞赛模块
  showCompetitionModal = (ctitle, cclass, reward, students, teacher, ctime, ctype) => {
    console.log(ctitle)
    this.setState({
      visible: true,
      ctitle: ctitle,
      cclass: cclass,
      reward: reward,
      students: students,
      teacher: teacher,
      ctime: ctime,
      typeC:ctype
    })
  }
  // 确认修改（竞赛）
  handleCOk = (e) => {
    let type = this.state.typeC
    if (type == 1) {
      //添加
      let type = 0
      let name = this.state.ctitle
      let level = this.state.cclass
      let winUser = this.state.students
      let guideTea = this.state.teacher
      let labId = this.props.labid
      let winTime = this.state.ctime
      let result = this.state.reward
      let data = `type=${type}&name=${name}&level=${level}&winUser=${winUser}&guideTea=${guideTea}&labId=${labId}&winTime=${winTime}&result=${result}`
      POST('/labt/addLabGlory', data, re => {
        if (re.state == 1) {
          message.success('添加成功')
          POST('/labt/getLabGlory', `labId=${this.props.labid}&type=0`, re => {
            if (re.state == 1) {
              this.setState({ comList: re.data.rows })
            } else {
              message.error('服务器错误')
            }
          })
        } else {
          message.error('服务器错误')
        }
      })
    }else{
      //修改
      let type = 0
      let name = this.state.ctitle
      let level = this.state.cclass
      let winUser = this.state.students
      let guideTea = this.state.teacher
      let labId = this.props.labid
      let winTime = this.state.ctime
      let result = this.state.reward
      let data = `type=${type}&name=${name}&level=${level}&winUser=${winUser}&guideTea=${guideTea}&labId=${labId}&winTime=${winTime}&result=${result}`
      POST('/labt/updateLabGlory', data, re => {
        if (re.state == 1) {
          message.success('修改成功')
          POST('/labt/getLabGlory', `labId=${this.props.labid}&type=0`, re => {
            if (re.state == 1) {
              this.setState({ comList: re.data.rows })
            } else {
              message.error('服务器错误')
            }
          })
        } else {
          message.error('服务器错误')
        }
      })
    }
    this.setState({
      visible: false
    })
  }
  // 取消（竞赛）
  handleCCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  // 修改级别
  changeClass = (e) => {
    console.log(e)
    this.setState({ cclass: e })
  }
  // 修改时间
  changCTime = (date, dateString) => {
    this.setState({ ctime: dateString })
  }
  // 修改其他值
  changeCValue (type, value) {
    switch (type) {
      case 1: this.setState({ ctitle: value }); break
      case 3: this.setState({ reward: value }); break
      case 4: this.setState({ students: value }); break
      case 5: this.setState({ teacher: value }); break
    }
  }
// 删除竞赛成果
  deleteC = (id) => POST('/labt/deleteGlory', `id=${id}`, re => {
    if (re.state == 1) {
      message.success('删除成功')
      POST('/labt/getLabGlory', `labId=${this.props.labid}&type=0`, re => {
        if (re.state == 1) {
          this.setState({ comList: re.data.rows })
        } else {
          message.error('服务器错误')
        }
      })
    } else {
      message.error('服务器错误')
    }
  })
// 删除论文成果
  deleteP = (id) => POST('/labt/deleteGlory', `id=${id}`, re => {
    if (re.state == 1) {
      message.success('删除成功')
      POST('/labt/getLabGlory', `labId=${this.props.labid}&type=1`, re => {
        if (re.state == 1) {
          this.setState({ paList: re.data.rows })
        } else {
          message.error('服务器错误')
        }
      })
    } else {
      message.error('服务器错误')
    }
  })

  render () {
    const columns1 = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
      // render: text => <a href="#">{text}</a>,
    }, {
      title: '级别',
      dataIndex: 'level',
      key: 'level',
      width: '10%',
      render:text => {
        return (
          <div>{text == 0 ? '院级':text == 1 ? '校级':text == 2 ? '省级':'国家级'}</div>
        )
      }
    }, {
      title: '获得成果',
      dataIndex: 'result',
      key: 'result',
      width: '10%'
    }, {
      title: '参与学生',
      dataIndex: 'winUser',
      key: 'winUser',
      width: '15%'
    }, {
      title: '指导老师',
      dataIndex: 'guideTea',
      key: 'guideTea',
      width: '15%'
    }, {
      title: '时间',
      dataIndex: 'winTime',
      key: 'winTime',
      width: '25%',
      render: (text, record, index) => {
        return (
          <Row>
            <Col span={12}>{moment(text).format('YYYY-MM-DD')}</Col>
            <Col span={6}>
              <Button onClick={this.showCompetitionModal.bind(this, record.name, record.level, record.result, record.winUser, record.guideTea, record.winTime, 0)}>修改</Button>
            </Col>
            <Col span={6}><Button type='danger' onClick={this.deleteC.bind(this, record.id)}>删除</Button></Col>
          </Row>
        )
      }
    }]

    const columns2 = [{
      title: '论文标题',
      dataIndex: 'name',
      key: 'name',
      width: '25%'
      // render: text => <a href="#">{text}</a>,
    }, {
      title: '期刊',
      dataIndex: 'magazine',
      key: 'magazine',
      width: '25%'
    }, {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      width: '25%'
    }, {
      title: '时间',
      dataIndex: 'winTime',
      key: 'winTime',
      width: '25%',
      render: (text, record, index) => {
        return (
          <Row>
            <Col span={12}>{moment(text).format('YYYY-MM-DD')}</Col>
            <Col span={6}>
              <Button onClick={this.showPaperModal.bind(this, record.name, record.magazine, record.author, record.winTime, 1)}>修改</Button>
            </Col>
            <Col span={6}><Button type='danger' onClick={this.deleteP.bind(this, record.id)}>删除</Button></Col>
          </Row>
        )
      }
    }]

    return (
      <div style={{ paddingTop: 20, paddingRight: 15 }}>
        <div className='honorcharge'>
          <div className='ho_hea'>
            <h2>实验室成果及荣誉</h2>
          </div>
          <div className='ho_con'>

            {/* competition */}

            <div className='competition' style={{ marginBottom: 20 }}>
              <div className='com_hea'>
                <h3>竞赛成果</h3>
              </div>
              <div className='com_con'>
                <Table columns={columns1} dataSource={this.state.comList} />
              </div>
              <div className='com_foot'>
                <Button type='primary' onClick={this.showCompetitionModal.bind(this, '', '', '', '', '', dateNow.toLocaleDateString(), 1)}><i className='fa fa-plus' /> 添加</Button>
                <Modal
                  title='竞赛成果'
                  visible={this.state.visible}
                  onOk={this.handleCOk}
                  onCancel={this.handleCCancel}
                >
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>获奖作品名称：</h3></Col>
                    <Col span={18}><Input placeholder='输入作品的名称' value={this.state.ctitle} onChange={(e) => this.changeCValue(1, e.target.value)} /></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>级别：</h3></Col>
                    <Col span={18}><Select value={this.state.cclass == 0 ? '院级' : this.state.cclass == 1 ? '校级' : this.state.cclass == 2 ?'省级':'国家级'} 
                    style={{ width: 120 }} onChange={this.changeClass.bind(this)}>
                      <Option value='0'>院级</Option>
                      <Option value='1'>校级</Option>
                      <Option value='2'>省级</Option>
                      <Option value='3'>国家级</Option>
                    </Select></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>获得成果：</h3></Col>
                    <Col span={18}><Input placeholder='输入获得的成果（一等奖，第一名...）' value={this.state.reward} onChange={(e) => this.changeCValue(3, e.target.value)} /></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>参与学生：</h3></Col>
                    <Col span={18}><Input placeholder='输入参与的学生姓名（中间用逗号隔开）' value={this.state.students} onChange={(e) => this.changeCValue(4, e.target.value)} /></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>指导老师：</h3></Col>
                    <Col span={18}><Input placeholder='输入指导老师姓名（中间用逗号隔开）' value={this.state.teacher} onChange={(e) => this.changeCValue(5, e.target.value)} /></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>获奖时间：</h3></Col>
                    <Col span={18}><DatePicker onChange={this.changCTime.bind(this)} defaultValue={moment(this.state.ctime, dateFormat)} /></Col>
                  </Row>
                </Modal>
              </div>
            </div>

            {/* paper */}

            <div className='paper'>
              <div className='pa_hea'>
                <h3>论文发表</h3>
              </div>
              <div className='pa_con'>
                <Table columns={columns2} dataSource={this.state.paList} />
              </div>
              <div className='pa_foot'>
                <Button type='primary' onClick={this.showPaperModal.bind(this, '', '', '', dateNow, 0)}><i className='fa fa-plus' /> 添加</Button>
                <Modal
                  title='论文发表'
                  visible={this.state.visible1}
                  onOk={this.handlePOk}
                  onCancel={this.handlePCancel}
                >
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>论文标题：</h3></Col>
                    <Col span={18}><Input placeholder='输入论文标题' value={this.state.ptitle} onChange={(e) => this.changePValue(1, e.target.value)} /></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>期刊：</h3></Col>
                    <Col span={18}><Input placeholder='输入论文发表的期刊' value={this.state.magazine} onChange={(e) => this.changePValue(2, e.target.value)} /></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>作者：</h3></Col>
                    <Col span={18}><Input placeholder='输入论文的作者（用逗号隔开）' value={this.state.author} onChange={(e) => this.changePValue(3, e.target.value)} /></Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col span={6}><h3>发表时间：</h3></Col>
                    <Col span={18}><DatePicker onChange={this.changPTime.bind(this)} defaultValue={moment(this.state.ptime, dateFormat)} /></Col>
                  </Row>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Honor
