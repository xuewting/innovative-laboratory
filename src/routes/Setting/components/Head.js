import React, { Component } from 'react';
import Default from './0824ab18972bd40790e0d4b571899e510fb30956.jpg'
import { BASE_URL, POST,POSTFile } from '../../../components/commonModules/POST'
import { message } from 'antd'

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      img:''
    }
  }


  componentWillMount() {
    POST('/user/getUserInfo', `data=''`, (re) => {
      if (re.state == 1) {
        this.setState({ src: BASE_URL + re.data.headImg })
      } else if (re.state == -2) {
        message.error('请先登录')
      }
    })
  }


  changeFile() {
    this.refs.file.click()
  }

  //change head

  changeSrc(e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    var imgFile
    this.setState({img:file})

    reader.onload = (e) => {
      imgFile = e.target.result
      this.setState({ src: imgFile })
    }
    reader.readAsDataURL(file);
  }

  //save head
  save() {
    var file = this.state.src
    var formdata = new FormData()
    formdata.append('file',this.state.img)
    formdata.append('type','application/octet-stream')
    POSTFile('/user/uploadHeadImg', formdata, (re) => {
      if (re.state == 1) {
        message.success('上传成功')
      } else if (re.state == -2) {
        message.error('图片格式不正确，请确认')
      } else if (re.state == -1) {
        message.error('请先登录')
      } else {
        message.error('服务器错误')
      }
    })
  }

  render() {
    return (
      <div className='set_head'>
        <div className='set_hh'>
          <h2>修&nbsp;&nbsp;改&nbsp;&nbsp;头&nbsp;&nbsp;像</h2>
        </div>
        <div className='set_himg'>
          <img src={this.state.src ? this.state.src : Default} alt="" />
        </div>
        <div className='set_select'>
          <div className="choise">
            <div className="set_inp" onClick={this.changeFile.bind(this)}>
              <input type="text" className='from_con' value={this.state.src} />
              <input type="file" ref='file' onChange={this.changeSrc.bind(this)} />
              <span className='set_change_file'>
                <button>更改</button>
              </span>
            </div>
          </div>
          <div className="commit">
            <button style={{ cursor: 'pointer' }} onClick={this.save.bind(this)}>
              保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;