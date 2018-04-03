import React, { Component } from 'react'
import './Goodinfo.scss'
import { POST, BASE_URL } from '../../../components/commonModules/POST'
import { Row, Col } from 'antd'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { convertFromRaw, EditorState, convertToRaw, ContentState } from 'draft-js'
class Goodinfo extends Component {
  constructor () {
    super()
    this.state = {
      goodinfo:'',
      labname:'',
      editorState: EditorState.createEmpty()
    }
  }
  goBack () {
    history.back()
  }
  componentDidMount () {
    let id = this.props.params.id
    console.log(id)
    var data = `id=${id}`
    POST('/getGoodsById', data, re => {
      if (re.state === 1) {
        console.log(re)
        this.setState({ goodinfo: re.data })
        this.setState({ editorState: re.data.detailInfo })
        console.log(this.state.editorState)
        this.setState({ labname:re.data.lab.name })
        let editor = this.state.editorState
        console.log(editor)
        this.refs.box.innerHTML = draftToHtml(convertToRaw(editor.getCurrentContent()))
        console.log(draftToHtml(convertToRaw(editor.getCurrentContent())))
      }
    })
  }

  render () {
    const { buyTime, detailInfo, models, name, photo, price, stateId, validTime } = this.state.goodinfo

    return (
      <div>
        <div className='good_info'>
          <div className='good_info_head'>
            <Row gutter={16}>

              <div className='good_info_img'>
                <img src={BASE_URL + photo} alt='' style={{ width:300, height:300 }} />
              </div>

              <div className='good_info_con'>
                <h2>{name}</h2>
                <span className='info_con'>型号：{models}</span>
                <span className='info_con'>状态：{stateId === 1 ? '外借' : '未借'}</span>
                <span className='info_con'>购入价：{price}</span>
                <span className='info_con'>所属实验室：{this.state.labname}</span>
                <span className='info_con'>购入时间：{buyTime}</span>
                <span className='info_con'>有效时间：{validTime}</span>
              </div>

            </Row>
          </div>
        </div>
        <div className='good_active'>
          <div className='good_borrow'>
            <div className='contanct'>
              <h2>详细说明</h2>
              <div className='contanct_con' ref='box' />
            </div>
          </div>
        </div>
        <div className='good_foot'>
          <div className='set' onClick={this.goBack.bind(this)}>
            <i className='fa fa-sign-out' /> 返回
          </div>
        </div>
      </div>
    )
  }
}

export default Goodinfo
